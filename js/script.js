// ============================================= DARK THEME =============================================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// ============================================= PREVIOUSLY SELECTED =============================================
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtain current theme

const getcurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'


const getcurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun'


// check if chosen topic

if(selectedTheme){
    document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon==='uil-moon'?'add':'remove'](iconTheme)
}


themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getcurrentTheme())
    localStorage.setItem('selected-icon', getcurrentIcon())

})

console.log("working")

// MENU SHOW OR HIDE

const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

//show menu

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click',linkAction))


// typewriter


new Typewriter('#typewriter', {
  strings: ['Sagar Jariwala', 'Web developer'],
  autoStart: true,
  loop:true,
  cursor:"|"
});
console.log("typerwriter is working")