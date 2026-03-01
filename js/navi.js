// navi.js - Dynamic Navigation Manager
// Automatically discovers and creates navigation for pages in /pages directory

// Pages configuration - add/remove pages here
// The 'dir' value is the directory name in /pages and will be displayed as the button label
const pages = [
    { dir: 'projects', isServicePage: false, isUnderConstruction: false },
    { dir: 'contacts', isServicePage: false, isUnderConstruction: false },
    { dir: 'testpage', isServicePage: true, isUnderConstruction: false }
    // Add more pages here - new directories will automatically appear in sidebar
];

/**
 * Detect current page location
 * @returns {string|null} - Current page directory name ('projects', 'contacts', 'home') or null
 */
function getCurrentPageName() {
    const pathname = window.location.pathname;
    
    // Check if we're in a /pages/xxx/ directory
    const pageMatch = pathname.match(/\/pages\/([^\/]+)\//);
    if (pageMatch) {
        return pageMatch[1];
    }
    
    // Check if we're on the home page (index.html in root)
    if (pathname.includes('index.html') && !pathname.includes('/pages/')) {
        return 'home';
    }
    if (pathname.endsWith('/') && !pathname.includes('/pages/')) {
        return 'home';
    }
    
    return null;
}

/**
 * Get base path for links (adjust for current location)
 * @returns {string} - Base path ('.' for pages, '' for home)
 */
function getBasePath() {
    const currentPage = getCurrentPageName();
    // If we're in a /pages/xxx/ directory, we need to go up two levels
    return currentPage !== 'home' && currentPage !== null ? '../../' : '';
}

/**
 * Initialize sidebar navigation dynamically
 * Creates buttons for each page defined in the pages config
 * On home page: shows all pages
 * On sub-pages: shows Home + other pages
 */
function initializeNavigation() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    const currentPage = getCurrentPageName();
    const basePath = getBasePath();
    
    // If we're on a sub-page, add Home button first
    if (currentPage !== 'home' && currentPage !== null) {
        const homeBtn = document.createElement('button');
        homeBtn.className = 'sidebar-btn';
        homeBtn.textContent = 'Home';
        homeBtn.onclick = () => {
            navigateTo(basePath + 'index.html');
        };
        sidebar.appendChild(homeBtn);
    }
    
    // Add page buttons
    pages.forEach(page => {
        // Skip current page when on a sub-page
        if (currentPage !== 'home' && currentPage === page.dir) {
            return;
        }
        
        const button = document.createElement('button');
        button.className = 'sidebar-btn';
        button.textContent = capitalizeFirstLetter(page.dir);
        
        if (page.isUnderConstruction) {
            // Under construction pages show error toast on click
            button.onclick = () => {
                showErrorToast('Page under construction');
            };
        } else {
            // Navigate to the page
            if (currentPage === 'home') {
                // From home page
                button.onclick = () => {
                    navigateTo(`pages/${page.dir}/`);
                };
            } else {
                // From sub-page, adjust path
                button.onclick = () => {
                    navigateTo(`../${page.dir}/`);
                };
            }
        }
        
        sidebar.appendChild(button);
    });
}

/**
 * Capitalize the first letter of a string
 * @param {string} string - The string to capitalize
 * @returns {string} - Capitalized string
 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Check if current page is a service page
 * @returns {boolean} - True if current page is marked as service page
 */
function isCurrentPageServicePage() {
    const currentPage = getCurrentPageName();
    if (!currentPage || currentPage === 'home') {
        return false;
    }
    const page = pages.find(p => p.dir === currentPage);
    return page && page.isServicePage === true;
}

// Initialize navigation when DOM is ready
document.addEventListener('DOMContentLoaded', initializeNavigation);
