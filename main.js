let manager;

let allBooks;

const service = new DbService()


DbService.getAllBooks().then(books => {
  manager = new Manager(books);
  allBooks = books
  render(manager.booksArray);
});




function render(books) {
  const booksWrapper = document.getElementById('books-wrapper');

  booksWrapper.innerHTML = '';

  for (let i = 0; i < books.length; i++) {
    const book = books[i];

    const cardBook = document.createElement('div');
    cardBook.classList.add('card-book');


    const coverCard = document.createElement('img');
    coverCard.src = book.cover
    const titleCard = document.createElement('strong');
    const nodeTitle = document.createTextNode(book.title);

    cardBook.appendChild(coverCard);
    titleCard.appendChild(nodeTitle);
    cardBook.appendChild(titleCard);


    booksWrapper.appendChild(cardBook);
    const spacer = document.createElement('div')
    spacer.classList.add('spacer')
    const btnDivCard = document.createElement('div')
    btnDivCard.classList.add('btn-div-card')
    const detailBtn = document.createElement('button');

    const detailBtnNode = document.createTextNode('Dettagli');
    detailBtn.appendChild(detailBtnNode);
    detailBtn.classList.add('details-btn')

    detailBtn.addEventListener('click', () => {

      window.location = './details.html?id=' + book.id;
    });

    const deleteBtn = document.createElement('button')
    const deleteNodeBtn = document.createTextNode('Elimina')
    deleteBtn.appendChild(deleteNodeBtn)
    btnDivCard.appendChild(deleteBtn)
    detailBtn.classList.add('delete-btn')

    deleteBtn.addEventListener('click', () => {
      DbService.deleteBook(book.id).then(() => {
        manager.deleteBook(i);
        render(books)

      })
    })


    btnDivCard.appendChild(detailBtn);
    cardBook.appendChild(btnDivCard)
  }
}

function saveBooks() {

  let form = document.querySelector('form')
  let title = form.title.value
  let author = form.author.value
  let dop = new Date()
  let genre = form.genre.value
  console.log(title)

  let book = new Book(title, author, dop, genre)
  console.log(book)
  DbService.addNewBook(book)
  manager.addBook(book)

}

function OrderDop() {
  console.log('soort')

  manager.orderByDop()
  render(allBooks)

}

function OrderTitle() {


  manager.orderByTitle()
  render(allBooks)


}








