// VARIABLES
const main_logo_image = document.querySelector('.main_logo_image');
const ytVideo_btn = document.querySelector('.ytVideo_btn');
const ytPromt = document.querySelector('.ytPromt');
const video_container = document.querySelector('.video_container');
// const headerLogo = document.querySelectorAll('.headerLogo');
const cross_btn = document.querySelector('.cross_btn');
const flame = document.querySelector('.flame');
const upperMoons = document.querySelector('#upperMoonsId');
const pillars =document.querySelector("#pillarsId");
const protagonist =document.querySelector(".protagonistId");
const main_logo_char = document.querySelector('.main_logo_char');

const protagonistBtn =document.querySelector(".protagonists");
const pillarsBtn =document.querySelector(".pillars");
const upperMoonsBtn = document.querySelector('.upperMoons');


main_logo_char.addEventListener('click' , ()=> {
    console.log("checking main logo");
    window.open('/../html/index.html');
})

protagonistBtn.addEventListener('click', () => {
    protagonist.classList.toggle('noDisplay');
    if (!pillars.classList.contains('noDisplay')) {
        pillars.classList.add('noDisplay');
    }
    if (!upperMoons.classList.contains('noDisplay')) {
        upperMoons.classList.add('noDisplay');
    }
});

pillarsBtn.addEventListener('click', () => {
    pillars.classList.toggle('noDisplay');
    if (!protagonist.classList.contains('noDisplay')) {
        protagonist.classList.add('noDisplay');
    }
    if (!upperMoons.classList.contains('noDisplay')) {
        upperMoons.classList.add('noDisplay');
    }
});

upperMoonsBtn.addEventListener('click', () => {
    upperMoons.classList.toggle('noDisplay');
    if (!protagonist.classList.contains('noDisplay')) {
        protagonist.classList.add('noDisplay');
    }
    if (!pillars.classList.contains('noDisplay')) {
        pillars.classList.add('noDisplay');
    }
});


ytVideo_btn.addEventListener('mouseover' , () => {
    ytPromt.classList.toggle('noDisplay');
})
ytVideo_btn.addEventListener('mouseout' , () => {
    ytPromt.classList.toggle('noDisplay');
})

ytVideo_btn.addEventListener("click" , () => {
    video_container.classList.toggle('noDisplay');
    console.log("btn pressed")
});

cross_btn.addEventListener('click' , ()=> {
    video_container.classList.toggle('noDisplay');
})

main_logo_image.addEventListener('mouseover' , () => {
    flame.classList.toggle('noDisplay');
})

main_logo_image.addEventListener('mouseout' , () => {
    flame.classList.toggle('noDisplay');
})
