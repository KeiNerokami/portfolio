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
    openBtn.style.left = '-40px';
    baseContainers.forEach(container => {
        container.classList.add('shifted');
    });
    footer.style.paddingLeft = '40em';
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
        // Stay fixed on header for mobile
        if (openBtn.parentElement !== body) {
            body.appendChild(openBtn);
        }
        openBtn.style.position = 'fixed';
        openBtn.style.top = '0.3em';
        openBtn.style.left = '1em';
        openBtn.style.zIndex = '2';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    handleOpenBtnPosition();
    
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
