import React from "react";
import {connect} from 'react-redux'
import {getAllAuthors} from '../../redux/booksRedux'
import AuthorsList from "./AuthorsList";


const mapStateToProps = state => ({ 
    data: getAllAuthors(state),
  })
  
  export default connect(mapStateToProps)(AuthorsList)
  