// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Portfolio loaded");
// });

function closeSidebar() {
    document.getElementById('sidebar').style.left = '-300px';
}

function openSidebar() {
    document.getElementById('sidebar').style.left = '2em';
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    const modalImg = document.querySelector('.modal-img');
    modal.style.opacity = '0';
    modalImg.style.transform = 'translate(-50%, -50%) scale(0.8)';
    setTimeout(() => {
        modal.style.visibility = 'hidden';
    }, 300);
}

function showImageModal() {
    const modal = document.getElementById('image-modal');
    const modalImg = document.querySelector('.modal-img');
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    setTimeout(() => {
        modalImg.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 10); // small delay to trigger transition
}

function handleOpenBtnPosition() {
    const openBtn = document.querySelector('.open-btn');
    const baseContainer = document.querySelector('.base-container');
    const body = document.body;

    if (window.innerWidth > 768) {
        // Move outside the container, to body, fixed position
        if (openBtn.parentElement !== body) {
            body.appendChild(openBtn);
        }
        openBtn.style.position = 'fixed';
        openBtn.style.top = '20px';
        openBtn.style.left = '20px';
        openBtn.style.zIndex = '1001';
    } else {
        // Move inside the container, static
        if (openBtn.parentElement !== baseContainer) {
            baseContainer.insertBefore(openBtn, baseContainer.firstChild);
        }
        openBtn.style.position = 'absolute';
        openBtn.style.top = '';
        openBtn.style.left = '';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    handleOpenBtnPosition();
});

window.addEventListener('resize', handleOpenBtnPosition);
