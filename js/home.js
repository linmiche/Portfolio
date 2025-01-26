// Select all clickable elements
const imageButtons = document.querySelectorAll('.homepage-menu-icon');

// Get the audio elements
const hoverSound = document.getElementById('hoverSound');
const clickSound = document.getElementById('clickSound');
clickSound.volume = 0.1;

// Ensure audio context is resumed
document.body.addEventListener('click', () => {
    hoverSound.play().catch(() => {}); // Resume audio context
    clickSound.play().catch(() => {});
});

// Play sounds on hover and click
imageButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play().catch(() => {});
    });

    button.addEventListener('click', () => {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => {});
    });
});

// Reset audio on page show
window.addEventListener('pageshow', () => {
    hoverSound.currentTime = 0;
    hoverSound.load();
    clickSound.currentTime = 0;
    clickSound.load();
});

// Ensure audio playback is enabled after interaction
document.body.addEventListener('click', () => {
    const hoverSound = document.getElementById('hoverSound');
    hoverSound.play().catch(() => {});
});

// Select all buttons or interactive elements
const buttons = document.querySelectorAll('.homepage-menu-icon');

// Play hover sound
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        const hoverSound = document.getElementById('hoverSound');
        hoverSound.currentTime = 0; // Reset to start
        hoverSound.play().catch(error => {
            console.error('Hover sound failed to play:', error);
        });
    });
});

// Select nav button and start button
const navButton = document.querySelector('.toggleBtn'); // Make sure your nav button has this class
const navLinks = document.querySelectorAll('.navbar a');
const startButton = document.querySelector('#start-button'); // Ensure your start button has this class

// Play hover sound for nav button
if (navButton) {
    navButton.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0; // Reset to start
        hoverSound.play().catch(error => {
            console.error('Hover sound failed to play for nav button:', error);
        });
    });
}

// Play hover sound for start button
if (startButton) {
    startButton.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0; // Reset to start
        hoverSound.play().catch(error => {
            console.error('Hover sound failed to play for start button:', error);
        });
    });
}

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0; // Reset to start of audio
        hoverSound.play().catch(error => {
            console.error('Hover sound failed to play:', error);
        });
    });
});

// Background music setup
const backgroundMusic = document.getElementById("background-music");

// Retrieve saved playback state from localStorage
const savedMusicVolume = localStorage.getItem("musicVolume") || 1;
const savedPlaybackTime = localStorage.getItem("playbackTime") || 0;

// Set initial music volume and playback time
backgroundMusic.volume = parseFloat(savedMusicVolume);
backgroundMusic.currentTime = parseFloat(savedPlaybackTime);

// Autoplay music on load
backgroundMusic.play().catch((error) => {
    console.error("Music autoplay blocked:", error);
});

// Save playback state periodically
backgroundMusic.addEventListener("timeupdate", () => {
    localStorage.setItem("playbackTime", backgroundMusic.currentTime);
});

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

// Function to load and play a song
function playSong(index) {
    if (index < playlist.length) {
        backgroundMusic.src = playlist[index];
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
r.addEventListener("input", (e) => {
    const volume = parseFloat(e.target.value);
    backgroundMusic.volume = volume;
    localStorage.setItem("musicVolume", volume);
});

// Update SFX volume
sfxVolumeSlider.value = savedSfxVolume; // Sync slider with saved volume
sfxVolumeSlider.addEventListener("input", (e) => {
    const volume = parseFloat(e.target.value);
    hoverSound.volume = volume;
    clickSound.volume = volume;
    localStorage.setItem("sfxVolume", volume);
});
