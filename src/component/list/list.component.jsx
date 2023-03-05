import React from "react";
import "./list.styles.css"
import { useState } from "react";
import PendingList from "../pending-list/pending-list.component";
import CompletedTask from "../completed-list/completed-task.component";

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
    let [removedTodos,setRemovedTodos] = useState([]);

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
        const removedTodo = todos.filter(todo => todo.activity === name );
        setRemovedTodos(
            [...removedTodos,...removedTodo]
        )
        const newTodo = todos.filter(todo => todo.activity !== name)
        setTodos(
            [...newTodo]
        )
        
    }

    const wait = (ms) => new Promise(resolve => setInterval(resolve,ms));

    return(
        <div className="container">
            <PendingList 
                todos={todos} 
                handleSubmit={handleSubmit} 
                handleChange={handleChange} 
                handleCheckedChange={handleCheckedChange} 
                inputValue={inputValue} 
            />
            <CompletedTask 
                removedTodos={removedTodos}
            />
        </div>
    )
}

export default List;