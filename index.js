// Get audio elements
var fSound = new Audio("audios/gerarahere.mp3");
var eSound = new Audio("audios/kasongo.mp3");
var dSound = new Audio("audios/future-play.mp3");
var cSound = new Audio("audios/mercy.mp3");
var bSound = new Audio("audios/awwn.mp3");
var aSound = new Audio("audios/applause.mp3");

    function F9()
        {
            studentgrade.value = 'FAIL - F9🥴';
            fSound.pause(); fSound.currentTime = 0; fSound.play();
            studentgrade.style.color = "red";
        }

    function E8()
        {
            studentgrade.value = 'E - Pass😔';
            eSound.pause(); eSound.currentTime = 0;eSound.play();
            studentgrade.style.color = "crimson";
        }

    function D7()
        {
            studentgrade.value = 'D - Average😬';
            dSound.pause(); dSound.currentTime = 0;dSound.play();
            studentgrade.style.color = "orange";
        }

    function C4()
        {
            studentgrade.value = 'C - Credit🤔';
            cSound.pause(); cSound.currentTime = 0;cSound.play();
            studentgrade.style.color = "chartreuse";
        }

    function B2()
        {
            studentgrade.value = 'B - Good🙂';
            bSound.pause(); bSound.currentTime = 0;bSound.play();
            studentgrade.style.color = "green";
        }

    function A1()
        {
            studentgrade.value = 'A - Excellent😀';
            aSound.pause(); aSound.currentTime = 0;aSound.play();
            studentgrade.style.color = "green";
        }
    //End of Functions declaration
    

function calCulate() {
    // Get the score input
    var studentName = document.getElementById('entername').value;
    var studentScore = Number(document.getElementById('enterscore').value);
    var studentGrade = document.getElementById('studentgrade');


    if (studentName === "" || isNaN(studentScore)) {
        alert("Please enter a valid name and score!");
        return;
    }

        else if (studentScore>=0 && studentScore<=39) {
            F9();
         }
     
         else if (studentScore>=40 && studentScore<45){
             E8();
         }
     
         else if (studentScore>=45 && studentScore<50){
             D7();
         }
     
         else if (studentScore>=50 && studentScore<60){
             C4();
         }
     
         else if (studentScore>=60 && studentScore<70){
             B2();
         }
     
         else if (studentScore>=70 && studentScore<=100){
             A1();
         }
        
         else {
             studentGrade.value = "Not recognised";
             studentGrade.style.color = "black";
             // alert("Unrecognised")
         }
    
}

function clearComp()
        {
            entername.value = "";
            enterscore.value = "";
            studentgrade.value = "";
            fSound.pause(); fSound.currentTime = 0;
            eSound.pause(); eSound.currentTime = 0;
            dSound.pause(); dSound.currentTime = 0;
            cSound.pause(); cSound.currentTime = 0;
            bSound.pause(); bSound.currentTime = 0;
            aSound.pause(); aSound.currentTime = 0;
        }
