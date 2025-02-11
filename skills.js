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


// Background music setup
const backgroundMusic = document.getElementById("background-music");

// Retrieve saved playback state and volume from localStorage
const savedMusicVolume = localStorage.getItem("musicVolume") || 0.05; // Default to 10%
const savedPlaybackTime = localStorage.getItem("playbackTime") || 0;

// Apply saved volume and playback time
backgroundMusic.volume = parseFloat(savedMusicVolume); // Ensure consistent volume
backgroundMusic.currentTime = parseFloat(savedPlaybackTime);

// Debugging: Log the initial settings
console.log("Initial background music volume:", backgroundMusic.volume);
console.log("Starting playback time:", backgroundMusic.currentTime);

// Autoplay background music
backgroundMusic.play().catch((error) => {
    console.error("Music autoplay blocked:", error);
});

// Save playback state periodically
backgroundMusic.addEventListener("timeupdate", () => {
    localStorage.setItem("playbackTime", backgroundMusic.currentTime);
});

// Save volume when leaving the page
window.addEventListener("beforeunload", () => {
    localStorage.setItem("musicVolume", backgroundMusic.volume);
});



// Loop music when it ends
backgroundMusic.addEventListener("ended", () => {
    backgroundMusic.currentTime = 0;
    backgroundMusic.play();
});

// Get volume sliders
const musicVolumeSlider = document.getElementById("music-volume");
const sfxVolumeSlider = document.getElementById("sfx-volume");

// Define the slider settings
const sliderMin = parseFloat(musicVolumeSlider.min); // Minimum value (0)
const sliderStep = parseFloat(musicVolumeSlider.step); // Step value (0.01)
const thirdLowestVolume = sliderMin + sliderStep * 3; // Calculate 3rd-to-lowest value

// Set the initial slider value and background music volume
musicVolumeSlider.value = thirdLowestVolume; // Sync slider with calculated value
backgroundMusic.volume = thirdLowestVolume; // Apply to audio volume

// Debugging: Log the initial settings
console.log("Initial slider value:", musicVolumeSlider.value);
console.log("Initial background music volume:", backgroundMusic.volume);


// Retrieve saved SFX volume from localStorage
const savedSfxVolume = localStorage.getItem("sfxVolume") || 1;

// Set initial SFX volume
hoverSound.volume = parseFloat(savedSfxVolume);
clickSound.volume = parseFloat(savedSfxVolume);

// Update background music volume
musicVolumeSlider.value = savedMusicVolume; // Sync slider with saved volume
musicVolumeSlider.addEventListener("input", (e) => {
    const volume = parseFloat(e.target.value);
    backgroundMusic.volume = volume;
    localStorage.setItem("musicVolume", volume);
    console.log("Updated background music volume:", volume);
});

// Update SFX volume
sfxVolumeSlider.value = savedSfxVolume; // Sync slider with saved volume
sfxVolumeSlider.addEventListener("input", (e) => {
    const volume = parseFloat(e.target.value);
    hoverSound.volume = volume;
    clickSound.volume = volume;
    localStorage.setItem("sfxVolume", volume);
});

backgroundMusic.play().catch((error) => {
    console.error("Music autoplay blocked:", error);
});

const playlist = [
    "assets/songs/spotifydown.com - leon kart - leon chang.mp3",
    "assets/songs/spotifydown.com - coffee shop jam - leon chang.mp3",
    "assets/songs/spotifydown.com - fireworks - leon chang.mp3",
    "assets/songs/spotifydown.com - big boost city - leon chang.mp3",
    "assets/songs/spotifydown.com - frog summer - leon chang.mp3",
    "assets/songs/spotifydown.com - honey milk island - leon chang.mp3",
    "assets/songs/spotifydown.com - i think i like you - leon chang.mp3",
    "assets/songs/spotifydown.com - live with it - leon chang.mp3",
    "assets/songs/spotifydown.com - macadamia hills - leon chang.mp3",
    "assets/songs/spotifydown.com - orchid coast - leon chang.mp3",
    "assets/songs/spotifydown.com - peppermint parkway - leon chang.mp3",
    "assets/songs/spotifydown.com - sleep it off - leon chang.mp3",
    "assets/songs/spotifydown.com - the cat of sundrop bay - leon chang.mp3",
    "assets/songs/spotifydown.com - amaretto island - leon chang.mp3"
];

// Initialize the current song index
let currentSongIndex = 0;

function playSong(index) {
    if (index < playlist.length) {
        backgroundMusic.src = playlist[index];
        backgroundMusic.volume = parseFloat(localStorage.getItem("musicVolume") || 0.1); // Ensure volume consistency
        backgroundMusic.play().catch((error) => {
            console.error("Error playing song:", error);
        });
    }
}



// Event listener for when a song ends
backgroundMusic.addEventListener("ended", () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length; // Loop back to the start
    playSong(currentSongIndex);
});

// Start the playlist
playSong(currentSongIndex);

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
