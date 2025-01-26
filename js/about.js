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


// Array of image sources and their alt texts
const photos = [
    { src: "assets/about/headshot_pixel.png", alt: "Pixel Drawing of Me" },
    { src: "assets/about/profile.png", alt: "Professional Headshot 1" },
];

// Track the current photo index
let currentIndex = 0;

// DOM elements
const currentPhoto = document.getElementById("current-photo");
const prevButton = document.getElementById("prev-photo");
const nextButton = document.getElementById("next-photo");

// Update photo based on the current index
function updatePhoto() {
    const { src, alt } = photos[currentIndex];
    currentPhoto.classList.remove("fade-in");
    setTimeout(() => {
        currentPhoto.src = src;
        currentPhoto.alt = alt;
        currentPhoto.classList.add("fade-in");
    }, 100);
}

// Event listeners for arrows
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length; // Wrap around to the last photo
    updatePhoto();
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % photos.length; // Wrap around to the first photo
    updatePhoto();
});

// Initialize the photo switcher
updatePhoto();


document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && currentIndex > 0) {
        currentIndex--;
        updatePhoto();
    }
    if (event.key === "ArrowRight" && currentIndex < photos.length - 1) {
        currentIndex++;
        updatePhoto();
    }
});

function updatePhoto() {
    currentPhoto.classList.remove("fade-in");
    setTimeout(() => {
        const { src, alt } = photos[currentIndex];
        currentPhoto.src = src;
        currentPhoto.alt = alt;
        currentPhoto.classList.add("fade-in");
    }, 100);
}

// Select all favorite items
const favoriteItems = document.querySelectorAll(".favorite-item");

favoriteItems.forEach((item) => {
    const image = item.querySelector(".clickable-image");
    const blurb = item.querySelector(".blurb");

    // Add mouseenter event to show the blurb
    image.addEventListener("mouseenter", () => {
        blurb.style.display = "block"; // Show the blurb
    });

    // Add mouseleave event to hide the blurb
    image.addEventListener("mouseleave", () => {
        blurb.style.display = "none"; // Hide the blurb
    });
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
addHoverBlurb("linkedin", "blurb-linkedin");
addHoverBlurb("resume", "blurb-resume");


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
