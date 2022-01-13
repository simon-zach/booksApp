import { createStore, combineReducers, applyMiddleware} from "redux"
import initialState from "./initialState"
import booksReducer from "./booksRedux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
    books: booksReducer,
}

const reducer = combineReducers(reducers);

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store