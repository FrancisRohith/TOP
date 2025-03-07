import menu from "./menu.js"
import about from "./about.js"
import home from "./home.js"
import styles from "./styles.css"
const homebtn = document.querySelector('.home')
const menubtn = document.querySelector('.menu')
const aboutbtn = document.querySelector('.about')
const content = document.querySelector('#content')

homebtn.addEventListener('click',()=>{
    content.innerHTML = ''
    const homeContent = home()
    content.appendChild(homeContent)
})

menubtn.addEventListener('click',()=>{
    content.innerHTML = ''
    const menuContent = menu()
    content.appendChild(menuContent)
})

aboutbtn.addEventListener('click',()=>{
    content.innerHTML = ''
    content.appendChild(about())
})