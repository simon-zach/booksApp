import React from "react";
import {connect} from 'react-redux'
import {getAllBooks,removeBook} from './../../redux/booksRedux'
import BooksList from "./BooksList";


const mapStateToProps = state => ({ 
    data: getAllBooks(state),
  })

  const mapDispatchToProps = dispatch => ({ 
    removeBook: bookId => dispatch(removeBook(bookId)),
  })
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(BooksList)
  