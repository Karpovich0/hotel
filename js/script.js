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
const reserveButtonForward = document.querySelector(".reserve__footer-button--forward");
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

const hiddenPhoneArray = document.querySelectorAll(".hidden-phone");

// Forms

const reserveForm = document.querySelector(".reserve__form");
const askForm = document.querySelector(".ask__form");

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

const emailAsk =  document.querySelector("#email-ask");

const userAgreement = document.querySelector("#user-agreement");

// ask form 
const nameSurnameAsk = document.querySelector("#name-surname-ask");
const telephoneAsk = document.querySelector("#telephone-ask");
const commentsAsk = document.querySelector("#coments-ask");
const userAgreementAsk = document.querySelector("#user-agreement-ask");

const reserveFooterSpanForward = document.querySelector(".reserve__footer-span-forward");

const reserveHotelLableArray = document.querySelectorAll(".reserve__hotel-label");
const reserveHotelInputArray = document.querySelectorAll(".reserve__hotel-input");


let checkArray1 = [reserveEnterDate.value, reserveExitDate.value, menuButtonAdultResult.innerHTML, menuButtonRoomResult.innerHTML];
let markArray1 = [reserveEnterDate, reserveExitDate, menuButtonAdultResult, menuButtonRoomResult];

let checkArray2 = [nameSurname.value, telephone.value, userAgreement.checked, email.value];
let markArray2 = [nameSurname, telephone, userAgreement, email];

let checkArray3 = [nameSurnameAsk.value, telephoneAsk.value, commentsAsk.value, userAgreementAsk.checked];
let markArray3 = [nameSurnameAsk, telephoneAsk, commentsAsk, userAgreementAsk, emailAsk];

//  hotelsite.com.ua/booking/?phone=0971843877
let params = new URLSearchParams(location.search);
hiddenPhoneArray.forEach(item => item.value = params.get('phone'));

let oldPage = 0;
let page = 0;

requestButton.addEventListener('click', backToMain);

buttonReserve.addEventListener('click', function(){
    intro.classList.remove("intro--visible");
    introBody.classList.add("intro__body--hidden");
    reserve.classList.add("reserve--visible");
});

reserveButtonForward.addEventListener('click', function(){
    oldPage = page;
    page++;
    if(page === 1 || page === 2 || page === 3){        
        checkForms();
    }else{        
    reserveStepNumber.innerHTML = page+1;
    changePage();
    }
});

reserveButtonBack.addEventListener('click', function(){ 
    oldPage = page;
    page--;
    reserveStepNumber.innerHTML = page+1;
    changePage();
});

buttonAsk.addEventListener('click', function(){
    intro.classList.remove("intro--visible");
    introBody.classList.add("intro__body--hidden");
    ask.classList.remove("ask--hidden");
});

askButton.addEventListener('click', function(){
    if(nameSurnameAsk.value !== "" && telephoneAsk.value !== "+38 (___) ___-__-__" && commentsAsk.value !== "" && userAgreementAsk.checked && onInput(emailAsk)){
        ask.classList.add("ask--hidden");
        intro.classList.add("intro--visible");
        requestAsk.classList.remove("request--hidden");
        notVisible([nameSurnameAsk.value, telephoneAsk.value, commentsAsk.value, userAgreementAsk.checked, emailAsk.value], markArray3);
        makeRequest(askForm);
    }else{
        makeVisible([nameSurnameAsk.value, telephoneAsk.value, commentsAsk.value, userAgreementAsk.checked, emailAsk.value], markArray3);
    }
    
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
    if(page === 4){
        makeRequest(reserveForm);
    }
    if(page < 0){
        reserveStepNumber.innerHTML = 1;
        page = 0;
        intro.classList.add("intro--visible");
        introBody.classList.remove("intro__body--hidden");
        reserve.classList.remove("reserve--visible");
        reserveFooterSpanForward.innerHTML = "????????";
    }else if(page !==3 && oldPage !== 3){
        pages[oldPage].classList.add("reserve__fieldset--hidden");
        pages[page].classList.remove("reserve__fieldset--hidden");
        reserveFooterSpanForward.innerHTML = "????????";
    }else if(page === 3){
        if(oldPage===4){
            intro.classList.remove("intro--visible");
            reserve.classList.add("reserve--visible");
            pages[page].classList.remove("reserve__fieldset--hidden");
            pages[oldPage].classList.add("request--hidden");
            reserveFooterSpanForward.innerHTML = "??????????????????????";
        }
        pages[oldPage].classList.add("reserve__fieldset--hidden");
        pages[page].classList.remove("check--hidden");
        reserveFooterSpanForward.innerHTML = "??????????????????????";
        fillFields();
    }else if(oldPage === 3){
        if(page===4){
            intro.classList.add("intro--visible");
            reserve.classList.remove("reserve--visible");
            pages[oldPage].classList.add("check--hidden");
            pages[page].classList.remove("request--hidden");
            reserveFooterSpanForward.innerHTML = "????????";
        }
        pages[oldPage].classList.add("check--hidden");
        pages[page].classList.remove("reserve__fieldset--hidden");
        reserveFooterSpanForward.innerHTML = "????????";
    }
}

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
    if(additionalTransfer.checked && additionalHeal.checked){
        fieldAdditional.innerHTML = `${additionalTransfer.value}, ${additionalHeal.value}`;
    }else if(additionalTransfer.checked){
        fieldAdditional.innerHTML = `${additionalTransfer.value}`;        
    }else if(additionalHeal.checked) {
        fieldAdditional.innerHTML = `${additionalHeal.value}`;
    }
    fieldComment.innerHTML = comments.value;
}

