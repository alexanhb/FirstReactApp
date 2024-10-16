import React from "react";

function ToDoForm(props){
    const [formData, setFormData] = React.useState({task: "", date: ""});

    function changeHandler(event){
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    function submitHandler(event){
        event.preventDefault();
        props.onAdd(formData);
        setFormData({task: "", date: ""});
    };

    return (
        <div>
            <h1>Todo list</h1>
            <form onSubmit={submitHandler}>
                <input type="text" name="task" placeholder="Task" value={formData.task} onChange={changeHandler}/>
                <input type="text" name="date" placeholder="Date" value={formData.date} onChange={changeHandler}/>
                <button>Submit Task</button>
            </form>
        </div>
    )
}

function ListOfTasks(props){
    return(
        <ul>
            {props.allTasks.map((t) => (
                t.task = t.task.toLowerCase(),
                <li key={t.task}>
                    <span>Task -<b>{t.task},</b>by -<b>{t.date}</b></span>
                </li>
            ))}
        </ul>
    );
}

function TaskFormOutput(){
    const [allTasks, setAllTasks] = React.useState([]);

    function addTask(task){
        setAllTasks([...allTasks, task]);
    }

    return (
        <div>
            <ToDoForm onAdd={addTask}/>
            <ListOfTasks allTasks={allTasks}/>
        </div>
    )

}

export default TaskFormOutput;