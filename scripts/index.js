const popupElement = document.querySelector('.popup');
const title = document.querySelector('.profile__info-title');
const subTitle = document.querySelector('.profile__info-subtitle');
const openButton = document.querySelector('.profile__edit-button');
const profileNameInput = popupElement.querySelector('#form-heading');
const profileSubTitleInput = popupElement.querySelector('#form-subtitle');
const saveButton = popupElement.querySelector('.form__container-button');
const popupClose = document.querySelector('.popup__close');

//открытие и закрытие попапа запись данных с профиля отправка изменений и сохранение
openButton.addEventListener('click', (e) => {
  profileNameInput.value = title.textContent;
  profileSubTitleInput.value = subTitle.textContent;
  popupElement.classList.add('popup_opened');
});

saveButton.addEventListener('click', (e) => {
  e.preventDefault();
  title.textContent = profileNameInput.value;
  subTitle.textContent = profileSubTitleInput.value;
  closePopup();
});

function closePopup(){
  popupElement.classList.remove('popup_opened');
}
popupClose.addEventListener('click', closePopup);

//окно открытия и закрытия(добавление карточек)
const popupElementAdd = document.querySelector('.popup-add');
const openButtonAdd = document.querySelector('.profile__add-button');
const popupCloseAdd = document.querySelector('.popup-add__close');

openButtonAdd.addEventListener('click', (e) => {
  popupElementAdd.classList.add('popup_opened');
});

function closePopupAdd(){// мне кажется что эта функция очень похожа на функцию closePopup, кажется что их можно объеденить например передавая popup как аргумент функции
  popupElementAdd.classList.remove('popup_opened');
}
popupCloseAdd.addEventListener('click', closePopupAdd);



// добавление карточек
// начало неплохое но не забывай, тебе требуется создать функцию для создания карточек а значит:
function createCard(item) { // нужно создать функцию
  const elementsTemplate = document.querySelector('#elements-template').content; 
  // что такое userTemplate? 
  const cardElementClone = userTemplate.querySelector('.elements__card').cloneNode(true);
  cardElementClone.querySelector('.elements__card-img').src = item.link; // функция - абстракция, значит мы используем данные данные нам в массиве
  cardElementClone.querySelector('.elements__card-title').textContent = item.name; // тут тоже самое, работаем с абстракцией и предполагаемым массивом
  // что такое elementsSection?
  elementsSection.append(cardElementClone); 
}

initialCards.forEach(createCard(e)) // что то типа этого


  const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

console.log(cardElementClone)

