const cardBtn = document.querySelector(".card__btn");
const closeBtn = document.querySelector(".popup-review__close");
const modal = document.querySelector(".popup");

function popup() {
    modal.classList.toggle("popup_is-opened");
}


cardBtn.addEventListener("click", popup);

closeBtn.addEventListener("click", popup);


function filerSelection(evt, commandName) {

 var i, tabcontent, tablinks;

 tabcontent = document.getElementsByClassName("command");
 for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
 }

 tablinks = document.getElementsByClassName("tab");
 for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" active", "");
 }

 if(commandName) {
    document.getElementById(commandName).style.display = "block";
 } else {
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "block";
    }
 }

 evt.currentTarget.className += " active";
}

