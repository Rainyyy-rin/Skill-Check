const perfectSound = new Audio("sound/perfect.mp3");
const goodSound = new Audio("sound/good.mp3");
const missSound = new Audio("sound/miss.mp3");
const progressSound = new Audio("sound/progress.mp3");

progressSound.loop = true;

function playProgress(){
    progressSound.currentTime = 0;
    progressSound.play();
}

function stopProgress(){
    progressSound.pause();
    progressSound.currentTime = 0;
}

function playPerfect(){

    progressSound.pause();

    perfectSound.currentTime = 0;
    perfectSound.play();

    perfectSound.onended = ()=>{
        if(playing){
            progressSound.play();
        }
    };

}

function playGood(){

    progressSound.pause();

    goodSound.currentTime = 0;
    goodSound.play();

    goodSound.onended = function(){

        if(playing){

            progressSound.play();

        }

    };

}

function playMiss(){

    progressSound.pause();

    missSound.currentTime = 0;
    missSound.play();

    missSound.onended = function(){

        if(playing){

            progressSound.play();

        }

    };

}
