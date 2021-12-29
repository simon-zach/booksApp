import React from "react";


function AuthorsList ({data}){
    return(
        <ul>
            {data.map((author)=><li key={author.id}>{author.name}</li>)}
        </ul>
    );
}
export default AuthorsList;