const popupElement = document.querySelector('.popup');
const title = document.querySelector('.profile__info-title');
const subTitle = document.querySelector('.profile__info-subtitle');
const openButton = document.querySelector('.profile__edit-button');
const profileNameInput = popupElement.querySelector('#form-heading');
const profileSubTitleInput = popupElement.querySelector('#form-subtitle');
const saveButton = popupElement.querySelector('.form__container-button');
const popupClose = document.querySelector('.popup__close');

const formAddCard = document.forms.formAddCard;


//открытие и закрытие попапа запись данных с профиля отправка изменений и сохранение
openButton.addEventListener('click', (e) => {
  profileNameInput.value = title.textContent;
  profileSubTitleInput.value = subTitle.textContent;
  popupElement.classList.add('popup_opened');
});

function closeAllPopup(popup) {
  console.log(popup);
  popup.classList.remove('popup_opened');
}

saveButton.addEventListener('click', (e) => {
  e.preventDefault();
  title.textContent = profileNameInput.value;
  subTitle.textContent = profileSubTitleInput.value;
  closeAllPopup(popupElement);
});

function closePopup(){
  popupElement.classList.remove('popup_opened');
}
popupClose.addEventListener('click', closePopup);





//форма открытия нажатием на кнопку «+» и закрытия кликом на крестик:
const popupElementAdd = document.querySelector('.popup-add');
const openButtonAdd = document.querySelector('.profile__add-button');
const popupCloseAdd = document.querySelector('.popup-add__close');


openButtonAdd.addEventListener('click', (e) => {
  popupElementAdd.classList.add('popup_opened');
});

 function closePopupAdd(){
   popupElementAdd.classList.remove('popup_opened');
}
 popupCloseAdd.addEventListener('click', closePopupAdd);



// появление картоек при загрузке страницы - Шесть карточек «из коробки»
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
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
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const сardSection = document.querySelector('.elements');
const elementsTemplate = document.querySelector('#elements-template').content;
const buttonAddSubmit = document.querySelector('.form-add__container-button');


function loadingCard(element, order=true){
  const cardElementClone = elementsTemplate.cloneNode(true);
  const card = cardElementClone.querySelector('.elements__card');
  const cardImage = card.querySelector('.elements__card-img')
  card.querySelector('.elements__card-title').textContent = element.name;
  cardImage.src = element.link;
  
  const buttonLike = card.querySelector('.elements__card-like');
  buttonLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__card-like_active')
  });

  const buttonDelete = card.querySelector('.elements__card-delete');
  buttonDelete.addEventListener('click', function(evt) {
    card.remove();
  });



const openPopupCard = document.querySelector('.popup-increase');
const openPopupImg = openPopupCard.querySelector('.popup-increase__img');

cardImage.addEventListener('click', function(evt) {
  // открыть попап openPopup(evt.target.src)
  console.log(evt.target.alt);
})


  


  // порядок если true порядок прямой, если false то порядок обратный 
  // 1 > 4 ? a = a + 1 : a = a - 1 
  order ? сardSection.append(cardElementClone) : сardSection.prepend(cardElementClone)
}

initialCards.forEach(function (element) {
  loadingCard(element);
})



formAddCard.addEventListener('submit', (e) => {
  e.preventDefault();
  // понимаю что решение довольно мудреное, но если разберешься как робтает будет круто
  // в противном случае разнеси на две разные функции, я посмотрел реализации у ребят, ревью  должно пройти в этом случае
  const form = e.target; // получаем форму
  const data = new FormData(form); // получаем данные из формы
  const element = {}; // создаем пустой объект 
  data.forEach((value, key) => element[key] = value); // перекладываем данные из формы в объект

  loadingCard(element, false)
  closeAllPopup(popupElementAdd)
});