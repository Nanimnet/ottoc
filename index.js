const cardBtn = document.querySelector(".card__btn");
const closeBtn = document.querySelector(".popup-review__close");
const popup = document.querySelector(".popup");

function openPopup() {
    popup.classList.add("popup_is-opened");
}

function closePopup() {
    popup.classList.remove("popup_is-opened");
}

cardBtn.addEventListener("click", openPopup);

closeBtn.addEventListener("click", closePopup);

