class Book {
    constructor(title, author, dop, genre, cover = 'https://loremflickr.com/640/480/nightlife',id) {
      this.title = title;
      this.author = author;
      this.dop = new Date(dop).getFullYear();
      this.genre = genre;
      this.cover = cover;
      this.id = id;
    }


    
  }