import { useContext, useEffect, useRef } from 'react'
import { Mycontext } from '../context/ContextProvider'

const TaskList = () => {
    const {TaskList , delTask , editTask} = useContext(Mycontext)
    const myscroll = useRef()
    useEffect(() => {
        // automatoic scroll 
        myscroll.current.scrollIntoView({ behavior: 'smooth' });     
    }, [TaskList])


    // function to delete on clicked item
    let handleOndel = (index)=>{
        let filtredItem = TaskList.filter((item , i)=> i != index)
        delTask(filtredItem)
    }

    // function to edit the task
    let handleOnedit = (index)=>{
        editTask(index)
    }
    
  return (
    <div className='w-[75vw] px-3 py-2 rounded mt-4 border shadow-lg h-1/3 overflow-y-auto bg-white text-black' id='noscroll'>
        { 
            TaskList.length>0 ? TaskList.map((item , index)=>{
                return <div className='flex justify-between border p-3 rounded mb-3 overflow-hidden' key={index}>
                    <span className='w-[59%] inline-block truncate'>{item}</span>
                    <div className=''>
                    <button className='inline-block px-4 py-1 bg-teal-300 text-white rounded mx-2' onClick={()=> handleOnedit(index)}>Edit</button>
                    <button className='inline-block px-4 py-1 bg-teal-300 text-white rounded' onClick={()=> handleOndel(index)}>Del</button>
                    </div>
                </div>
            }): 
            <div className='h-full w-full flex justify-center items-center font-bold text-4xl'>No Task Added...</div>
        }
        <div ref={myscroll}/>
    </div>
  )
}

export default TaskList