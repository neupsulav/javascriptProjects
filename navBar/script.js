let hamburger = document.getElementById('hamburger')
let links = document.querySelector('.links')
let navBar = document.getElementsByTagName('nav')[0]
hamburger.addEventListener('click', () => {
    // hamburger.classList.toggle('fa-solid fa-xmark')
    links.classList.toggle('hide')
    navBar.classList.toggle('expand')
})