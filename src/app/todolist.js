"use client"
import React,{useState} from "react";
import { v4 as uuid } from "uuid";

export const TodoList = () => {
    //initialising states
    const [task,setTask] = useState([]);
    const [inputVal, setInputVal] = useState("");
    const [searchVal, setSearchVal] = useState("");
    
    // input and search handler functions
    const inputHandler = event => setInputVal(event.target.value);
    const searchHandler = event => setSearchVal(event.target.value);
    
    // function to create a task
    const createTask = (event) => {
        event.preventDefault();

        if(inputVal!=""){
            const newTask = {
                id: uuid(),
                taskName: inputVal,
                completed : false
            }
            setTask([...task, newTask]);
            setInputVal("");
        }
    }

    //mark as complete function
    const markAsCompleted = (taskId) => {
        const updatedTaskList = task.map( element => element.id===taskId ? {...element,completed:true}: element);
        setTask(updatedTaskList);
        
    }

    // function to delete task
    const deleteTask = (taskId,e) => {
        const updatedTaskList = task.filter( element => element.id !== taskId );
        setTask(updatedTaskList);
    }

    //applying the above filters, and making the search functionality
    const filteredTasks = task.filter(element => element.taskName?.toLowerCase().includes(searchVal?.toLowerCase()));
    
    return(
        <div className="h-full text-center bg-[#0A5783] py-10">
            <h1 className="text-6xl font-bold text-white">ToDo List</h1>
            <form className="flex flex-col justify-center items-center" onSubmit={createTask}>
                <input
                type="text"
                placeholder="Add a task"
                value={inputVal}
                onChange={inputHandler}
                className="my-4 py-4 w-96 rounded-lg text-center"
                />
                <button className="w-44 bg-emerald-500 py-2 rounded-xl text-slate-100 font-semibold text-lg transition-all hover:scale-110" type="submit"> Add task</button>
                <input
                type="text"
                value={searchVal}
                placeholder="Search"
                onChange={searchHandler}
                className="my-4 py-4 w-96 rounded-lg text-center text-black"
                />
            </form>
            <div className="flex flex-wrap gap-4 justify-center items-center py-20">
                {filteredTasks.map(item => (
                    <div className="flex flex-col w-96 py-10 rounded-3xl bg-[#063c5a]" key={item.id}>
                        <h1 className="text-5xl text-white">{item.taskName}</h1>
                        <button className="mt-10 text-xl font-medium " onClick={()=>markAsCompleted(item.id)}>
                        {item.completed ? <span className="text-green-300">Completed</span> : <span className="text-amber-200">Mark as Complete</span>}
                        </button>
                        <button className="mt-4 text-xl font-medium text-rose-500" onClick={() => deleteTask(item.id)}>Delete</button>
                    </div>
                ))}
            </div>
            <footer className="text-white text-lg text-center">Made with love by Gautam</footer>
        </div>
    )
}