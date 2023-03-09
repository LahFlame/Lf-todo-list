import React from "react";
import "./list-item.styles.css"

const ListItem = ({todo,handleCheckedChange}) => {
    return(
            <div className="list-item">
                <label htmlFor={todo.id}>
                    <input type="checkbox" value={todo.activity} id={todo.id} onChange={handleCheckedChange}/>
                    <span>{todo.activity}</span>
                </label>
            </div>
    )
}

export default ListItem;