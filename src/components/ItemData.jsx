import React from "react";
import ItemBody from "./ItemBody";
import ItemImage from "./ItemImage";
import DeleteButton from "./DeleteButton";
import './style.css'

const ItemData = ({title,desc,image,id,onDelete,createdAt}) => {
    return(
        <>
        <ul className="card">
            <li>
                <div>
                <DeleteButton id={id} onDelete={onDelete}></DeleteButton>
                 <ItemImage img={image}></ItemImage>
                    <div className="container">
                    <ItemBody anime={title}></ItemBody>
                    <ItemBody descr={desc}></ItemBody>
                    <ItemBody createdAt={createdAt}></ItemBody>
                    </div>
                </div>
            </li>
        </ul>
        </>
    );
}

export default ItemData