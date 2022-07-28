const formEle = document.querySelector(".popup");
const title = document.querySelector(".profile__content_name-title");
const subTitle = document.querySelector(".profile__content_name-subtitle");
const showBtn = document.querySelector(".button-open");
const nameInput = formEle.querySelector("#form-heading");
const subTitleInput = formEle.querySelector("#form-subtitle");
const changeBtn = formEle.querySelector(".form__container-button_submit");
const popupClose = document.querySelector(".popup__close");


showBtn.addEventListener("click", (e) => {
  e.preventDefault();
  nameInput.value = title.textContent;
  subTitleInput.value = subTitle.textContent;
  formEle.classList.toggle("popup_opened");
});

changeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  title.textContent = nameInput.value;
  subTitle.textContent = subTitleInput.value;
  formEle.classList.toggle("popup_opened");
  popupElement.classList.remove("popup_opened");
});

function closePopup(){
    formEle.classList.remove("popup_opened");
}
popupClose.addEventListener("click", closePopup);