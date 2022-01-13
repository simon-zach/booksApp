import React,{useEffect} from "react";
import {Container,Row,Alert,Spinner} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux"
import { getAllBooks,getRequestStatus ,resetRequestStatus} from "../../redux/booksRedux"
import BooksItem from "../BooksItem/BooksItemContainer";

function BooksList (){
    useEffect(()=>{  
        dispatch(resetRequestStatus())
    },[])
    
    const dispatch = useDispatch()
    const books = useSelector(state => getAllBooks(state))
    const request = useSelector((state)=>getRequestStatus(state))
	
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