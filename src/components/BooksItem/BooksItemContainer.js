import { connect } from "react-redux";
import {removeBookRequest} from './../../redux/booksRedux'
import BooksItem from "./BooksItem";

  const mapDispatchToProps = dispatch => ({ 
    removeBook: bookId => dispatch(removeBookRequest(bookId)),
  })
  
  
  export default connect(null,mapDispatchToProps)(BooksItem)
  

//const dispatch = useDispatch()
   /// const removeBook = bookId => dispatch(removeBookRequest(bookId))