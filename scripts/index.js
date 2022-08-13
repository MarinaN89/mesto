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



//форма открытия нажатием на кнопку «+» и закрытия кликом на крестик:
const popupElementAdd = document.querySelector('.popup-add');
const openButtonAdd = document.querySelector('.profile__add-button');
const popupCloseAdd = document.querySelector('.popup-add__close');


openButtonAdd.addEventListener('click', (e) => {
  popupElementAdd.classList.add('popup_opened');
});

 function closePopupAdd(){  // все еще наставиваю на том что бы объеденить в одну функцию с closePopup
   popupElementAdd.classList.remove('popup_opened');
}
 popupCloseAdd.addEventListener('click', closePopupAdd);



// появление картоек при загрузке страницы - Шесть карточек «из коробки»
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
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const сardSection = document.querySelector('.elements');
const elementsTemplate = document.querySelector('#elements-template').content;
const buttonAddSubmit = document.querySelector('.form-add__container-button');
const formAddCard = document.forms.formAddCard;
// создаем функцию раньше чем будем ее использовать
function createCard(element){ //функция должна лежать снаружи метода, а вызвываться внутри метода иначе ты ее нигде кроме этого самого метода не сможешь использовать
  const cardElementClone = elementsTemplate.cloneNode(true);
  const buttonLike = cardElementClone.querySelector('.elements__card-like'); // кнопку лайка мы ищем внутри каждой карточки отдельно, иначе они у нас будут срабатывать все вместе, ведь на каждой карточке есть лайк
  cardElementClone.querySelector('.elements__card-title').textContent = element.name;
  cardElementClone.querySelector('.elements__card-img').src = element.link;
  сardSection.append(cardElementClone)

  
  buttonLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__card-like_active'); // не отображается потому что у тебя в css не прописан такой класс
  });
  }

  formAddCard.addEventListener('submit', (e) => {
  e.preventDefault();
  // понимаю что решение довольно мудреное, но если разберешься как робтает будет круто
  // в противном случае разнеси на две разные функции, я посмотрел реализации у ребят, ревью  должно пройти в этом случае
  const form = e.currentTarget;
  const data = new FormData(form);
  const element = {};
  data.forEach((value, key) => element[key] = value);

  createCard(element)

  closePopupAdd();
});


initialCards.forEach(function(element) {
  createCard(element);
})





