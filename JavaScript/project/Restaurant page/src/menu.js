function page(){
    const container = document.createElement('div')

    const menu = document.createElement('div')
    menu.innerHTML = "Breakfast<br>Lunch<br>Snacks<br>Dinner"
    menu.style.fontWeight = 'bold'
    container.appendChild(menu)

    return container
}

export default page

