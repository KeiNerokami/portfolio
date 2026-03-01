// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Portfolio loaded");
// });

function showErrorToast(message = 'This section is not available yet.') {
    // Prevent stacking multiple toasts
    if (document.querySelector('.error-toast')) return;

    const toast = document.createElement('div');
    toast.className = 'error-toast';
    toast.textContent = message;

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');

        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 2000);
}

function showPrimaryToast(message = 'Success!') {
    // Prevent stacking multiple toasts
    if (document.querySelector('.primary-toast')) return;

    const toast = document.createElement('div');
    toast.className = 'primary-toast';
    toast.textContent = message;

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');

        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 2000);
}

function showInfoToast(message = 'Information') {
    // Prevent stacking multiple toasts
    if (document.querySelector('.info-toast')) return;

    const toast = document.createElement('div');
    toast.className = 'info-toast';
    toast.textContent = message;

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');

        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 2000);
}

function restoreMain() {
    document
        .querySelector('.main-surface')
        ?.scrollIntoView({ behavior: 'smooth' });
}


function openSidebar() {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.querySelector('.open-btn');
    const baseContainers = document.querySelectorAll('.base-container');
    const footer = document.querySelector('footer');

    sidebar.style.left = '2em';
    openBtn.style.transform = 'translateX(-300px)';
    
    baseContainers.forEach(container => {
        container.classList.add('shifted');
    });
    footer.style.paddingLeft = '40em';
    
    // Disable scrolling
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.querySelector('.open-btn');
    const baseContainers = document.querySelectorAll('.base-container');
    const footer = document.querySelector('footer');

    sidebar.style.left = '-300px';
    openBtn.style.left = '20px';
    
    baseContainers.forEach(container => {
        container.classList.remove('shifted');
    });
    
    footer.style.paddingLeft = '0em';
    openBtn.style.transform = 'translateX(0)';
    
    // Re-enable scrolling
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
}

function navigateTo(destination) {
    if (!destination || destination === '#') {
        showErrorToast('That section is still under construction.');
        return;
    }
    closeSidebar();
    setTimeout(() => {
        window.location.href = destination;
    }, 300);
} 


function closeImageModal() {
    const modal = document.getElementById('image-modal');
    const modalImg = document.querySelector('.modal-img');
    const miniProfile = document.querySelector('.mini-profile');
    
    modal.style.opacity = '0';
    modalImg.style.transform = 'translate(-50%, -50%) scale(0.8)';
    miniProfile.classList.remove('slide-down');
    
    setTimeout(() => {
        modal.style.visibility = 'hidden';
    }, 300);
}

function showImageModal() {
    const modal = document.getElementById('image-modal');
    const modalImg = document.querySelector('.modal-img');
    const miniProfile = document.querySelector('.mini-profile');
    
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    miniProfile.classList.add('slide-down');
    
    setTimeout(() => {
        modalImg.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 10); // small delay to trigger transition
}

function handleOpenBtnPosition() {
    const openBtn = document.querySelector('.open-btn');
    
    const baseContainer = document.querySelector('.base-container');
    const header = document.querySelector('#header');
    const body = document.body;


    if (window.innerWidth > 768) {
        // Move outside the container, to body, fixed position
        if (openBtn.parentElement !== body) {
            body.appendChild(openBtn);
        }
        openBtn.style.position = 'fixed';
        openBtn.style.top = '0.3em';
        openBtn.style.left = '1em';
        openBtn.style.zIndex = '2';
    } else {
        // Stay fixed on header - mobile
        if (openBtn.parentElement !== body) {
            body.appendChild(openBtn);
        }
        openBtn.style.position = 'fixed';
        openBtn.style.top = '0.3em';
        openBtn.style.left = '1em';
        openBtn.style.zIndex = '2';
    }
}

/**
 * Load reach-out modal from include file
 */
function loadReachOutModal() {
    // Check if modal already exists
    if (document.getElementById('reach-out-modal')) {
        return;
    }

    // Determine the path based on current location
    const basePath = window.location.pathname.includes('/pages/') ? '../../' : '';
    const modalPath = basePath + 'includes/reach-out-modal.html';

    fetch(modalPath)
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);
        })
        .catch(error => console.error('Error loading reach-out modal:', error));
}

