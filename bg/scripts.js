document.getElementById('unmute-btn').addEventListener('click', function () {
    const video = document.getElementById('background-video');

    // Toggle mute/unmute
    if (video.muted) {
        video.muted = false;
        this.textContent = 'Mute';
    } else {
        video.muted = true;
        this.textContent = 'Unmute';
    }
});
