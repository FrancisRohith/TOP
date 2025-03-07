function page(){
    const container = document.createElement('div')

    const detail = document.createElement('div')
    detail.innerHTML = "Address<br>Mobile No:<br>Avalable:24/7"

    container.appendChild(detail)

    return container
}

export default page