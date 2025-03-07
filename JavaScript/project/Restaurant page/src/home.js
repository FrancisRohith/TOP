function page() {
    const container = document.createElement('div');

    const rname = document.createElement('div');
    rname.classList.add('rname');
    rname.textContent = "Restaurant_Name";

    const head = document.createElement('div');
    head.classList.add('head');
    head.textContent = 'Welcome';
    container.appendChild(rname);
    container.appendChild(head);

    return container; 
}

export default page;