import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { getAllBooks } from './redux/booksRedux'

function App({data}) {
useEffect(()=>{
  console.log('use')
  

},[])

  return (
    <div className="App">
      <ul>
        {data.map((book)=>
          <li key={book.id}>{book.title}</li>
        )}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({ 
  data: getAllBooks(state),
})

export default connect(mapStateToProps)(App)
