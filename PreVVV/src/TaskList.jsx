import React, { useContext } from 'react'
import { MyContext } from './context/ContextProvider'

const TaskList = () => {
    let {Alltask} = useContext(MyContext)
   
  return (
    <div>TaskList</div>
  )
}

export default TaskList