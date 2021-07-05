import React from 'react';
import { Link } from 'react-router-dom';

function BookCard(book) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to=''>
                    <figure className='cards__item__pic-wrap' data-category={book.author}>
                        <img
                            className='cards__item__img'
                            alt='Travel Image'
                            src='https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg' />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{book.name}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default BookCard;