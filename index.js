const btn = document.querySelector(".btn");
const video = document.querySelector(".background-video");
const fa = document.querySelector(".fa-solid");
const preloader = document.querySelector(".preloader");

const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

// Function to set video progress
function setProgress(percent) {
    const offset = circumference - percent * circumference;
    circle.style.strokeDashoffset = offset;
}

// Toggle play/pause
btn.addEventListener("click", () => {
    fa.style.opacity = 0;

    setTimeout(() => {
        if (btn.classList.contains("pause")) {
            btn.classList.remove("pause");
            video.play();
            fa.classList.add("fa-pause");
            fa.classList.remove("fa-play");
        } else {
            btn.classList.add("pause");
            video.pause();
            fa.classList.remove("fa-pause");
            fa.classList.add("fa-play");
        }
        fa.style.opacity = 1;
    }, 150);
});

// Preloader fade
window.addEventListener("load", () => {
    preloader.classList.add("hide");
});

// Update progress circle
video.addEventListener("timeupdate", () => {
    const percent = video.currentTime / video.duration;
    setProgress(percent);
});