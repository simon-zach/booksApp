import { connect } from "react-redux";


import {addBook} from './../../redux/booksRedux'
import BookForm from "./BookForm";





  const mapDispatchToProps = dispatch => ({ 
    addBook: book => dispatch(addBook(book)),
  })
  
  
  export default connect(null,mapDispatchToProps)(BookForm)
  