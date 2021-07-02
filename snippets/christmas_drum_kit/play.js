// Declare global variables.

const keys = document.querySelectorAll('.key');
const sounds = document.querySelectorAll('audio');

// Declare global functions.

function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return; // stop the function from running altogether 
        audio.currentTime = 0; // rewind to start
        audio.play();
        key.classList.add('playing');
}

function removeTransition(e) {
    const activeKey = document.querySelector(`.key[data-key="${e.srcElement.attributes[0].nodeValue}"]`);
    activeKey.classList.remove('playing');
}

//    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

sounds.forEach(sound => sound.addEventListener('ended', removeTransition));
window.addEventListener('keydown', playSound); 

