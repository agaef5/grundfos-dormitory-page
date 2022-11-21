// Submit question
document.getElementById("SubmitQ").addEventListener("click", openSubmitQ);

function openSubmitQ(){
    submitQmobile.style.display = 'block';
    mobileForm.style.display = 'block';
    document.getElementById("wholePage").classList.toggle("pop-up-filter");
}

document.getElementById("submitBtn").addEventListener("click", confirmBox);

function confirmBox(){
    mobileForm.style.display = 'none';
    submitQmobile.style.display = 'block';
    thankYou.style.display = 'block';
    thankYou.style.width = "250px";
    thankYou.style.height = "350px";
}

document.getElementById("closeX").addEventListener("click", closeXsubmitQ);

function closeXsubmitQ(){
    submitQmobile.style.display = 'none';
    mobileForm.style.display = 'none';
    thankYou.style.display = 'none';
    document.getElementById("wholePage").classList.remove("pop-up-filter");
}

// FAQ answers
window.onload = function() {

// First pop-up
    document.getElementById('scrollBox').contentWindow.document.getElementById('firstClicker').addEventListener('click', openPopUpfirst);

    function openPopUpfirst() {
        document.getElementById("popUpfirst").style.display = 'block';
        document.getElementById("wholePage").classList.toggle("pop-up-filter");
    }

document.getElementById("firstX").addEventListener("click", closeXfirst);

function closeXfirst(){
    popUpfirst.style.display = 'none';
    document.getElementById("wholePage").classList.remove("pop-up-filter");
}

// Second pop-up
    document.getElementById('scrollBox').contentWindow.document.getElementById('secondClicker').addEventListener('click', openPopUpsecond);

    function openPopUpsecond() {
        document.getElementById("popUpsecond").style.display = 'block';
        document.getElementById("wholePage").classList.toggle("pop-up-filter");
    }

document.getElementById("secondX").addEventListener("click", closeXsecond);

function closeXsecond(){
    popUpsecond.style.display = 'none';
    document.getElementById("wholePage").classList.remove("pop-up-filter");
}

// Third pop-up
    document.getElementById('scrollBox').contentWindow.document.getElementById('thirdClicker').addEventListener('click', openPopUpthird);

    function openPopUpthird() {
        document.getElementById("popUpthird").style.display = 'block';
        document.getElementById("wholePage").classList.toggle("pop-up-filter");
    }

document.getElementById("thirdX").addEventListener("click", closeXthird);

function closeXthird(){
    popUpthird.style.display = 'none';
    document.getElementById("wholePage").classList.remove("pop-up-filter");
}

// Fourth pop-up
    document.getElementById('scrollBox').contentWindow.document.getElementById('fourthClicker').addEventListener('click', openPopUpfourth);

    function openPopUpfourth() {
        document.getElementById("popUpfourth").style.display = 'block';
        document.getElementById("wholePage").classList.toggle("pop-up-filter");
    }

document.getElementById("fourthX").addEventListener("click", closeXfourth);

function closeXfourth(){
    popUpfourth.style.display = 'none';
    document.getElementById("wholePage").classList.remove("pop-up-filter");
}

// Fifth pop-up
    document.getElementById('scrollBox').contentWindow.document.getElementById('fifthClicker').addEventListener('click', openPopUpfifth);

    function openPopUpfifth() {
    document.getElementById("popUpfifth").style.display = 'block';
    document.getElementById("wholePage").classList.toggle("pop-up-filter");
    }

document.getElementById("fifthX").addEventListener("click", closeXfifth);

function closeXfifth(){
popUpfifth.style.display = 'none';
document.getElementById("wholePage").classList.remove("pop-up-filter");
}

// Sixth pop-up
    document.getElementById('scrollBox').contentWindow.document.getElementById('sixthClicker').addEventListener('click', openPopUpsixth);

    function openPopUpsixth() {
    document.getElementById("popUpsixth").style.display = 'block';
    document.getElementById("wholePage").classList.toggle("pop-up-filter");
    }

document.getElementById("sixthX").addEventListener("click", closeXsixth);

function closeXsixth(){
popUpsixth.style.display = 'none';
document.getElementById("wholePage").classList.remove("pop-up-filter");
}
}