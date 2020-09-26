// Detect button click

for (i = 0; i < document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Detect keyboard press
document.addEventListener("keydown", function (e) {
    makeSound(e.key)
    buttonAnimation(e.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "a":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "i":
            var hiHat = new Audio("sounds/hi-hat.mp3");
            hiHat.play();
            break;

        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "d":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        default: console.log(keystroke);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () { activeButton.classList.remove("pressed") }, 100);
}