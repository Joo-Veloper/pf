//header
const header = document.querySelector('.header');
console.log(header);

const headerHeight = header.offsetHeight;
console.log(headerHeight);

document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if(window.scrollY>headerHeight) {
        header.classList.add('header--dark');
    }else{
        header.classList.remove('header--dark');
    }
});

// home
const home = document.querySelector('.home__container')
console.log(home);

const homeHeight = home.offsetHeight;
console.log(homeHeight);

document.addEventListener('scroll', ()=>{
    console.log(1 - window.scrollY / homeHeight)
    home.style.opacity = 1 - window.scrollY / homeHeight; 
});

// Arrow Up
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeHeight / 2) {
        arrowUp.style.opacity = 1;
    } else{
        arrowUp.style.opacity = 0;
    }
});

// toggle
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open')
});
