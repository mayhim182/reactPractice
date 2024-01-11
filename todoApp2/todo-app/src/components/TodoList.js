const { useState } = require("react");

function TodoList(){
    const [tasks, setTasks] = useState([
      {
        id:1,
        text:"Doctor's Appointment",
        completed:false
      },
      {
        id:2,
        text:'Meeting at school',
        completed:true,
      } 
    ]);


    const [text,setText] = useState('');
    function addTask(text){
        const newTask = {
            id:Date.now(),
            text,
            completed:false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }

    function deleteTask(id){
        setTasks(tasks.filter(task => task.id !== id));
    }

    
}