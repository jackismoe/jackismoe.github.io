let menuIcons = document.querySelector('.menu-icons')
let menu = document.querySelector('#mySideNav')

let homeLink = document.querySelector('#home')
let projectsLink = document.querySelector('#projects')
let blogLink = document.querySelector('#blog')
let aboutLink = document.querySelector('#about')

let menuShown = false

document.addEventListener('click', (e) => {
  if (e.target === menuIcons && menuShown === false) {
    openNav()
    menuShown = true
  } else if (menuShown === true && e.target != menu) {
    closeNav()
    menuShown = false
  }
})

function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}