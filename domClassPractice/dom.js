
// let banner = document.getElementById("page-banner");
// let page = document.getElementsByClassName("title")
// for(let index = 0; index< page.length; index++){
//     const element = page[index];
//     console.log(element)
// }
// Array.from(page).forEach((element) => console.log(element.textContent = "BIG Ooo"));
// console.log(page[0])
// Array.from(page).forEach((element)=> console.log(element.textContent = "My Sweet Melody"))
// let ul = document.getElementsByTagName("ul")
// console.log(ul)


// let books = document.querySelector("#book-list");
// console.log(books)

// let books = document.querySelectorAll("#book-list");
//  console.log(books)

// let books = document.querySelectorAll("#book-list ul");

// books.forEach((book)=>console.log(book.textContent))

// books.forEach((book)=>console.log(book.textContent += ("book title")))
// books.forEach((book)=>console.log(book.innerHTML += ("book title")))
// console.log(books[0].textContent)
// console.log(books.id)
// console.log(books.parentElement.textContent)
// console.log(books.parentNode)
// console.log(books.parentElement)

//  console.log(books)

let books = document.querySelector("#book-list ul");
books.addEventListener("click",(e)=>{
    console.log(e.target)
    if(e.target.className = "delete"){
        // console.log("clicked")
        const li = e.target.parentElement
        books.removeChild(li)
    }
})

const addBooks = document.forms['add-book']
addBooks.addEventListener('submit', (event)=>{
    event.preventDefault()
    const value = addBooks.querySelector('input[type = "text"]').value;
    // console.log(value)
    // melody gives birth for philip-the-piper
    const li = document.createElement("li")
    const addBook = document.createElement('span')
    const deleteBtn = document.createElement('span')

    addBook.textContent = value
    deleteBtn.textContent = "delete"

    li.appendChild(addBook)
    li.appendChild(deleteBtn)


    books.appendChild(li)
    addBook.classList.add("name")
    deleteBtn.classList .add('delete')

    // addBook.className = 'name'
    // deleteBtn.className = 'delete'
})

const searchBar = document.forms['search-books'].querySelector('input')

searchBar.addEventListener('keyup', (e)=>{
    const value = e.target.value.toLowerCase();
    const titles = books.getElementsByTagName("li")
    Array.from(titles).forEach((title)=>{
        const text = title.firstElementChild.textContent;
        if(text.toLowerCase().includes(value)){
            title.style.display = "block"
        }else{
            title.style.display = "none"
        }
    })
})