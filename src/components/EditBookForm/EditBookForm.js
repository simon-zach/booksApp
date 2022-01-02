import PropTypes from 'prop-types'
import React, {useState} from "react";

import { nanoid } from 'nanoid'
import {Form,Button,Container} from "react-bootstrap";
import {useParams} from'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {getBook,updateBookRequest,getRequestStatus} from '../../redux/booksRedux'


function EditBookForm(){
    

    const {bookId} = useParams();
    
      const dispatch = useDispatch()
      const updateBook = book => dispatch(updateBookRequest(book))

     

    const book = useSelector(state => getBook(state,bookId))
    const requestStatus = useSelector(state => getRequestStatus(state))

    const [title,setTitle] = useState(book.title);
    const [author,setAuthor] = useState(book.author);
    const [price,setPrice] = useState(book.price);

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('handle')
        updateBook({
            id: bookId,
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
console.log(requestStatus)
    return(
        <Container>
         <h1>Update</h1>
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
                    <Button  as="input" type="submit" value="Save changes" />
                    
                </Form><br/>   
        </Container>
        
            
    )
}

EditBookForm.propTypes = { 
	addBook: PropTypes.func
}
export default EditBookForm;