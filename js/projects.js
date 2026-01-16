// Fetch GitHub projects for KeiNerokami
const GITHUB_USERNAME = 'KeiNerokami';
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`;

async function fetchGitHubProjects() {
    try {
        const response = await fetch(API_URL, {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const repos = await response.json();
        
        // Check if repos is an array
        if (!Array.isArray(repos)) {
            console.error('Invalid response format:', repos);
            displayError();
            return;
        }
        
        // Sort by stars descending
        repos.sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0));
        
        // Filter out forks
        const filteredRepos = repos.filter(repo => !repo.fork);
        
        displayProjects(filteredRepos);
    } catch (error) {
        console.error('Error fetching projects:', error);
        displayError();
    }
}

function displayProjects(repos) {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    
    if (repos.length === 0) {
        container.innerHTML = '<div style="text-align: center; color: #cccccc; padding: 2rem;">No projects found</div>';
        return;
    }
    
    repos.forEach(repo => {
        const card = createProjectCard(repo);
        container.appendChild(card);
    });
}

function createProjectCard(repo) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const language = repo.language || 'Unknown';
    const description = repo.description || 'No description';
    const stars = repo.stargazers_count || 0;
    const forks = repo.forks_count || 0;
    
    card.innerHTML = `
        <div class="project-header">
            <a href="${repo.html_url}" target="_blank" class="project-title">${repo.name}</a>
            <span class="project-language">${language}</span>
        </div>
        <p class="project-description">${description}</p>
        <div class="project-footer">
            <span class="project-stat">
                <i class="bi bi-star"></i> ${stars}
            </span>
            <span class="project-stat">
                <i class="bi bi-diagram-2"></i> ${forks}
            </span>
            <span class="project-updated">
                Updated ${getTimeAgo(repo.updated_at)}
            </span>
        </div>
    `;
    
    return card;
}

function getTimeAgo(date) {
    const now = new Date();
    const updated = new Date(date);
    const seconds = Math.floor((now - updated) / 1000);
    
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + 'y ago';
    
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + 'm ago';
    
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + 'd ago';
    
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + 'h ago';
    
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + 'min ago';
    
    return 'just now';
}

function displayError() {
    const container = document.getElementById('projects-container');
    container.innerHTML = '<div style="text-align: center; color: #cccccc; padding: 2rem;">Failed to load projects. Please try again later.</div>';
}

// Load projects when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    fetchGitHubProjects();
    fetchContributionData();
});

// Fetch contribution data from GitHub GraphQL API
async function fetchContributionData() {
    try {
        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github.v3+json'
            },
            body: JSON.stringify({
                query: `
                    query {
                        user(login: "${GITHUB_USERNAME}") {
                            contributionsCollection {
                                contributionCalendar {
                                    totalContributions
                                    weeks {
                                        contributionDays {
                                            contributionCount
                                            date
                                        }
                                    }
                                }
                            }
                        }
                    }
                `
            })
        });

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.errors) {
            console.error('GraphQL errors:', data.errors);
            // Try fallback method
            console.log('Trying fallback contribution data fetch...');
            fetchContributionDataFallback();
            return;
        }

        if (!data.data || !data.data.user) {
            console.error('Unexpected response format:', data);
            fetchContributionDataFallback();
            return;
        }

        const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
        const totalContributions = data.data.user.contributionsCollection.contributionCalendar.totalContributions;
        
        displayContributions(weeks, totalContributions);
    } catch (error) {
        console.error('Error fetching contribution data:', error);
        // Try fallback method
        console.log('Fallback: Attempting alternate method...');
        fetchContributionDataFallback();
    }
}

// Fallback method using REST API to get user activity
async function fetchContributionDataFallback() {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=300`, {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const events = await response.json();
        
        // Generate contribution data from events
        const weeks = generateContributionWeeks(events);
        displayContributions(weeks, events.length);
    } catch (error) {
        console.error('Error in fallback fetch:', error);
        displayContributionError();
    }
}

// Generate weeks from events data
function generateContributionWeeks(events) {
    const today = new Date();
    const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
    
    // Create a map of contribution counts by date
    const contributionMap = {};
    
    events.forEach(event => {
        const eventDate = new Date(event.created_at);
        if (eventDate >= oneYearAgo && eventDate <= today) {
            const dateStr = eventDate.toISOString().split('T')[0];
            contributionMap[dateStr] = (contributionMap[dateStr] || 0) + 1;
        }
    });
    
    // Generate weeks array
    const weeks = [];
    let currentDate = new Date(oneYearAgo);
    
    while (currentDate <= today) {
        const week = {
            contributionDays: []
        };
        
        // Add 7 days to week
        for (let i = 0; i < 7; i++) {
            const dateStr = currentDate.toISOString().split('T')[0];
            week.contributionDays.push({
                date: dateStr,
                contributionCount: contributionMap[dateStr] || 0
            });
            currentDate.setDate(currentDate.getDate() + 1);
        }
        
        weeks.push(week);
    }
    
    return weeks;
}

function displayContributions(weeks, totalContributions) {
    const container = document.getElementById('contribution-scroll-wrapper');
    container.innerHTML = '';
    
    const table = document.createElement('div');
    table.className = 'contribution-table';
    
    // Group weeks by month
    const monthGroups = groupWeeksByMonth(weeks);
    
    // Create contribution grid
    const weeksArray = weeks.slice(-52); // Last 52 weeks
    weeksArray.forEach(week => {
        const weekDiv = document.createElement('div');
        weekDiv.className = 'contribution-week';
        
        week.contributionDays.forEach(day => {
            const dayDiv = document.createElement('div');
            dayDiv.className = `contribution-day ${getContributionLevelClass(day.contributionCount)}`;
            
            dayDiv.innerHTML = `
                <div class="contribution-tooltip">
                    ${day.contributionCount} contribution${day.contributionCount !== 1 ? 's' : ''} on ${new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
            `;
            
            weekDiv.appendChild(dayDiv);
        });
        
        table.appendChild(weekDiv);
    });
    
    container.appendChild(table);
    
    // Add legend
    updateLegend();
}

function getContributionLevelClass(count) {
    if (count === 0) return 'contribution-level-0';
    if (count <= 3) return 'contribution-level-1';
    if (count <= 6) return 'contribution-level-2';
    if (count <= 9) return 'contribution-level-3';
    return 'contribution-level-4';
}

function groupWeeksByMonth(weeks) {
    const months = {};
    weeks.forEach(week => {
        const date = new Date(week.contributionDays[0].date);
        const month = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        if (!months[month]) {
            months[month] = [];
        }
        months[month].push(week);
    });
    return months;
}

function updateLegend() {
    const legendSquares = document.getElementById('legend-squares');
    legendSquares.innerHTML = '';
    
    const levels = [
        { class: 'contribution-level-0', label: '' },
        { class: 'contribution-level-1', label: '' },
        { class: 'contribution-level-2', label: '' },
        { class: 'contribution-level-3', label: '' },
        { class: 'contribution-level-4', label: '' }
    ];
    
    levels.forEach(level => {
        const square = document.createElement('div');
        square.className = `legend-square ${level.class}`;
        square.title = level.label;
        legendSquares.appendChild(square);
    });
}

function displayContributionError() {
    const container = document.getElementById('contribution-scroll-wrapper');
    container.innerHTML = '<div style="text-align: center; color: #999; padding: 2rem;">Unable to load contribution data. Please visit <a href="https://github.com/KeiNerokami" target="_blank" style="color: #4CAF50;">GitHub</a> to view contributions.</div>';
}
