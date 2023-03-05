import React from "react";
import "./pending-list.styles.css"
import ListItem from "../list-item/list-item.component";


const PendingList = ({todos,handleChange,handleCheckedChange,handleSubmit,inputValue}) => {
    return(
        <article className="list">
            {
                todos.map((todo) => <ListItem key={todo.id} todo={todo} handleCheckedChange={handleCheckedChange} />)
            }
            <form className="item" onSubmit={handleSubmit}>
                <input type="text" name="" value={inputValue} onChange={handleChange} placeholder="New Item"/>
                <button type="submit">+</button>
            </form>
        </article>
    )
}


export default PendingList;