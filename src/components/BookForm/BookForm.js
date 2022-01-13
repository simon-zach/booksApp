import PropTypes from "prop-types"
import React, {useState} from "react";
import { nanoid } from "nanoid"
import {Form,Button} from "react-bootstrap";
function BookForm({addBook}){
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [price,setPrice] = useState(0);
    
    const handleSubmit = (event) =>{
        event.preventDefault();
         addBook({
            id: nanoid(),
            title: title,
            author: author,
            price: price
        })

    }
    const handleOnChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleOnChangeAuthor = (e) => {
        setAuthor(e.target.value);
    }
    const handleOnChangePrice = (e) => {
        setPrice(e.target.value);
    }
    return(
        <>
            <h1>Add new Book:</h1>
            <Form  onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control required="required" type="text" name="title" value={title} onChange={e=>handleOnChangeTitle(e)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Author:</Form.Label>
                    <Form.Control required="required" type="text" name="author" value={author} onChange={e=>handleOnChangeAuthor(e)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control required="required" type="number" name="price" value={price} onChange={e=>handleOnChangePrice(e)}/>
                </Form.Group>
                <Button  as="input" type="submit" value="Submit" />   
            </Form><br/>
        </>
    )
}

BookForm.propTypes = { 
	addBook: PropTypes.func
}

export default BookForm;