function book(name,author,pages,red){
    this.name = name
    this.author = author
    this.pages = pages
    this.red = red
   }

const library =[]

function addBookToLibrary(book){
    library.push(book)
}

function display(){
    let result = ""
    for (let i of library){
        result+= 
        `<div class="book-item">
            <h3>Book:${i.name}</h3>
            <p>Author:${i.author}</p>
            <p>Number of pages:${i.pages}</p>
            <p>Red:${i.red ? "Yes" :"No"}</p>
        </div>`
    }
    return result
}
display()

const addbookbtn = document.querySelector(' .addbook')
const dialog = document.querySelector('dialog')
const submitbtn = document.querySelector('.submit')
const showbookbtn = document.querySelector('.showbook')
const output = document.querySelector('output')
const form = dialog.querySelector('form')
const cancelbtn = document.querySelector('.cancel')
const book_name = document.querySelector('.book_name')
const author = document.querySelector('.author')
const pages = document.querySelector('.pages')
const red = document.querySelector('.red')

cancelbtn.addEventListener('click',()=>{
    dialog.close()
})

addbookbtn.addEventListener('click',()=>{
    dialog.showModal()
})

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const newBook = new book(book_name.value,author.value,pages.value,red.checked)
    addBookToLibrary(newBook)
    dialog.close()
    form.reset()
})

showbookbtn.addEventListener('click',()=>{
    output.innerHTML = display()
})