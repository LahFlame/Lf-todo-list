import React from "react";
import "./pending-list.styles.css"
import ListItem from "../list-item/list-item.component";


const PendingList = ({todos,handleChange,handleCheckedChange,handleSubmit,inputValue}) => {
    return(
        <article className="pending">
            <h2>Pending Tasks</h2>
            {
                <section>
                    {
                        todos.map((todo) => <ListItem key={todo.id} todo={todo} handleCheckedChange={handleCheckedChange} />)
                    }
                </section>        
            }
            <form onSubmit={handleSubmit}>
                <div className="item">
                    <input type="text" name="" value={inputValue} onChange={handleChange} placeholder="Add New Item"/>
                    <button type="submit">+</button>
                </div>
            </form>
        </article>
    )
}


export default PendingList;