class DbService {
    static getAllBooks() {
      const url = 'https://64b512caf3dbab5a95c6a515.mockapi.io';
      return fetch(url)
        .then(resp => resp.json())
        .then(data => this.convertBooksArray(data))
        .catch(error => console.log(error.message));
    }
  
    convertBooksArray(genericArray) {
      const tempArray = [];
      for (const obj of genericArray) {
        const newBook = new Book(obj.title, obj.author, obj.dop, obj.genre, obj.cover);
        tempArray.push(newBook);
      }
      return tempArray;
    }
  
    static getSingleBook(id) {
      const url = 'https://64b512caf3dbab5a95c6a515.mockapi.io/books/' + id;
      return fetch(url).then(resp => resp.json());
    }
  
    static deleteBook(id) {
      const deleteUrl = 'https://64b512caf3dbab5a95c6a515.mockapi.io/books/' + id;
      return fetch(deleteUrl, { method: 'delete' }).then(resp => resp.json());
    }
  }