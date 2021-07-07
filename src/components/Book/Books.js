import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddBookModel } from './AddBookModel';
import { EditBookModel } from './EditBookModel';

import './Books.css';

class Books extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            addModalShow: false,
            editModalShow: false
        };
    }

    refreshList() {
        fetch('https://localhost:44318/Book')
            .then(res => res.json())
            .then(res => this.setState({ books: res }))
            .catch(error => console.log(error));
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteBook(id) {
        if (window.confirm('Are you sure you want to delete this book?')) {
            fetch('https://localhost:44318/Book/' + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
        }
    }

    render() {
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            < Container>
                <ButtonToolbar style={{ margin: '10px' }}>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}
                    >
                        Add Book
                    </Button>

                    <AddBookModel show={this.state.addModalShow} onHide={addModalClose}></AddBookModel>
                </ButtonToolbar>

                <Row md={4}>
                    {this.state.books.map(x =>
                        <Card key={x.id} style={{ width: '18rem', margin: '10px', padding: '10px' }}>
                            <Card.Img style={{ height: '350px' }} variant="top"
                                src={x.imagePath == null
                                    ? 'https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg'
                                    : x.imagePath} />
                            <Card.Body>
                                <Card.Title>{x.name}</Card.Title>
                                <Card.Text>
                                    {x.id} Some quick example text to build on the card title and make up the
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Author: {x.author}</ListGroupItem>
                                <ListGroupItem>Year: {x.year}</ListGroupItem>
                                <ListGroupItem>IMDB Rating: {x.imdb}</ListGroupItem>
                            </ListGroup>

                            <Button className='m-1' variant='primary'
                                onClick={() => this.setState({
                                    editModalShow: true,
                                    id: x.id,
                                    name: x.name,
                                    author: x.author,
                                    imagePath: x.imagePath,
                                    year: x.year,
                                    imdb: x.imdb
                                })}
                            >
                                Edit</Button>

                            <EditBookModel
                                show={this.state.editModalShow}
                                onHide={editModalClose}
                                id={x.id}
                                name={x.name}
                                author={x.author}
                                imagePath={x.imagePath}
                                year={x.year}
                                imdb={x.imdb}
                            />

                            <Button className='m-1' variant='danger'
                                onClick={() => this.deleteBook(x.id)}
                            >
                                Delete</Button>

                        </Card>
                    )}
                </Row>
            </Container >
        );
    }
}

export default Books;