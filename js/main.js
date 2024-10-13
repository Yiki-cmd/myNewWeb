const navMenu = document.querySelector('.nav_menu')
const navOpenBtn = document.querySelector('.nav_menu-open')
const navcloseBtn = document.querySelector('.nav_menu-close')
navOpenBtn.addEventListener('click',()=>{
    navMenu.style.display = 'flex'
    navOpenBtn.style.display = 'none'
    navcloseBtn.style.display = 'inline-block'
})

navcloseBtn.addEventListener('click',()=>{
    navMenu.style.display = 'none'
    navOpenBtn.style.display = 'inline-block'
    navcloseBtn.style.display = 'none'
}) 