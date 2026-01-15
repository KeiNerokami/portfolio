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
document.addEventListener('DOMContentLoaded', fetchGitHubProjects);
