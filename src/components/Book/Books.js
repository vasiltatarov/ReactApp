import React, { Component } from 'react';
import BookCard from './BookCard';

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
            <div>
                <h1>Books</h1>
                <ul>
                    {this.state.books.map(x =>
                        <BookCard
                            key={x.id}
                            name={x.name}
                            author={x.author}
                        />)}
                </ul>
            </div>
        );
    }
}

export default Books;