const popupElement = document.querySelector('.popup');
const title = document.querySelector('.profile__info-title');
const subTitle = document.querySelector('.profile__info-subtitle');
const openButton = document.querySelector('.profile__edit-button');
const profileNameInput = popupElement.querySelector('#form-heading');
const profileSubTitleInput = popupElement.querySelector('#form-subtitle');
const saveButton = popupElement.querySelector('.form__container-button');
const popupClose = document.querySelector('.popup__close');


openButton.addEventListener('click', (e) => {
  profileNameInput.value = title.textContent;
  profileSubTitleInput.value = subTitle.textContent;
  popupElement.classList.toggle('popup_opened');
});

saveButton.addEventListener('click', (e) => {
  e.preventDefault();
  title.textContent = profileNameInput.value;
  subTitle.textContent = profileSubTitleInput.value;
  popupElement.classList.remove('popup_opened');
});

function closePopup(){
  popupElement.classList.remove('popup_opened');
}
popupClose.addEventListener('click', closePopup);