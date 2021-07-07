import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class EditBookModel extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(ev) {
        ev.preventDefault();
        fetch('https://localhost:44318/Book', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: ev.target.Id.value,
                name: ev.target.Name.value,
                author: ev.target.Author.value,
                imagePath: ev.target.ImagePath.value,
                year: ev.target.Year.value,
                imdb: ev.target.IMDB.value
            })
        })
            .then(res => res.json())
            .then((res) => {
                alert(res);
            },
                (error) => {
                    alert('Failed');
                });
    }

    render() {
        return (
            <Modal
                {...this.props}
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id='contained-modal-title-vcenter'>
                        Edit Book
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId='Id'>
                                    <Form.Label>Book Id</Form.Label>
                                    <Form.Control type='text' name='Id' required defaultValue={this.props.id} placeholder='Book Id' />
                                </Form.Group>

                                <Form.Group controlId='Name'>
                                    <Form.Label>Book Name</Form.Label>
                                    <Form.Control type='text' name='Name' required defaultValue={this.props.name} placeholder='Book Name' />
                                </Form.Group>

                                <Form.Group controlId='Author'>
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control type='text' name='Author' required defaultValue={this.props.author} placeholder='Book Author' />
                                </Form.Group>

                                <Form.Group controlId='ImagePath'>
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type='text' name='ImagePath' required defaultValue={this.props.imagePath} placeholder='Image URL' />
                                </Form.Group>

                                <Form.Group controlId='Year'>
                                    <Form.Label>Year</Form.Label>
                                    <Form.Control type='number' name='Year' required defaultValue={this.props.year} placeholder='Year' />
                                </Form.Group>

                                <Form.Group controlId='IMDB'>
                                    <Form.Label>IMDB Rating</Form.Label>
                                    <Form.Control type='text' name='IMDB' required defaultValue={this.props.imdb} placeholder='IMDB Rating' />
                                </Form.Group>

                                <Form.Group>
                                    <Button variant='primary' type='submit'>
                                        Update Book
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant='danger' onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>

            </Modal>
        );
    }
}