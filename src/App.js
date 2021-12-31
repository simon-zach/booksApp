import React,{useEffect,useState} from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import BooksList from './components/BooksList/BooksList';
import BookForm from './components/BookForm/BookFormContainer';
import {fetchBooks} from './redux/booksRedux';
import {connect} from 'react-redux'

function App({updateBooksData}) {

useEffect(()=>{
  updateBooksData()
  
},[])

  return (
    
    <div className="App">
      <Container>
        <BookForm></BookForm>
        
        <BooksList></BooksList>
      </Container>
    
     
      
    </div>
  );
}
const mapDispatchToProps = dispatch => {
	return ({
		updateBooksData: () => dispatch(fetchBooks()),
	})
}

export default connect(null, mapDispatchToProps)(App)