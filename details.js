const booksArrayString = sessionStorage.getItem('books');

const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get('id')

if(id){
DbService.getSingleBook(id).then(book => render(book))
    
}

function render(book){

    const detailsWrapper = document.getElementById('details-wrapper');

    detailsWrapper.innerHTML = `<h2>${book.title}</h2> <br>
    <span> Autore: ${book.author}</span><br>
    <span> Anno di pubblicazione: ${book.dop}</span><br>
    <span> Genere: ${book.genre}</span><br>
    
    <img src="${book.cover}"> `
}
