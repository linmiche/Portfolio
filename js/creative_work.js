document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll(".nav-button");
    const hoverSound = document.getElementById("hoverSound");

    navButtons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
            hoverSound.currentTime = 0; // Restart the sound
            hoverSound.play().catch((error) => {
                console.error("Hover sound playback failed:", error);
            });
        });
    });
});

