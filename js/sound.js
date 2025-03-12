const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    btn = document.createElement('button')
    btn.classList.add ('btn')
    btn.innerText=sound
btn.addEventListener('click', () => {
    stopSongs()
    Document.getElementById(sound).play()
})

    document.getElementById('buttons').appendChild('btn')
})


    stopSongs()
    sounds.forEach(sound => {
        document.getElementById(sound).pause()
            document.getElementById(sound).currentTime = 0;
    })
