import React from "react";
import {connect} from 'react-redux'
import {getAllBooks} from './../../redux/booksRedux'
import BooksList from "./BooksList";


const mapStateToProps = state => ({ 
    data: getAllBooks(state),
  })
  
  export default connect(mapStateToProps)(BooksList)
  