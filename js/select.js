const menuListRoom = document.querySelector(".menu__list--room");
const menuLabelRoomArray = document.querySelectorAll(".menu__label--room");
const menuButtonRoom = document.querySelector(".menu__button--room");

const menuListAdult = document.querySelector(".menu__list--adult");
const menuLabelAdultArray = document.querySelectorAll(".menu__label--adult");
const menuButtonAdult = document.querySelector(".menu__button--adult");

const menuListChild = document.querySelector(".menu__list--child");
const menuLabelChildArray = document.querySelectorAll(".menu__label--child");
const menuButtonChild = document.querySelector(".menu__button--child");

menuLabelRoomArray.forEach((item, index) =>{ item.addEventListener("click", function(){
    menuButtonRoom.innerHTML = menuLabelRoomArray[index].innerHTML;
    menuListRoom.classList.toggle("menu__list--active");
})
});

menuButtonRoom.addEventListener("click", function(){
    menuListRoom.classList.toggle("menu__list--active");
});

// --------------------------------------------------------------------------

menuLabelAdultArray.forEach((item, index) =>{ item.addEventListener("click", function(){
    menuButtonAdult.innerHTML = menuLabelAdultArray[index].innerHTML;
    menuListAdult.classList.toggle("menu__list--active");
})
});

menuButtonAdult.addEventListener("click", function(){
    menuListAdult.classList.toggle("menu__list--active");
})

// --------------------------------------------------------------------------

menuLabelChildArray.forEach((item, index) =>{ item.addEventListener("click", function(){
    menuButtonChild.innerHTML = menuLabelChildArray[index].innerHTML;
    menuListChild.classList.toggle("menu__list--active");
})
});

menuButtonChild.addEventListener("click", function(){
    menuListChild.classList.toggle("menu__list--active");
})