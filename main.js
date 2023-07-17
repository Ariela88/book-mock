


  function render(books) {
    const booksWrapper = document.getElementById('books-wrapper');
    const mainContainer = document.getElementById('mainContainer');
  
    booksWrapper.innerHTML = '';
  
    for (let i = 0; i < books.length; i++) {
      const book = books[i];
  
      const cardBook = document.createElement('div');
      cardBook.classList.add('card-book');
  
      const TitleCard = document.createElement('strong');
      const AuthorCard = document.createElement('span');
  
      const nodeTitle = document.createTextNode(book.title);
      const nodeAuthor = document.createTextNode(book.author);
  
      TitleCard.appendChild(nodeTitle);
      AuthorCard.appendChild(nodeAuthor);
  
      cardBook.appendChild(TitleCard);
      cardBook.appendChild(AuthorCard);
      mainContainer.appendChild(cardBook);
  
      const detailBtn = document.createElement('button');
      const detailBtnNode = document.createTextNode('Dettagli');
      detailBtn.appendChild(detailBtnNode);
  
      detailBtn.addEventListener('click', () => {
        // Utilizziamo la funzione encodeURI per gestire eventuali caratteri speciali nell'ID del libro.
        window.location = './details.html?id=' + encodeURI(book.id);
      });
  
      cardBook.appendChild(detailBtn);
    }
    }

  DbService.getAllBooks().then(books => {
    const manager = new Manager(books);
    render(manager.booksArray);
  });
  
