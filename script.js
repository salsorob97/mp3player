const audioFile = document.getElementById('audioFile');
const audioPlayer = document.getElementById('audioPlayer');
const playlist = document.getElementById('playlist');

audioFile.addEventListener('change', (event) => {
    const files = event.target.files;
    playlist.innerHTML = '';

    for (const file of files) {
        const p = document.createElement('p');
        p.textContent = file.name;
        p.addEventListener('click', () => {
            const url = URL.createObjectURL(file);
            audioPlayer.src = url;
            audioPlayer.play();
        });
        playlist.appendChild(p);
    }
});
