import logo from './logo.svg';
import './App.css';

//import { connect } from 'react-redux'
//import { getAllBooks } from './redux/booksRedux'
import BooksList from './components/BooksList/BooksListContainer';
import AuthorsList from './components/AuthorsList/AuthorsListContainer';

function App() {

  return (
    <div className="App">
      <BooksList></BooksList>
      <AuthorsList></AuthorsList>
    </div>
  );
}


export default App
