const createActionName = function(name) {
    return `app/books/${name}`
}

const ADD_BOOK = createActionName("ADD_BOOK");
const REMOVE_BOOK = createActionName("REMOVE_BOOK");
const FETCH_BOOKS = createActionName("FETCH_BOOKS");
const UPDATE_BOOK = createActionName("UPDATE_BOOK");
const START_REQUEST = createActionName("START_REQUEST")
const FINISH_REQUEST_WITH_ERROR = createActionName("FINISH_REQUEST_WITH_ERROR")
const FINISH_REQUEST_WITH_SUCCESS = createActionName("FINISH_REQUEST_WITH_SUCCESS")
const RESET_REQUEST_STATUS = createActionName("RESET_REQUEST_STATUS")

//selectors
export const getAllBooks = state => state.books.data;
export const getBook = (state, bookId) => state.books.data.find((book)=>book.id===bookId);
export const getRequestStatus = (state) => state.books.request


// action creators
export const addBook = payload => ({ type: ADD_BOOK, payload })
export const removeBook = payload => ({ type: REMOVE_BOOK, payload })
export const updateBooksData = payload => ({ type: FETCH_BOOKS, payload })
export const updateBook = payload => ({ type: UPDATE_BOOK, payload })

export const startRequest = () => ({ type: START_REQUEST })
export const finishRequestWithError = () => ({ type: FINISH_REQUEST_WITH_ERROR })
export const finishRequestWithSuccess = () => ({ type: FINISH_REQUEST_WITH_SUCCESS })
export const resetRequestStatus = () => ({type: RESET_REQUEST_STATUS})

export const fetchBooks = () => {
    return async (dispatch) => {
        try {
            dispatch(startRequest())
            const res = await fetch("http://localhost:3131/books")
            if (res.status !== 200) throw new Error("Something went wrong")
            const data = await res.json()
            dispatch(updateBooksData(data))
            dispatch(finishRequestWithSuccess())
            
        } catch(err) {
            console.error(err)
            dispatch(finishRequestWithError())
    
        }
    
    }
}

export const removeBookRequest = bookId => {
    return async (dispatch) => {
        try{
            dispatch(startRequest())
            const res = await fetch(`http://localhost:3131/books/${bookId}`, { method: "DELETE" })
            dispatch(removeBook(bookId))
            if (res.status !== 200) throw new Error("Something went wrong")
            else alert("Removed Successfully")
            dispatch(finishRequestWithSuccess())
        }catch(error){
            console.log(error)
        }
    }
}

export const addBookRequest = book => {
    return async (dispatch) => {
        try {
            dispatch(startRequest())
            const res= await fetch(`http://localhost:3131/books`, { method: "POST", body: JSON.stringify(book), headers: { "Content-Type": "application/json"}})
            if (res.status !== 201) throw new Error("Something went wrong")
            else alert("Added Successfully") 
            dispatch(addBook(book))
            dispatch(finishRequestWithSuccess())
        }
        catch(error){
            console.log(error)
        }
        
    }
}
export const updateBookRequest = book => {
    return async (dispatch) => {
        try{
            dispatch(startRequest())
            const res = await fetch(`http://localhost:3131/books/${book.id}`, { method: "PUT", body: JSON.stringify(book), headers: { "Content-Type": "application/json"}})
            if (res.status !== 200) throw new Error("Something went wrong")
            else alert("Updated Successfully")
            dispatch(updateBook(book))
            dispatch(finishRequestWithSuccess())
        }catch(error){
            console.log(error)
        }
    }
}

const reducer = function(statePart = [], action = {}) {
    switch(action.type) {
        case FETCH_BOOKS:
            return { ...statePart, data: action.payload }
        case UPDATE_BOOK: 
            return   { ...statePart, data: statePart.data.map(book=>(book.id===action.payload.id)?  action.payload :  book) } 
        case ADD_BOOK:
            return { ...statePart, data: [ ...statePart.data, action.payload ] }
        case REMOVE_BOOK:
            return { ...statePart, data: statePart.data.filter(book => book.id !== action.payload) }
        case START_REQUEST:
            return { ...statePart, request: { pending: true, error: false, success: false }}
        case FINISH_REQUEST_WITH_SUCCESS:
            return { ...statePart, request: { pending: false, error: false, success: true }}
        case FINISH_REQUEST_WITH_ERROR:
            return { ...statePart, request: { pending: false, error: true, success: false }}   
        case RESET_REQUEST_STATUS:
            return { ...statePart, request: { pending: false, error: false, success: false }}
                default:
            return statePart
    }
}
           
export default reducer