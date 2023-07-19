class DbService {
    static getAllBooks() {
      const url = 'https://64b512caf3dbab5a95c6a515.mockapi.io/books/';
      return fetch(url)
        .then(resp => resp.json())
        .then(data => this.convertBooksArray(data))
        .catch(error => console.log(error.message));
    }
  
    static convertBooksArray(genericArray) {
      const tempArray = [];
      console.log(genericArray)
      for (const obj of genericArray) {

        
        const newBook = new Book(obj.title, obj.author, obj.dop, obj.genre, obj.cover,obj.id);
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


    static addNewBook(book){

      const url = 'https://64b512caf3dbab5a95c6a515.mockapi.io/books'

      fetch(url, {method: 'POST', headers: {'content-type': 'application/json'},body: JSON.stringify(book)}).then(resp => {if (resp.ok){
        return resp.json()
      }})




    }


    static OrderBookByDop(){

      let newArray = []
    
      for (const book of manager.booksArray) {
    
        newArray.push(book)
     
      }
    
      console.log('sort ')
    
      return newArray.sort((a,b)=> a > b ? a : b)
    }
    
    static OrderBookByTitle(){
    
      let newArray = []
    
      for (const book of manager.booksArray) {
    
        newArray.push(book)
     
      }
    
     
    
      return newArray.sort((a,b)=> a.title.localeCompare(b.title))
      
    }


}