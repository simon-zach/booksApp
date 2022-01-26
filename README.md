# Book App

This project was created to present REDUX in react app.
App is about storing books. Following selectors an creator will describe best the app functionality.

```
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
```

## How to run

Clone repo and run JSON fake server.

### ` json-server --watch Data/db.json --port 3131`

When server is running run react redux app

### `npm start`

