class Manager {
    constructor(booksArray = []) {
      this.booksArray = booksArray;
    }
  
    addBook(book) {
      this.booksArray.push(book);
    }
  
   orderByTitle() {
      this.booksArray.sort((book1, book2) => book1.title.localeCompare(book2.title));
    }
  
   orderByDop() {
      this.booksArray.sort((book1, book2) => book1.dop.localeCompare(book2.dop));
    }
  
    deleteBook(index) {
      this.booksArray.splice(index, 1);
    }
  }