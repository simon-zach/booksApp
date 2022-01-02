const createActionName = function(name) {
    return `app/books/${name}`
}

const ADD_BOOK = createActionName('ADD_BOOK');
const REMOVE_BOOK = createActionName('REMOVE_BOOK');
const FETCH_BOOKS = createActionName('FETCH_BOOKS');
const UPDATE_BOOK = createActionName('UPDATE_BOOK');
//selectors
export const getAllBooks = state => state.books;
export const getBook = (state, bookId) => state.books.find((book)=>book.id===bookId);

export const getAllAuthors = state => [... new Set(state.books.map(book=>book.author))];

// action creators
export const addBook = payload => ({ type: ADD_BOOK, payload })
export const removeBook = payload => ({ type: REMOVE_BOOK, payload })
export const updateBooksData = payload => ({ type: FETCH_BOOKS, payload })

export const updateBook = payload => ({ type: UPDATE_BOOK, payload })

export const fetchBooks = () => {
    return async (dispatch) => {
        try {
           // console.log('fuck')
            //dispatch(startRequest())
            const res = await fetch('http://localhost:3131/books')
            //if(res.status !== 200) throw new Error('Something went wrong')
            const data = await res.json()
            //console.log(data)
            dispatch(updateBooksData(data))
           // dispatch(finishRequestWithSuccess())

        } catch(err) {

            console.error(err)
            //dispatch(finishRequestWithError())
    
        }
    
    }
}

export const removeBookRequest = bookId => {
    return (dispatch) => {
        fetch(`http://localhost:3131/books/${bookId}`, { method: 'DELETE' })
            .then(() => dispatch(removeBook(bookId)))
    }
}

export const addBookRequest = book => {
    return (dispatch) => {
        fetch(`http://localhost:3131/books`, { method: 'POST', body: JSON.stringify(book), headers: { 'Content-Type': 'application/json'}})
            .then(() => dispatch(addBook(book)))
    }
}
export const updateBookRequest = book => {
    return (dispatch) => {
        fetch(`http://localhost:3131/books/${book.id}`, { method: 'PUT', body: JSON.stringify(book), headers: { 'Content-Type': 'application/json'}})
            .then(() => dispatch(updateBook(book)))
    }
}

const reducer = function(statePart = [], action = {}) {
    switch(action.type) {
        case FETCH_BOOKS:
            return  [  ...action.payload ]
        case UPDATE_BOOK:
            return    statePart.map(book=>(book.id===action.payload.id)?  action.payload :  book)  
        case ADD_BOOK:
            return [ ...statePart, action.payload ]
        case REMOVE_BOOK:
            console.log(action.payload)
            return statePart.filter(book => book.id !== action.payload)
                default:
            return statePart
    }
}
           



export default reducer