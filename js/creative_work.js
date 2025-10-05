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
