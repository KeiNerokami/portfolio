/**
 * patron.js - Patron Support Toast System
 * Shows rotating support toasts on service pages with clickable links
 */

// Configuration for patron toasts
const patronConfig = {
    toasts: [
        {
            id: 'coffee',
            message: '☕ Love this tool? Buy me a coffee!',
            url: 'https://buymeacoffee.com',
            className: 'coffee-toast',
            delay: 0 // First toast shows immediately
        },
        {
            id: 'patreon',
            message: '❤️ Support on Patreon',
            url: 'https://patreon.com',
            className: 'patreon-toast',
            delay: 30000 // 30s after first
        },
        {
            id: 'discord',
            message: '💜 Join our Discord community',
            url: 'https://discord.gg',
            className: 'discord-toast',
            delay: 60000 // 60s after first (30s after second)
        }
    ],
    intervalBetweenToasts: 30000 // 30 seconds between each toast
};

/**
 * Shows a clickable patron toast that redirects on click
 * @param {Object} toastConfig - Toast configuration object
 */
function showPatronToast(toastConfig) {
    // Prevent stacking multiple toasts
    if (document.querySelector(`.${toastConfig.className}`)) return;

    const toast = document.createElement('div');
    toast.className = toastConfig.className;
    toast.textContent = toastConfig.message;
    toast.style.cursor = 'pointer';
    
    // Add click handler to open URL
    toast.onclick = () => {
        window.open(toastConfig.url, '_blank');
        toast.classList.remove('show');
        toast.classList.add('hide');
        setTimeout(() => {
            toast.remove();
        }, 400);
    };

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    // Auto-hide after 5 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.classList.remove('show');
            toast.classList.add('hide');

            setTimeout(() => {
                if (toast.parentElement) {
                    toast.remove();
                }
            }, 400);
        }
    }, 5000);
}

/**
 * Initialize patron toasts for service pages
 * Shows rotating toasts at specified intervals
 */
function initializePatronToasts() {
    // Check if current page is a service page
    if (!isCurrentPageServicePage()) {
        return;
    }

    // Schedule each toast to show after its delay
    patronConfig.toasts.forEach((toastConfig, index) => {
        setTimeout(() => {
            showPatronToast(toastConfig);
        }, toastConfig.delay);
    });
}

// Initialize patron toasts when DOM is ready
document.addEventListener('DOMContentLoaded', initializePatronToasts);
