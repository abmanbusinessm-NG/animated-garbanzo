// Previous page navigation logic
function nextPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const targetPage = document.getElementById(`page-${pageNumber}`);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // If we reached page 5, initialize the prank layout
        if (pageNumber === 5) {
            resetNoButton();
        }
    }
}

// 1. RUNAWAY "NO" BUTTON LOGIC (Designed for PC Mouse)
document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('no-btn');
    
    if (noBtn) {
        noBtn.addEventListener('mouseover', moveNoButton);
        noBtn.addEventListener('click', moveNoButton); // Just in case he manages to click it
    }

    // 2. VIBRATE "OK" BUTTON LOGIC
    const okBtn = document.getElementById('ok-btn');
    if (okBtn) {
        okBtn.addEventListener('mouseenter', () => okBtn.classList.add('vibrate'));
        okBtn.addEventListener('mouseleave', () => okBtn.classList.remove('vibrate'));
    }
});

function moveNoButton() {
    const noBtn = document.getElementById('no-btn');
    
    // Generate a random position inside the container window bounds
    const maxX = window.innerWidth - noBtn.offsetWidth - 50;
    const maxY = window.innerHeight - noBtn.offsetHeight - 50;
    
    const randomX = Math.max(10, Math.floor(Math.random() * maxX));
    const randomY = Math.max(10, Math.floor(Math.random() * maxY));
    
    // Detach it and throw it anywhere on his PC screen
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

function resetNoButton() {
    const noBtn = document.getElementById('no-btn');
    if (noBtn) {
        noBtn.style.position = 'absolute';
        noBtn.style.left = 'auto';
        noBtn.style.top = 'auto';
    }
}

// 3. SUCCESS LOGIC (When he gives up and clicks OK)
function acceptDeal() {
    document.getElementById('question-box').classList.add('hidden');
    document.getElementById('no-btn').classList.add('hidden');
    document.getElementById('success-screen').classList.remove('hidden');
}