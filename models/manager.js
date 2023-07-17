class Manager {

    constructor(booksArray = []) {
        
        this.booksArray = booksArray

    }

    addbooks(books) {

        this.booksArray.push(books)

    }

    // addbooksWithTitle(title) {

    //     const newbooks = new books(title)

    //     this.addbooks(newbooks)
    //     Storage.saveData(manager.booksArray)} 


   

    // orderoDosByTitle() {

    //     this.booksArray.sort((books1, books2) => books1.compareByTitle(books2))


    // }

    // orderbookssByDop() {


    //     this.booksArray.sort((books1, books2) => books1.compareByDop(books2))


    // }

    


    deletebooks(index) {

        
        
        this.booksArray.splice(index, 1);
        
        

    }

}