/**
 * Load image modal from include file
 */
function loadImageModal() {
    // Check if modal already exists
    if (document.getElementById('image-modal')) {
        return;
    }

    // Determine the path based on current location
    const basePath = window.location.pathname.includes('/pages/') ? '../../' : '';
    const modalPath = basePath + 'includes/image-modal.html';

    fetch(modalPath)
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);
            // Set the profile image src after loading
            const profileImg = document.querySelector('.mini-profile');
            const modalImg = document.querySelector('.modal-img');
            if (profileImg && modalImg) {
                modalImg.src = profileImg.src;
            }
        })
        .catch(error => console.error('Error loading image modal:', error));
}

document.addEventListener("DOMContentLoaded", () => {
    handleOpenBtnPosition();
    loadReachOutModal();
    loadImageModal();
    
    const profileImg = document.querySelector('.profile-img');
    const miniProfile = document.querySelector('.mini-profile');

    // If profile-img is not on page, activate miniprofile permanently
    if (!profileImg) {
        miniProfile.classList.add('visible');
    } else {
        // Otherwise, use scroll-based visibility
        const observer = new IntersectionObserver(
            ([entry]) => {
                // mini profile visibility based on profile-img visibility
                if (!entry.isIntersecting) {
                    miniProfile.classList.add('visible');
                } else {
                    miniProfile.classList.remove('visible');
                }
            },
            {
                threshold: 0.2
            }
        );
        
        observer.observe(profileImg);
    }

    
});

window.addEventListener('resize', handleOpenBtnPosition);
/* ===== Preloader ===== */
function preloadImages() {
    const imageSelectors = [
        'img',
        'img[src]',
        '[style*="background-image"]'
    ];
    
    const imagesToLoad = [];
    
    // Collect all img elements
    document.querySelectorAll('img').forEach(img => {
        if (img.src && !img.src.includes('data:')) {
            imagesToLoad.push(img.src);
        }
    });
    
    // Collect background images from style attributes
    document.querySelectorAll('[style*="background-image"]').forEach(element => {
        const match = element.style.backgroundImage.match(/url\(['"]?([^'")]+)['"]?\)/);
        if (match && match[1]) {
            imagesToLoad.push(match[1]);
        }
    });
    
    // Preload images
    imagesToLoad.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    console.log(`Preloading ${imagesToLoad.length} images`);
}

// Run preloader when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadImages);
} else {
    preloadImages();
}

/* ===== Placeholder Image API (Picsum.photos) ===== */

/**
 * Get a placeholder image URL from Picsum.photos
 * @param {number} width - Image width in pixels
 * @param {number} height - Image height in pixels
 * @param {string|number} seed - Optional seed for consistent image OR image ID (use "id:42" format)
 * @returns {string} Placeholder image URL
 */
function getPlaceholderImage(width = 300, height = 300, seed = '') {
    if (String(seed).startsWith('id:')) {
        // Use specific image ID
        const id = String(seed).substring(3);

        return `https://picsum.photos/id/${id}/${width}/${height}`;
    }
    const seedParam = seed ? `?random=${seed}` : '';
    return `https://picsum.photos/${width}/${height}${seedParam}`;
}

/**
 * Get a grayscale placeholder image
 * @param {number} width - Image width in pixels
 * @param {number} height - Image height in pixels
 * @param {string|number} seed - Optional seed for consistent image OR image ID (use "id:42" format)
 * @returns {string} Grayscale placeholder image URL
 */
