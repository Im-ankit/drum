

var numberOfDrums = document.querySelectorAll(".drum").length

for (var i = 0; i < numberOfDrums; i++) 
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() 
    {
        var text = this.innerHTML;
        buttuonAnimation(text);
        keyListner(text);
    });
}

document.addEventListener("keydown", function(e) {
    keyListner(e.key);
    buttuonAnimation(e.key);
});


function keyListner(text) {

            switch (text) {

                case "w":
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;


                case "a":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;

                case "s":
                    var audio = new Audio("sounds/tom-3.mp3");
                    audio.play();
                    break;

                case "d":
                    var audio = new Audio("sounds/tom-4.mp3");
                    audio.play();
                    break;

                case "j":
                    var audio = new Audio("sounds/snare.mp3");
                    audio.play();
                    break;

                case "k":
                    var audio = new Audio("sounds/crash.mp3");
                    audio.play();
                    break;

                case "l":
                    var audio = new Audio("sounds/kick-bass.mp3");
                    audio.play();
                    break;
                
                default:
                    break;
            }
}

function buttuonAnimation(text) {

    document.querySelector("."+text).classList.toggle("pressed");

    setTimeout(() => { document.querySelector("." + text).classList.toggle("pressed");},100);
}