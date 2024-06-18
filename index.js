// Detecting Button Press
const buttons = document.querySelectorAll('.drum').length
for (let i = 0; i < buttons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        const buttonsText = this.innerHTML; /* targets innerHTML of the button that 
        triggered the click event */
        makeSound(buttonsText)
    })
}

// Dectecting Keyboard Press
document.addEventListener('keypress', function(event){ // eventListener on entire doc.
    makeSound(event.key) // key property tells which keyboard key is pressed
});


function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play()
            break;
        case "a":
            let tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play()
            break;
        case "s":
            let tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play()
            break;
        case "d":
            let tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play()
            break;
        case "j":
            let snare = new Audio('sounds/snare.mp3')
            snare.play()
            break;
        case "k":
            let crash = new Audio('sounds/crash.mp3')
            crash.play()
            break;
        case "l":
            let kickbass = new Audio('sounds/kick-bass.mp3')
            kickbass.play()
            break;
        
        default: alert("Pressed the wrong key");
            break;
    }
}