function getPlaceholderImageGrayscale(width = 300, height = 300, seed = '') {
    if (String(seed).startsWith('id:')) {
        const id = String(seed).substring(3);
        return `https://picsum.photos/id/${id}/${width}/${height}?grayscale`;
    }
    const seedParam = seed ? `&random=${seed}` : '';
    return `https://picsum.photos/${width}/${height}?grayscale${seedParam}`;
}

/**
 * Get a blurred placeholder image
 * @param {number} width - Image width in pixels
 * @param {number} height - Image height in pixels
 * @param {number} blur - Blur amount (1-10)
 * @param {string} seed - Optional seed for consistent image
 * @returns {string} Blurred placeholder
 */
function getPlaceholderImageBlurred(width = 300, height = 300, blur = 5, seed = '') {
    const seedParam = seed ? `&random=${seed}` : '';
    return `https://picsum.photos/${width}/${height}?blur=${blur}${seedParam}`;
}

/** * Open the reach out form modal
 */
function openReachOutModal() {
    const modal = document.getElementById('reach-out-modal');
    if (modal) {
        modal.classList.add('show');
        modal.style.opacity = '1';
        modal.style.visibility = 'visible';
    }
}

/**
 * Close the reach out form modal
 */
function closeReachOutModal() {
    const modal = document.getElementById('reach-out-modal');
    if (modal) {
        modal.classList.remove('show');
        modal.style.opacity = '0';
        modal.style.visibility = 'hidden';
    }
}

/**
 * Handle immutable input click (shows error toast)
 */
function onImmutableInputClick(event) {
    event.preventDefault();
    showErrorToast('Under construction');
}

/** * Load placeholder images into elements with data-placeholder attribute
 * Format: data-placeholder="width,height[,seed][,style]"
 * Styles: 'grayscale', 'blur'
 * Example: <img data-placeholder="300,300,seed1,grayscale">
 */
function loadPlaceholderImages() {
    document.querySelectorAll('[data-placeholder]').forEach(element => {
        const params = element.getAttribute('data-placeholder').split(',');
        const width = parseInt(params[0]) || 300;
        const height = parseInt(params[1]) || 300;
        const seed = params[2] || '';
        const style = params[3] || 'normal';

        let url;
        switch (style) {
            case 'grayscale':
                url = getPlaceholderImageGrayscale(width, height, seed);
                break;
            case 'blur':
                url = getPlaceholderImageBlurred(width, height, 5, seed);
                break;
            default:
                url = getPlaceholderImage(width, height, seed);
        }

        if (element.tagName === 'IMG') {
            element.src = url;
        } else {
            element.style.backgroundImage = `url('${url}')`;
        }
    });
}

// Load placeholder images on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadPlaceholderImages);
} else {
    loadPlaceholderImages();
}

/**
 * Load suggest feature modal from includes
 */
function loadSuggestFeatureModal() {
    const container = document.getElementById('suggest-feature-modal-container');
    if (container && !document.getElementById('suggest-feature-modal')) {
        fetch('../../includes/suggest-feature-modal.html')
            .then(response => response.text())
            .then(html => {
                container.innerHTML = html;
            })
            .catch(error => console.error('Error loading suggest feature modal:', error));
    }
}

/**
 * Open the suggest feature modal
 */
function openSuggestFeatureModal() {
    const modal = document.getElementById('suggest-feature-modal');
    if (!modal) {
        loadSuggestFeatureModal();
        setTimeout(() => {
            const modal = document.getElementById('suggest-feature-modal');
            if (modal) {
                modal.classList.add('show');
                modal.style.opacity = '1';
                modal.style.visibility = 'visible';
            }
        }, 100);
    } else {
        modal.classList.add('show');
        modal.style.opacity = '1';
        modal.style.visibility = 'visible';
    }
}

/**
 * Close the suggest feature modal
 */
function closeSuggestFeatureModal() {
    const modal = document.getElementById('suggest-feature-modal');
    if (modal) {
        modal.classList.remove('show');
        modal.style.opacity = '0';
        modal.style.visibility = 'hidden';
    }
}