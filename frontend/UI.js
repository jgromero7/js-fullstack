import BookServices from './services/BookServices';
const bookService = new BookServices;
import { format } from 'timeago.js';

class UI {

    async renderBooks() {
        const books = await bookService.getBooks();
        const booksCardContainer = document.getElementById('books-card')
        booksCardContainer.innerHTML = '';
        books.forEach(book => {
            const div = document.createElement('div');
            div.className = '';
            div.innerHTML = `
                <div class="card m-2">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="${book.imagePath}" alt="${book.title}"/>
                            </div>
                            <div class="col-md-6">
                                <div class="card-block px-2">
                                    <h4 class="card-title">${book.title}</h4>
                                    <p class="card-text">${book.author}</p>
                                    <p class="card-text">${book.isbn}</p>
                                    <a href="#" class="btn btn-danger delete" _id="${book._id}">Delete Book</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <p class="card-text">${format(book.created_ad)}</p>
                    </div>
                </div>
            `;

            booksCardContainer.appendChild(div);
        });
    }

    async addNewBook(book) {        
        await bookService.postBooks(book);
        this.clearBookForm();
        this.renderBooks();
    }

    clearBookForm() {
        document.getElementById('book-form').reset();
    }

    renderMessage(message, colorMessage, secondsToRemove){
        const div = document.createElement('div');
        div.className = `alert alert-${colorMessage} message`;
        div.appendChild(document.createTextNode(message));
 
        const container = document.querySelector('.col-md-4');
        const bookForm = document.querySelector('#book-form');

        container.insertBefore(div, bookForm);
        setTimeout(() => {
            document.querySelector('.message').remove();
        }, secondsToRemove);
    }

    async deleteBook(bookId) {
        await bookService.deleteBooks(bookId);
        this.renderBooks();
    }

}

export default UI;