import React,{useEffect} from "react";
import {Container,Row,Alert,Spinner} from "react-bootstrap";
import BooksItem from "../BooksItem/BooksItemContainer";


function BooksList ({ getAllBooks,getRequestStatus ,resetRequestStatus}){
    useEffect(()=>{  
        resetRequestStatus()
    },[])
    

    const books = getAllBooks()
    const request = getRequestStatus()
	
    return( 
        <Container fluid>
            <h1>Books in db:</h1>
            <Row className="g-4">
                { request.pending && <Spinner animation="border" variant="primary" />}
                { request.error && <Alert variant="warning">Error... :(</Alert>}
                { request.success && books.map(book=>{
                    return (<BooksItem key={book.id} book={book}></BooksItem>)
                    })
                }
            </Row>
        </Container>                    
    );
            
}
export default BooksList;