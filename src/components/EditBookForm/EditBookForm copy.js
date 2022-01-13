import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"
import {Form, Button, Container, Spinner, Alert} from "react-bootstrap"
import {useParams} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {getBook, updateBookRequest, getRequestStatus, resetRequestStatus} from "../../redux/booksRedux"

function EditBookForm(){
    useEffect(()=>{
         dispatch(resetRequestStatus())
    },[])

    const {bookId} = useParams();
    const request = ((state)=>getRequestStatus(state))
    const dispatch = useDispatch()
    const updateBook = book => dispatch(updateBookRequest(book))
    const book = useSelector(state => getBook(state,bookId))
    
    const [title,setTitle] = useState(book.title);
    const [author,setAuthor] = useState(book.author);
    const [price,setPrice] = useState(book.price);

    const handleSubmit = (event) =>{
        event.preventDefault();
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

    return(
        <Container>
         <h1>Update</h1>
            <Form  onSubmit={handleSubmit}>
                {request.pending&&<Spinner animation="border" variant="primary" />}
                {request.error&&<Alert>Error</Alert>}
                {request.success&&<Alert variant="success">Item updated!</Alert>}
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