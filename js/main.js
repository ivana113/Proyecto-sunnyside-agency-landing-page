const hamburguer = document.querySelector('.nav__hamburguer');
const links = document.querySelector('.nav__menu');

hamburguer.addEventListener('click',() =>{
    links.classList.toggle('active');
})