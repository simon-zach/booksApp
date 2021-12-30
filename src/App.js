
import './App.css';
import { Container } from 'react-bootstrap';
import BooksList from './components/BooksList/BooksListContainer';
import AuthorsList from './components/AuthorsList/AuthorsListContainer';
import BookForm from './components/BookForm/BookFormContainer';

function App() {

  return (
    <div className="App">
      <Container>
        <BookForm></BookForm>
        <BooksList></BooksList>
      </Container>
    
     
      
    </div>
  );
}


export default App