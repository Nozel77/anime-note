import React from "react";

const ItemBody = ({anime,descr,createdAt}) =>{
    return(
        <div>
            <h2 className="judulCard">{anime}</h2>
            <p className="descr">{descr}</p>
            <p>{createdAt}</p>
         </div>
    );
}

export default ItemBody