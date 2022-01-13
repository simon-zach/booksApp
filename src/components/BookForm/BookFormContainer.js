import { connect } from "react-redux";
import {addBookRequest} from "./../../redux/booksRedux"
import BookForm from "./BookForm";

  const mapDispatchToProps = dispatch => ({ 
    addBook: book => dispatch(addBookRequest(book)),
  })
  
export default connect(null,mapDispatchToProps)(BookForm)
  