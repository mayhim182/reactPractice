import React from "react";

function TodoItem({task, deleteTask, toggleCompleted}){
    function handleChange(){
        toggleCompleted(task.id);
    }

    return (
        <div>
            
        </div>
    )
}