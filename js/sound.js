const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add ('btn')
    btn.innerHTML = sound
btn.addEventListener('click', () => {
    stopSongs()
    Document.getElementById(sound).play()
})

    document.getElementById('buttons').appendChild('btn')
})


stopSongs(){
    sounds.forEach(sound => {
        document.getElementById(sound).pause(
            document.getElementById(sound).currentTime = 0;
        )
    })
}
