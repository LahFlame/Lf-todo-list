import React from "react";
import "./list.styles.css"
import { useState } from "react";
import ListItem from "../list-item/list-item.component";

const List = () => {
    const [todos,setTodos] = useState([
        {
            activity: "breakfast",
            id: 1
        },
        {
            activity: "bathe",
            id: 2
        },
        {
            activity: "drink",
            id: 3
        }
    ]);
    let [inputValue,setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(
            inputValue = e.target.value
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos(
            [...todos,
                {
                    activity: inputValue,
                    id: inputValue
                }
            ]
        )
        setInputValue(
            inputValue = ""
        )
    }
    const handleCheckedChange = async(e) => {
        const name = e.target.value;
        await wait(1000)
        const newTodo = todos.filter(todo => todo.activity !== name)
        console.log(newTodo);
        setTodos(
            [...newTodo]
        )
    }

    const wait = (ms) => new Promise(resolve => setInterval(resolve,ms));

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

export default List;