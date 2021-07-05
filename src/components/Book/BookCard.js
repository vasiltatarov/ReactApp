import React from 'react';

function BookCard(book) {
    return (
        <>
            <div>
                <p>Name: {book.name}</p>
                <p>Autor: {book.author}</p>
            </div>
        </>
    );
}

export default BookCard;