function checkForms(){
    if(page === 2){
        if(reserveEnterDate.value && reserveExitDate.value && menuButtonAdultResult.innerHTML &&    menuButtonRoomResult.innerHTML){
            reserveStepNumber.innerHTML = page+1;
            changePage();
            notVisible([reserveEnterDate.value, reserveExitDate.value, menuButtonAdultResult.innerHTML, menuButtonRoomResult.innerHTML], markArray1);
        }else{
            makeVisible([reserveEnterDate.value, reserveExitDate.value, menuButtonAdultResult.innerHTML, menuButtonRoomResult.innerHTML], markArray1);
            page--;
        };
    }else if(page === 3){
        if(nameSurname.value && telephone.value !== "+38 (___) ___-__-__" && userAgreement.checked && onInput(email)){
            reserveStepNumber.innerHTML = page+1;
            changePage();
            notVisible([nameSurname.value, telephone.value, userAgreement.checked, email.value], markArray2);
        }else{
            makeVisible([nameSurname.value, telephone.value, userAgreement.checked, email.value], markArray2);
            page--;
        };
    }else if(page === 1) {
        if(reserveHotelInputArray[0].checked || reserveHotelInputArray[1].checked){
            let number = 0;
            reserveHotelInputArray[0].checked ? number = 0 : number = 1;
            reserveStepNumber.innerHTML = page+1;
            changePage();
            notVisibleHotel();
            showList(number);
        }else{
            makeVisibleHotel();
            page--;
        };
    }
}

function makeVisible(arr, arr2){
    for(let i = 0; i < arr.length; i++){ 
        if(arr[i] === "+38 (___) ___-__-__"){
            arr2[i].classList.add("unfilled");
        }       
        if(!arr[i]){
            arr2[i].classList.add("unfilled");
        }
    }
}
function notVisible(arr, arr2){
    for(let i = 0; i < arr.length; i++){              
        if(arr[i] && arr[i].value !== "+38 (___) ___-__-__"){
            arr2[i].classList.remove("unfilled");
        }
    }
}

function makeRequest(form){
    const formData = new FormData(form);
    const searchParam = new URLSearchParams(formData); 
    // change link
    fetch('https://httpbin.org/post', {
        method: 'POST',
        body: searchParam,
    }).then(function(response){
        return response.text();
    }).then(function(text){
        console.log(text);
    });
};

function makeVisibleHotel(){
    reserveHotelLableArray.forEach(item => item.classList.add("red"))
}
function notVisibleHotel(){
    reserveHotelLableArray.forEach(item => item.classList.remove("red"))
}

let menuListArray = document.querySelectorAll(".menu__list");
function showList(number){
    if(number === 0) {
        menuListArray[0].classList.add("menu__list--visible");
        if(menuListArray[1].classList.contains("menu__list--visible")){
            menuListArray[1].classList.remove("menu__list--visible");
        }        
    }else{
        menuListArray[1].classList.add("menu__list--visible");
        if(menuListArray[0].classList.contains("menu__list--visible")){
            menuListArray[0].classList.remove("menu__list--visible");
        }  
    }  
}
reserveHotelLableArray.forEach(item => item.addEventListener("click", function(){
    reserveHotelLableArray.forEach( item => item.classList.remove("red"))
}));

reserveEnterDate.addEventListener("input", function(){
    reserveEnterDate.classList.remove("unfilled");
});
reserveExitDate.addEventListener("input", function(){
    reserveExitDate.classList.remove("unfilled");
});

nameSurname.addEventListener("input", function(){
    nameSurname.classList.remove("unfilled");
});
telephone.addEventListener("click", function(){
    telephone.classList.remove("unfilled");
});
nameSurnameAsk.addEventListener("input", function(){
    nameSurnameAsk.classList.remove("unfilled");
});
telephoneAsk.addEventListener("click", function(){
    telephoneAsk.classList.remove("unfilled");
});
commentsAsk.addEventListener("input", function(){
    commentsAsk.classList.remove("unfilled");
});

userAgreement.addEventListener("click", function(){
    userAgreement.classList.remove("unfilled");
});

userAgreementAsk.addEventListener("click", function(){
    userAgreementAsk.classList.remove("unfilled");
});

email.addEventListener("input", function(){
    email.classList.remove("unfilled");
});

emailAsk.addEventListener("input", function(){
    emailAsk.classList.remove("unfilled");
});

document.querySelector(".ask__back-button").addEventListener("click", function(){
    intro.classList.add("intro--visible");
    introBody.classList.remove("intro__body--hidden");
    ask.classList.add("ask--hidden");

    nameSurnameAsk.classList.remove("unfilled");
    telephoneAsk.classList.remove("unfilled");
    commentsAsk.classList.remove("unfilled");
    userAgreementAsk.classList.remove("unfilled");
    emailAsk.classList.remove("unfilled");    
})

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

email.addEventListener('input', function(){
    onInput(email);
});

emailAsk.addEventListener('input', function(){
    onInput(emailAsk);
});

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value)
}

function onInput(emailVar) {
    if (isEmailValid(emailVar.value)) {
        emailVar.classList.remove("unfilled");
        return true;
    } else {
        emailVar.classList.add("unfilled");
    }
    if(emailVar.value === ""){
        emailVar.classList.remove("unfilled");
    }

    console.log("nope");
}









