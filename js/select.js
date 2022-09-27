const menuListRoomArray = document.querySelectorAll(".menu__list--room");
const menuLabelRoomArray = document.querySelectorAll(".menu__label--room");
const menuButtonRoom = document.querySelector(".menu__button--room");

const menuListAdult = document.querySelector(".menu__list--adult");
const menuLabelAdultArray = document.querySelectorAll(".menu__label--adult");
const menuButtonAdult = document.querySelector(".menu__button--adult");

const menuListChild = document.querySelector(".menu__list--child");
const menuLabelChildArray = document.querySelectorAll(".menu__label--child");
const menuButtonChild = document.querySelector(".menu__button--child");

const menuButtonArray = [menuButtonRoom, menuButtonAdult, menuButtonChild];

let hotelNumber = 0;

menuLabelRoomArray.forEach((item, index) =>{ item.addEventListener("click", function(){
    menuButtonRoom.innerHTML = menuLabelRoomArray[index].innerHTML;
    menuListRoomArray[hotelNumber].classList.toggle("menu__list--active");
})
});

menuButtonRoom.addEventListener("click", function(){
    menuListRoomArray[hotelNumber].classList.toggle("menu__list--active");
    menuButtonRoom.classList.remove("unfilled");
    menuListAdult.classList.remove("menu__list--active");
    menuListChild.classList.remove("menu__list--active");
});

// --------------------------------------------------------------------------

menuLabelAdultArray.forEach((item, index) =>{ item.addEventListener("click", function(){
    menuButtonAdult.innerHTML = menuLabelAdultArray[index].innerHTML;
    menuListAdult.classList.toggle("menu__list--active");
    })
});

menuButtonAdult.addEventListener("click", function(){
    menuListRoomArray[hotelNumber].classList.remove("menu__list--active");    
    menuButtonAdult.classList.remove("unfilled");   
    menuListChild.classList.remove("menu__list--active");
    menuListAdult.classList.toggle("menu__list--active");
})

// --------------------------------------------------------------------------

menuLabelChildArray.forEach((item, index) =>{ item.addEventListener("click", function(){
    menuButtonChild.innerHTML = menuLabelChildArray[index].innerHTML;
    menuListChild.classList.toggle("menu__list--active");
})
});

menuButtonChild.addEventListener("click", function(){
    menuListRoomArray[hotelNumber].classList.remove("menu__list--active");
    menuButtonChild.classList.remove("unfilled");   
    menuListAdult.classList.remove("menu__list--active");
    menuListChild.classList.toggle("menu__list--active");
});

function closeMenu(){
    if(menuListRoomArray[hotelNumber].classList.contains("menu__list--active")){
        menuListRoomArray[hotelNumber].classList.remove("menu__list--active");
    }
    if(menuListAdult.classList.contains("menu__list--active")){
    menuListAdult.classList.remove("menu__list--active");
    }
    if(menuListChild.classList.contains("menu__list--active")){
    menuListChild.classList.remove("menu__list--active");
    }
}

function selectedHotel(number){
    if(hotelNumber === number){
        hotelNumber = number;
    }else{
        hotelNumber = number;
        document.querySelector(".menu__button--room").innerHTML = "";
    }

}
