import React from "react";
import { nanoid } from "nanoid";
import { Card,CardGroup,ListGroup,Container ,Button,Row,Col} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { getAllBooks, removeBookRequest } from '../../redux/booksRedux'

function BooksList (){
    const books = useSelector(state => getAllBooks(state))


	const dispatch = useDispatch()
	const removeBook = bookId => dispatch(removeBookRequest(bookId))

    return(
            <Container fluid>
                            <Row className="g-4">
                                
                        {  books.map(book=>{
                            return(
                                    
                                        <Col key={book.id} xl={3} md={4}>
                                        <Card>
                                            
                                            <Card.Body>
                                                <Card.Title>{book.title}</Card.Title>
                                            
                                                <ListGroup>
                                                    <ListGroup.Item>{book.author}</ListGroup.Item>
                                                    <ListGroup.Item>{book.price}</ListGroup.Item>
                                                </ListGroup>
                                                <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content. This content is a little bit longer.
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Button variant="danger" onClick={()=>removeBook(book.id)}>Delete</Button>{' '}
                                                <Button variant="primary" >Edit</Button>{' '}
                                            </Card.Footer>
                                            </Card>
                                        </Col>
                                    
                        
                                    )}
                            
                                    
                            )}
                    </Row>
                    </Container>
                        );
            
}
export default BooksList;