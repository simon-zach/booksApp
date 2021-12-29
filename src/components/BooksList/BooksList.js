import React from "react";


function BooksList ({data}){
    return(
        <ul>
            {data.map((book)=><li key={book.id}>{book.title}</li>)}
        </ul>
    );
}
export default BooksList;