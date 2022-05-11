let popup = document.querySelector('.popup');
let buttonOpen = document.querySelector('.button-open');
let popupClose = document.querySelector('.popup__close');
let popupSubmit = document.querySelector('.form__button');



buttonOpen.addEventListener('click', addOpen)
popupClose.addEventListener('click', removeOpen)
popupSubmit.addEventListener('click', removeSubmit)

function addOpen(){
    popup.classList.add('popup_opened');
}

function removeOpen(){
    popup.classList.remove('popup_opened');
}

function removeSubmit(){
    popup.classList.remove('popup_opened');
}



let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__item-heading');
let jobInput = document.querySelector('.form__item-subtitle');
document.querySelector('.form__button').onclick = formSubmitHandler


 function formSubmitHandler (evt) {
   evt.preventDefault(); 

   let nameInput = document.querySelector('.form__item-heading-style').value;
   let jobInput = document.querySelector('.form__item-subtitle-style').value;

   document.querySelector('.profile-info__title').innerHTML = nameInput;
   document.querySelector('.profile-info__subtitle').innerHTML = jobInput;
   
 
  
 }
 
//  let likeColor = document.querySelectorAll('.element-card__like');

//  likeColor.forEach(function(item){
//      console.log(item);
//  });



 
 formElement.addEventListener('submit', formSubmitHandler); 