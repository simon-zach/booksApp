import { createStore, combineReducers } from 'redux'
import initialState from './initialState'
import booksReducer from './booksRedux'
import authorsReducer from './authorsRedux.js'


const reducers = {
    books: booksReducer,
    authors: authorsReducer,

}

const reducer = combineReducers(reducers);

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store