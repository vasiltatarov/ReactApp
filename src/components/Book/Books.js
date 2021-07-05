import React, { Component } from 'react';
import BookCard from './BookCard';
import './Books.css';

class Books extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: []
        };
    }

    componentDidMount() {
        fetch('https://localhost:44318/Book')
            .then(res => res.json())
            .then(res => this.setState({ books: res }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className='cards'>
                <h1>Check out these EPIC Destinations!</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            {this.state.books.map(x =>
                                <BookCard
                                    key={x.id}
                                    name={x.name}
                                    author={x.author}
                                />)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Books;