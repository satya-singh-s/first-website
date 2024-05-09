burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navlist = document.querySelector('.navlist')
// bg = document.querySelector('.background')


burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp')
    rightnav.classList.toggle('v-class-resp')
    navlist.classList.toggle('v-class-resp')
    navbar.classList.toggle('back-ground')

})