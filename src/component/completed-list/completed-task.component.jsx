import React from "react";
import "./completed-task.styles.css"


const CompletedTask = ({removedTodos,handleReset}) => {
    
    return(
        <article className="completed">
            <h2 >
                Completed Tasks
            </h2>
            <section className="completed-section">
                   <ul>
                        {
                    removedTodos.map(todo => 
                        <li key={`${todo.activity} a`}>{todo.activity}</li>
                        )
                        }
                    </ul>
                    {
                        removedTodos.length ? <button onClick={handleReset}>-</button> : null
                    }
            </section>
        </article>
    )
}

export default CompletedTask;