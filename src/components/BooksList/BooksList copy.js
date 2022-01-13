import React,{useEffect} from "react";
import {Link} from "react-router-dom"
import { Card,CardGroup,ListGroup,Container ,Button,Row,Col,Alert,Spinner} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux"
import { getAllBooks, removeBookRequest,getRequestStatus ,resetRequestStatus} from "../../redux/booksRedux"

function BooksList (){
    useEffect(()=>{  
        dispatch(resetRequestStatus())
    },[])
    
    const dispatch = useDispatch()
    const books = useSelector(state => getAllBooks(state))
    const request = useSelector((state)=>getRequestStatus(state))
	const removeBook = bookId => dispatch(removeBookRequest(bookId))

    return( 
        <Container fluid>
            <h1>Books in db:</h1>
            <Row className="g-4">
                { request.pending && <Spinner animation="border" variant="primary" />}
                { request.error && <Alert variant="warning">Error... :(</Alert>}
                { request.success && books.map(book=>{
                    return(  
                        <Col key={book.id} xl={3} md={4}>
                        <Card>
                            <Card.Img variant="top" src="bookImage.png" />
                            <Card.Header>Title: {book.title}</Card.Header>
                            <ListGroup variant="flush"> 
                                <ListGroup.Item>Author: {book.author}</ListGroup.Item>
                                <ListGroup.Item>Price: {book.price}</ListGroup.Item>
                            </ListGroup>
                            <Card.Footer>
                                <Button variant="danger" onClick={()=>removeBook(book.id)}>Delete</Button>{" "}
                                <Link to={`/editBook/${book.id}`}><Button variant="primary">Edit</Button></Link>{" "}
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