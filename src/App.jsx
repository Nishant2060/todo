import { useContext, useState } from "react"
import { Mycontext } from "./context/ContextProvider"
import TaskList from "./components/TaskList"

export default function App() {
  let { getTask } = useContext(Mycontext);
  const [userInput, setUserInput] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const trimmedInput = userInput.trim();
    if (!trimmedInput) return;
    // if (TaskList.includes(trimmedInput)) {
    //   setUserInput("");
    //   return getTask(userInput);
    // }
    getTask(userInput);
    setUserInput("");
  }
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center flex-col">

        <form className="shadow-lg p-5 border flex gap-4  rounded" onSubmit={handleOnSubmit}>
          <input value={userInput} type="text" className="rounded-md px-3 py-1 bg-transparent outline-none border " placeholder="Enter your Task..." onChange={(e) => setUserInput(e.target.value)} />
          <button className="bg-teal-600 px-3 py-1 active:bg-teal-700 rounded">Add Task</button>
        </form>
        <TaskList />
      </div>
    </>
  )
}