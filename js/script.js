const selectButton = document.querySelector(".select__button");
const selectContent = document.querySelector(".select__content");
const buttonReserve = document.querySelector(".intro__button--reserve");
const buttonAsk = document.querySelector(".intro__button--ask");
const intro = document.querySelector(".intro");
const introBody = document.querySelector(".intro__body");
const reserve = document.querySelector(".reserve");
const fieldSetOne = document.querySelector(".reserve__fieldset--one");
const fieldSetTwo = document.querySelector(".reserve__fieldset--two");
const fieldSetThree = document.querySelector(".reserve__fieldset--three");
const check = document.querySelector(".check");
const reserveButtonForvard = document.querySelector(".reserve__footer-button--forward");
const reserveButtonBack = document.querySelector(".reserve__footer-button--back");
const request = document.querySelector(".request");
const requestAsk = document.querySelector(".request--ask");
const pages = [fieldSetOne, fieldSetTwo, fieldSetThree, check, request];
const reserveStepNumber = document.querySelector(".reserve__setp-number");
const requestButton = document.querySelector(".request__button");
const requestButtonAsk = document.querySelector(".request__button--ask");
const ask = document.querySelector(".ask");
const askButton = document.querySelector(".ask__button");

const reserveDetails = document.querySelector(".reserve__details");
const details = document.querySelector(".details");
const detailsWrapper = document.querySelector(".details-wrapper");
const detailsButton = document.querySelector(".details__button");

const hiddenPhone = document.querySelector(".hidden-phone");

// FILL FORMS

const menuButtonRoomResult = document.querySelector(".menu__button--room");
const menuButtonAdultResult = document.querySelector(".menu__button--adult");
const menuButtonChildResult = document.querySelector(".menu__button--child");
const reserveEnterDate = document.querySelector("#reserve-enter-date");
const reserveExitDate = document.querySelector("#reserve-exit-date");
const additionalTransfer = document.querySelector("#additional-transfer");
const additionalHeal = document.querySelector("#additional-heal");
const nameSurname = document.querySelector("#name-surname");
const telephone = document.querySelector("#telephone");
const email = document.querySelector("#email");
const comments = document.querySelector("#comments");
// fields for data
const fieldNameSurname = document.querySelector(".check__item-value--name-surname");
const fielPhone = document.querySelector(".check__item-value--phone");
const fieldEmail = document.querySelector(".check__item-value--email");
const fieldRoomType = document.querySelector(".check__item-value--room-type");
const fieldEnterDate = document.querySelector(".check__enter-date");
const fieldExitDate = document.querySelector(".check__exit-date");
const fieldAdultNumber = document.querySelector("#adult-number");
const fieldChildrenNumber = document.querySelector("#children-number");
const fieldAdditional = document.querySelector(".check__item-value--additional");
const fieldComment = document.querySelector(".check__item-value--comment");

//  hotelsite.com.ua/booking/?phone=0971843877
let params = new URLSearchParams(location.search);
hiddenPhone.value = params.get('phone');

let oldPage = 0;
let page = 0;

requestButton.addEventListener('click', backToMain);


buttonReserve.addEventListener('click', function(){
    intro.classList.remove("intro--visible");
    introBody.classList.add("intro__body--hidden");
    reserve.classList.add("reserve--visible");
});

reserveButtonForvard.addEventListener('click', function(){
    oldPage = page;
    page++;
    changePage();
});

reserveButtonBack.addEventListener('click', function(){ 
    oldPage = page;
    page--;
    changePage();
});

buttonAsk.addEventListener('click', function(){
    intro.classList.remove("intro--visible");
    introBody.classList.add("intro__body--hidden");
    ask.classList.remove("ask--hidden");
});

askButton.addEventListener('click', function(){
    ask.classList.add("ask--hidden");
    intro.classList.add("intro--visible");
    requestAsk.classList.remove("request--hidden");
});

requestButtonAsk.addEventListener("click", function(){
    intro.classList.add("intro--visible");
    introBody.classList.remove("intro__body--hidden");
    requestAsk.classList.add("request--hidden");
})

reserveDetails.addEventListener("click", showDetails);
detailsButton.addEventListener("click", showDetails);

function showDetails(){
    details.classList.toggle("details--hidden");
    detailsWrapper.classList.toggle("details-wrapper--hidden");
}

function changePage(){
    reserveStepNumber.innerHTML = page+1;
    checkForms();
    if(page < 0){
        reserveStepNumber.innerHTML = 1;
        page = 0;
        intro.classList.add("intro--visible");
        introBody.classList.remove("intro__body--hidden");
        reserve.classList.remove("reserve--visible");
    }else if(page !==3 && oldPage !== 3){
        pages[oldPage].classList.add("reserve__fieldset--hidden");
        pages[page].classList.remove("reserve__fieldset--hidden");
    }else if(page === 3){
        if(oldPage===4){
            intro.classList.remove("intro--visible");
            reserve.classList.add("reserve--visible");
            pages[page].classList.remove("reserve__fieldset--hidden");
            pages[oldPage].classList.add("request--hidden");
        }
        pages[oldPage].classList.add("reserve__fieldset--hidden");
        pages[page].classList.remove("check--hidden");
        fillFields();
    }else if(oldPage === 3){
        if(page===4){
            intro.classList.add("intro--visible");
            reserve.classList.remove("reserve--visible");
            pages[oldPage].classList.add("check--hidden");
            pages[page].classList.remove("request--hidden");
        }
        pages[oldPage].classList.add("check--hidden");
        pages[page].classList.remove("reserve__fieldset--hidden");
    }
}

function makeSelect([obj, number]){
    selectButton.innerHTML = obj.innerHTML;
    toggleList(number);
}

function toggleList(number){
    selectContent.classList.toggle("select__content--visible");
};

function backToMain(){
    reserveStepNumber.innerHTML = 1;
    page = 0;   
    pages[0].classList.remove("reserve__fieldset--hidden");
    pages[4].classList.add("request--hidden");
    introBody.classList.remove("intro__body--hidden");
    reserve.classList.remove("reserve--visible");
}



function fillFields(){
    fieldNameSurname.innerHTML = nameSurname.value;
    fielPhone.innerHTML = telephone.value;
    fieldEmail.innerHTML = email.value;
    fieldRoomType.innerHTML = menuButtonRoomResult.innerHTML;
    fieldEnterDate.innerHTML = reserveEnterDate.value;
    fieldExitDate.innerHTML = reserveExitDate.value;
    fieldAdultNumber.innerHTML = menuButtonAdultResult.innerHTML;
    fieldChildrenNumber.innerHTML = menuButtonChildResult.innerHTML;
    if(additionalTransfer.value !== "" && additionalHeal.value !== ""){
        fieldAdditional.innerHTML = `${additionalTransfer.value}, ${additionalHeal.value}`;
    }else if(additionalTransfer.value !== ""){
        fieldAdditional.innerHTML = `${additionalHeal.value}`;
    }else{
        fieldAdditional.innerHTML = `${additionalTransfer.value}`;
    }
    fieldComment.innerHTML = comments.value;
}

function checkForms(){
    switch (page) {
        case 1:
            if(reserveEnterDate.value && reserveExitDate.value && menuButtonAdultResult.innerHTML && menuButtonRoomResult){
                
            };
          break;
        case 2:
          alert( 'В точку!' );
          break;
        default:
          console.log("nothing");
      }
}





