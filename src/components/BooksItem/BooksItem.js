import React from "react";
import {Link} from "react-router-dom"
import { Card,ListGroup ,Button,Col} from "react-bootstrap";
import PropTypes from "prop-types"

function BooksItem({book,removeBook}) {

    return(
        <>
            <Col xl={3} md={4}>
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
        </>
    );
}

BooksItem.propTypes ={
    book: PropTypes.object,
    removeBook: PropTypes.func,
    

}
export default BooksItem;