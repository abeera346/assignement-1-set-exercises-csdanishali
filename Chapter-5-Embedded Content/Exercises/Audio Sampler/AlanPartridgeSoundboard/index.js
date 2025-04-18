document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the class 'sample'
    const samples = document.querySelectorAll('.sample');

    // Loop through each sample button
    samples.forEach(sample => {
        sample.addEventListener('click', function () {
            // Get the ID of the audio to play from data-sound attribute
            const soundId = this.getAttribute('data-sound');
            const audioToPlay = document.getElementById(soundId);

            // Pause all currently playing audio and reset them to start
            document.querySelectorAll('audio').forEach(audio => {
                if (!audio.paused) {
                    audio.pause();
                    audio.currentTime = 0;
                }
            });

            // Play the selected audio clip
            if (audioToPlay) {
                audioToPlay.play();
            }

            // Add a visual effect when clicked
            this.classList.add('active');

            // Remove the "active" class after a short delay 
            setTimeout(() => {
                this.classList.remove('active');
            }, 200);
        });
    });
});
