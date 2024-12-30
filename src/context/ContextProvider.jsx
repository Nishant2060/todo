import React, { useState } from 'react'
import { createContext } from 'react'

export const Mycontext = createContext()

const ContextProvider = ({ children }) => {
    const [TaskList, setTaskList] = useState([])

    // get the task from the App.jsx form
    const getTask = (Task) => {
        if (TaskList.includes(Task)) return;
        setTaskList([...TaskList, Task])
    }
    // get the items from Tasklist => handleOndel function returns Arry
    const delTask = (filtredItem) => {
        setTaskList(filtredItem)
    }

    // get the index of clicked item  from Tasklist => handleOnEdit function 
    const editTask = (index) => {
        let newTask = window.prompt(TaskList[index])
        let Tasks = TaskList.map((item , i)=> i==index ? newTask  : item )
        setTaskList(Tasks)
        
    }
    
    return (

        <Mycontext.Provider value={{ getTask, TaskList, delTask, editTask }}>
            {children}
        </Mycontext.Provider>
    )
}

export default ContextProvider