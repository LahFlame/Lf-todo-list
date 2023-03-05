import React from "react";
import "./list-item.styles.css"

const ListItem = ({todo,handleCheckedChange}) => {
    return(
            <div className="list-item">
                <label htmlFor="todo">
                    <input type="checkbox" value={todo.activity} id="todo" onChange={handleCheckedChange}/>
                    <span>{todo.activity}</span>
                </label>
            </div>
    )
}

export default ListItem;