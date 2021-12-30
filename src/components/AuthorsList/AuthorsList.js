import React from "react";
import { nanoid } from "nanoid";


function AuthorsList ({data}){
    console.log(data)
    return(
        <ul>
            {data.map((author)=><li key={nanoid()}>{author}</li>)}
        </ul>
    );
}
export default AuthorsList;