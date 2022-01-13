import { connect } from "react-redux";
import { getAllBooks,getRequestStatus ,resetRequestStatus} from "../../redux/booksRedux"
import BooksList from "./BooksList";

const mapStateToProps = state => ({ 
  getAllBooks: () => getAllBooks(state),
  getRequestStatus: () => getRequestStatus(state),

})

const mapDispatchToProps = dispatch => ({ 
  resetRequestStatus: () => dispatch(resetRequestStatus()),
})
  
export default connect(mapStateToProps,mapDispatchToProps)(BooksList)
  