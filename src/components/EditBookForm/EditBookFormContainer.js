import { connect } from "react-redux";
import {getBook, updateBookRequest, getRequestStatus, resetRequestStatus} from "../../redux/booksRedux"
import EditBookForm from "./EditBookForm";


const mapStateToProps = state => ({ 
  getRequestStatus: ()=>getRequestStatus(state),
  getBook: (bookId) => getBook(state,bookId),

})

const mapDispatchToProps = dispatch => ({ 
  updateBookRequest: book => dispatch(updateBookRequest(book)),
  resetRequestStatus: () => dispatch(resetRequestStatus()),
})
  
export default connect(mapStateToProps,mapDispatchToProps)(EditBookForm)
  