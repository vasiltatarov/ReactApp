import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddBookModel } from './AddBookModel';

import './Books.css';

class Books extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            addModalShow: false
        };
    }

    componentDidMount() {
        fetch('https://localhost:44318/Book')
            .then(res => res.json())
            .then(res => this.setState({ books: res }))
            .catch(error => console.log(error));
    }

    render() {
        let addModalClose = () => this.setState({ addModalShow: false });
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
                            <Card.Img variant="top" src="https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg" />
                            <Card.Body>
                                <Card.Title>{x.name}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Author: {x.author}</ListGroupItem>
                                <ListGroupItem>Year: {x.year}</ListGroupItem>
                                <ListGroupItem>IMDB Rating: {x.imdb}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    )}
                </Row>
            </Container >
        );
    }
}

export default Books;