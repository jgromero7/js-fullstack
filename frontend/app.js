import './styles/app.css';

import UI from './UI';

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    ui.renderBooks();
})

document.getElementById('book-form')
    .addEventListener('submit', event => {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;
        const image = document.getElementById('image').files;

        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('isbn', isbn);
        formData.append('image', image[0]);
        const ui = new UI();

        ui.addNewBook(formData);
        ui.renderMessage('New Book Added', 'success', 3000);

        event.preventDefault();
    });

document.getElementById('books-card')
    .addEventListener('click', event => {
        if (event.target.classList.contains('delete')) {
            const ui = new UI();
            ui.deleteBook(event.target.getAttribute('_id'));
            ui.renderMessage('Book Removed', 'danger', 3000);
            event.preventDefault();
        }
    });