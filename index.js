// Get the score input
var studentName = document.getElementById("entername").value;
var studentScore = document.getElementById("enterscore").value;
var studentGrade = document.getElementById("studentgrade");

// Get audio elements
var fSound = new Audio ("audios/gerarahere.mp3");
var eSound =new Audio (audios/kasongo.mp3)
var dSound = new Audio ("audios/future-play.mp3");
var cSound = new Audio ("audios/mercy.mp3");
var bSound = new Audio ("audios/awwn.mp3");
var aSound = new Audio ("audios/applause.mp3");
var shotSound = new Audio ("audios/shot.mp3");

function calCulate() {
    
    if(studentScore>=0 && studentScore<40) {
        studentGrade.value = "F - Fail🥴";
        // alert("Fail")
        fSound.play();
        studentGrade.style.color = "red";
    }

    else if(studentScore>=40 && studentScore<45){
        studentGrade.value = "E - Pass😔";
        eSound.play();
        studentGrade.style.color = "crimson";
        // alert("Pass")
    }

    else if(studentScore>=45 && studentScore<50){
        studentGrade.value = "D - Average😬";
        dSound.play();
        studentGrade.style.color = "orange";
        // alert("Average")
    }

    else if(studentScore>=50 && studentScore<60){
        studentGrade.value = "C - Credit🤔";
        cSound.play();
        studentGrade.style.color = "chartreuse";
        // alert("Credit")
    }
    else if(studentScore>=60 && studentScore<70){
        studentGrade.value = "B - Good🙂";
        bSound.play();
        studentGrade.style.color = "green";
        // alert("Good")
    }

    else if(studentScore>=70 && studentScore<=100){
        studentGrade.value = "A - Excellent😀";
        aSound.play();
        studentGrade.style.color = "green";
        // alert("Excellent")
    }
   
    else{
        studentGrade.value = "Not recognised";
        studentGrade.style.color = "black";
        // alert("Unrecognised")
    }
}
