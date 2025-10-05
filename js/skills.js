// Get the audio elements
const hoverSound = document.getElementById('hoverSound');
const clickSound = document.getElementById('clickSound');
clickSound.volume = 0.1;

// Ensure audio playback is enabled after interaction
document.body.addEventListener('click', () => {
    hoverSound.play().catch(() => {}); // Resume audio context
    clickSound.play().catch(() => {});
});

// Select all navbar links
const navLinks = document.querySelectorAll('.navbar a');

// Add hover sound to navbar links
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0; // Reset to start of audio
        hoverSound.play().catch(error => {
            console.error('Hover sound failed to play:', error);
        });
    });

    link.addEventListener('click', () => {
        clickSound.currentTime = 0; // Reset to start of audio
        clickSound.play().catch(error => {
            console.error('Click sound failed to play:', error);
        });
    });
});

// Reset audio on page show
window.addEventListener('pageshow', () => {
    hoverSound.currentTime = 0;
    hoverSound.load();
    clickSound.currentTime = 0;
    clickSound.load();
});


// Select nav button
const navButton = document.querySelector('.toggleBtn'); // Make sure your nav button has this class

// Play hover sound for nav button
if (navButton) {
    navButton.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0; // Reset to start
        hoverSound.play().catch(error => {
            console.error('Hover sound failed to play for nav button:', error);
        });
    });
}

// IDs of the elements to add hover sounds
const hoverElements = [
    "prev-photo",
    "next-photo",
    "linkedin",
    "resume",
    "matcha",
    "mango",
    "gameboy",
];

// Add hover event listeners to each element
hoverElements.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener("mouseenter", () => {
            hoverSound.currentTime = 0; // Reset sound to the beginning
            hoverSound.play().catch((error) => {
                console.error("Hover sound failed to play:", error);
            });
        });
    }
});

function addHoverBlurb(imageId, blurbId) {
    const image = document.getElementById(imageId);
    const blurb = document.getElementById(blurbId);

    if (image && blurb) {
        image.addEventListener("mouseenter", () => {
            blurb.style.display = "block"; // Show the blurb
        });

        image.addEventListener("mouseleave", () => {
            blurb.style.display = "none"; // Hide the blurb
        });
    }
}

// Add hover blurbs for LinkedIn and Resume
addHoverBlurb("tool1", "blurb-figma");
addHoverBlurb("tool2", "blurb-adobe");
addHoverBlurb("tool3", "blurb-unity");
addHoverBlurb("tool4", "blurb-blender");
addHoverBlurb("tool5", "blurb-canva");
addHoverBlurb("tool6", "blurb-vscode");
addHoverBlurb("tool7", "blurb-miro");
addHoverBlurb("tool8", "blurb-github");

document.addEventListener("DOMContentLoaded", () => {
    const tools = document.querySelectorAll(".tools img"); // Select all tool icons
    const hoverSound = document.getElementById("hoverSound"); // Hover sound element
    const sfxVolumeSlider = document.getElementById("sfx-volume"); // Volume control slider

    // Sync hover sound volume with SFX slider
    sfxVolumeSlider.addEventListener("input", (e) => {
        hoverSound.volume = parseFloat(e.target.value);
    });

    // Play hover sound on mouseenter
    tools.forEach(tool => {
        tool.addEventListener("mouseenter", () => {
            hoverSound.currentTime = 0; // Reset sound to the start
            hoverSound.play().catch(err => {
                console.error("Hover sound playback failed:", err);
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach((bar) => {
        const level = bar.dataset.level; // Get the data-level value
        const fill = bar.querySelector(".fill"); // Select the fill inside this bar

        // Animate the fill width
        setTimeout(() => {
            fill.style.width = `${level}%`;
        }, 500); // Delay for smooth animation
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");
    const fillSound = document.getElementById("fillSound"); // Select the audio element

    // Play the fill sound when the page loads
    fillSound.play().catch(err => console.error("Sound playback error:", err));

    // Animate the progress bars
    progressBars.forEach((bar) => {
        const level = bar.dataset.level; // Get the target percentage
        const fill = bar.querySelector(".fill"); // Select the fill element

        // Animate the fill to the specified width
        setTimeout(() => {
            fill.style.width = `${level}%`;
        }, 500); // Small delay for smooth effect
    });
});

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

document.addEventListener("DOMContentLoaded", function () {
    const backgroundMusic = document.getElementById("background-music");
    const hoverSound = document.getElementById("hover-sound");
    const clickSound = document.getElementById("click-sound");

    // 🔹 Hardcoded Low Default Volumes
    let defaultMusicVolume = 0.005;  // 0.5% for background music
    let defaultSfxVolume = 0.02;  // 2% for sound effects (click & hover)

    // 🔹 Check Local Storage (If Not Found, Set Default)
    let savedMusicVolume = localStorage.getItem("musicVolume");
    let savedSfxVolume = localStorage.getItem("sfxVolume");

    if (!savedMusicVolume) {
        savedMusicVolume = defaultMusicVolume;
        localStorage.setItem("musicVolume", defaultMusicVolume);
    }

    if (!savedSfxVolume) {
        savedSfxVolume = defaultSfxVolume;
        localStorage.setItem("sfxVolume", defaultSfxVolume);
    }

    // 🔹 Apply Enforced Volume
    backgroundMusic.volume = parseFloat(savedMusicVolume);
    hoverSound.volume = parseFloat(savedSfxVolume);
    clickSound.volume = parseFloat(savedSfxVolume);

    // 🔹 Volume Sliders
    const musicVolumeSlider = document.getElementById("music-volume-slider");
    const sfxVolumeSlider = document.getElementById("sfx-volume-slider");

    // 🔹 Set Slider Values to Reflect Actual Volume
    musicVolumeSlider.value = parseFloat(savedMusicVolume);
    sfxVolumeSlider.value = parseFloat(savedSfxVolume);

    // 🔹 Adjust Slider Sensitivity & Default to Lower Side
    musicVolumeSlider.min = "0.001";  // Minimum at 0.1%
    musicVolumeSlider.max = "0.2";  // Max volume at 20%
    musicVolumeSlider.step = "0.005"; // Fine control
    musicVolumeSlider.value = "0.03"; // Default position at 1%

    sfxVolumeSlider.min = "0.001";  // Minimum at 0.1%
    sfxVolumeSlider.max = "0.2";  // Max volume at 20%
    sfxVolumeSlider.step = "0.005"; // Fine control
    sfxVolumeSlider.value = "0.05"; // Default position at 5%

    // 🔹 Handle Background Music Volume Change
    musicVolumeSlider.addEventListener("input", function () {
        backgroundMusic.volume = parseFloat(this.value);
        localStorage.setItem("musicVolume", this.value);
    });

    // 🔹 Handle Sound Effects Volume Change (Click + Hover)
    sfxVolumeSlider.addEventListener("input", function () {
        hoverSound.volume = parseFloat(this.value);
        clickSound.volume = parseFloat(this.value);
        localStorage.setItem("sfxVolume", this.value);
    });

    console.log(`✅ Music Volume: ${backgroundMusic.volume}`);
    console.log(`✅ SFX Volume: ${hoverSound.volume} (Click & Hover)`);
});
