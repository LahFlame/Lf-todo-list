import React from "react";
import "./completed-task.styles.css"


const CompletedTask = ({removedTodos}) => {
    
    return(
        <article className="completed">
            <h2>
                Completed Tasks
            </h2>
            <section>
                   <ul>
                        {
                    removedTodos.map(todo => 
                        <li>{todo.activity}</li>
                        )
                        }
                    </ul>
            </section>
        </article>
    )
}

export default CompletedTask;