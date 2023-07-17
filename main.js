let manager;
DbService.getAllBooks().then(books => {
    manager = new Manager(books);
    render();
})

function render() {


    const booksWrapper = document.getElementById('books-wrapper')

    booksWrapper.innerHTML = '';

    for (let i = 0; i < manager.booksArray.length; i++) {
        const book = manager.booksArray[i];
        console.log(booksArray)

        const div = document.createElement('div')
        const titleStrong = document.createElement('strong')
        const titleNode = document.createTextNode(book.title)

        div.classList.add('book-card')

        titleStrong.appendChild(titleNode)
        div.appendChild(titleStrong)

        // const deleteBtn = document.createElement('button');

        // const deleteNode = document.createTextNode("cancella");

        // deleteBtn.appendChild(deleteNode);

        // div.appendChild(deleteBtn);
        // deleteBtn.classList.add('dltBtn')


        // deleteBtn.addEventListener("click", () => {

        //     DbService.deleteBooks(book.id).then(() => {
        //         manager.deleteBooks(i);

        //         render();

            }

            const dopSpan = document.createElement('span')
        const dopNode = document.createTextNode(book.dop)


        dopSpan.appendChild(dopSpan)
        div.appendChild(dopSpan)

        booksWrapper.appendChild(div)


        };

        render()

    
    
