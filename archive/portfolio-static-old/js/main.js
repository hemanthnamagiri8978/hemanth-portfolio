// State
let currentScore = 0;
const scoreDisplay = document.getElementById('scoreDisplay');
let isMoving = false;

// DOM Elements
const nodes = document.querySelectorAll('.level-node');
const playerVehicle = document.getElementById('player-vehicle');
const overlay = document.getElementById('modal-overlay');
const closeBtns = document.querySelectorAll('.close-btn');

// Constants for Map System (relative to the 1000x700 map path viewBox)
// We want to translate the coordinates applied in HTML data attributes securely to visual position
nodes.forEach(node => {
    const x = parseFloat(node.getAttribute('data-x'));
    const y = parseFloat(node.getAttribute('data-y'));

    // Position node. The CSS offsets margin-left -500 and margin-top -350 
    // means applying left: x and top: y directly maps onto our 1000x700 svg coordinate space
    node.style.left = `calc(50% - 500px + ${x}px)`;
    node.style.top = `calc(50% - 350px + ${y}px)`;

    // Setup click listener for navigation
    node.addEventListener('click', () => handleNodeClick(node));
});

// Initialization
function init() {
    // start at intro modal
    setTimeout(() => {
        openModal('start');
    }, 1000);

    // Set initial player position
    const startNode = document.getElementById('node-start');
    if (startNode) {
        teleportPlayer(startNode);
    }
}

// Map Logic
function teleportPlayer(targetNode) {
    const targetX = targetNode.getAttribute('data-x');
    const targetY = targetNode.getAttribute('data-y');

    // Using hardware accelerated translate based on map coord system
    playerVehicle.style.transform = `translate(${targetX}px, ${targetY}px)`;
}

function handleNodeClick(targetNode) {
    if (isMoving) return; // Prevent clicking while moving

    const levelId = targetNode.getAttribute('data-level');

    // Don't replay intro on start node click
    if (levelId === 'start' && targetNode.classList.contains('active-node')) {
        openModal(levelId);
        return;
    }

    isMoving = true;

    updateScore(500); // give points for navigating

    // Get target coords
    const targetX = parseFloat(targetNode.getAttribute('data-x'));
    const targetY = parseFloat(targetNode.getAttribute('data-y'));

    // Get current coords from transform matrix (simplified extraction)
    const style = window.getComputedStyle(playerVehicle);
    const matrix = new DOMMatrixReadOnly(style.transform);
    const currentX = matrix.m41;
    const currentY = matrix.m42;

    // Calculate distance to determine travel time (pixels per millisecond)
    const distance = Math.sqrt(Math.pow(targetX - currentX, 2) + Math.pow(targetY - currentY, 2));
    const speed = 0.5; // pixels per ms
    const duration = Math.max(distance / speed, 500); // At least 500ms

    // Calculate driving direction angle (optional: rotate car to face direction)
    let angle = Math.atan2(targetY - currentY, targetX - currentX) * (180 / Math.PI);

    // Apply movement
    playerVehicle.style.transition = `transform ${duration}ms linear`;
    // We add rotation so the car points towards destination
    playerVehicle.style.transform = `translate(${targetX}px, ${targetY}px) rotate(${angle}deg)`;

    // Update active node styling visually
    nodes.forEach(n => n.classList.remove('active-node'));
    targetNode.classList.add('active-node');

    // Wait for movement to finish, then open modal
    setTimeout(() => {
        isMoving = false;

        // Reset rotation after stopping so car faces "right" or visually reset
        playerVehicle.style.transition = `transform 0.3s ease`;
        playerVehicle.style.transform = `translate(${targetX}px, ${targetY}px) rotate(0deg)`;

        openModal(levelId);
    }, duration);
}

// Modal Logic
function openModal(levelId) {
    const modal = document.getElementById(`modal-${levelId}`);
    if (modal) {
        overlay.classList.add('active');
        // Hide all others
        document.querySelectorAll('.game-modal').forEach(m => m.classList.remove('active'));
        // Show target
        modal.classList.add('active');
    }
}

function closeModal() {
    overlay.classList.remove('active');
    document.querySelectorAll('.game-modal').forEach(m => m.classList.remove('active'));
}

// Hook up close buttons
closeBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
});
overlay.addEventListener('click', closeModal);

// Score logic
function updateScore(points) {
    currentScore += points;
    // Format to 5 digits
    scoreDisplay.innerText = currentScore.toString().padStart(5, '0');
}

// Contact form Mock
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const orig = btn.innerText;
        btn.innerText = "TRANSMITTING...";
        btn.style.background = "var(--terminal-green)";
        btn.style.color = "black";

        updateScore(1500); // Point bonus for contact

        setTimeout(() => {
            btn.innerText = "TRANSMISSION SUCCESSFUL";
            form.reset();
            setTimeout(() => {
                btn.innerText = orig;
                btn.style.background = "var(--neon-pink)";
                btn.style.color = "white";
                closeModal();
            }, 2000);
        }, 1500);
    });
}

// Start Game
init();
