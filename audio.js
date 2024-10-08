var audio=document.getElementById("audio");
var playpause=document.getElementById("playpause");
let count=0;

function song(){
    if (count==0){
        count=1;
        audio.play();
        playpause.innerHTML="PAUSE &#9208;";

    }
    else{
        count=0;
        audio.pause();
        playpause.innerHTML="PLAY &#9658;";
    }
}