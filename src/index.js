import {BrowserRouter,Routes,Route
} from "react-router-dom";
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import EditBookForm from './components/EditBookForm/EditBookForm';

const rootElement = document.getElementById('root')
render(
  <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
           
          </Route>
          <Route path="editbook" element={<EditBookForm />}>
              <Route path=":bookId" element={<EditBookForm />}>
               
               </Route> 
          </Route>
        </Routes>
    </BrowserRouter>
  </Provider>,
  rootElement
)