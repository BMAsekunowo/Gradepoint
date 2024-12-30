// Get the score input
const studentname = document.getElementById("entername");
const score = parseInt(document.getElementById("enterscore").value);
const result = document.getElementById("studentgrade");

// Get audio elements
const fSound = new Audio ("audios/gerarahere.mp3");
const eSound = new Audio ("audios/kasongo.mp3");
const dSound = new Audio ("audios/future-play.mp3");
const cSound = new Audio ("audios/mercy.mp3");
const bSound = new Audio ("audios/awwn.mp3");
const aSound = new Audio ("audios/applause.mp3");
const shotSound =new Audio ("audio/shot.mp3")

function getGrade() {
    if (studentname || score =="") {
        alert("Please Fill both name and score field");
    }

    else if(score>=0 && scoreOfUser<40) {
        // alert(display.value)
        result.value = "F - Fail🥴"
        // alert("Fail")
        songfail.play()
        result.style.color = "red"
    }
}
