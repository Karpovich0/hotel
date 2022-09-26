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
    menuListRoom.classList.remove("menu__list--active");   
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
    menuListRoom.classList.remove("menu__list--active");   
    menuListAdult.classList.remove("menu__list--active");
    menuListChild.classList.toggle("menu__list--active");
});

function closeMenu(){
    if(menuListRoom.classList.contains("menu__list--active")){
        menuListRoom.classList.remove("menu__list--active");
    }
    if(menuListAdult.classList.contains("menu__list--active")){
    menuListAdult.classList.remove("menu__list--active");
    }
    if(menuListChild.classList.contains("menu__list--active")){
    menuListChild.classList.remove("menu__list--active");
    }
}