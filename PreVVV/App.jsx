import React, { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const first = useRef();

  useEffect(() => {
    // Fixed: Corrected spelling of `behavior` (not `behaviour`)
    if (first.current) {
      first.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [task]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const trimmedInput = inputValue.trim();

    // Fixed: Redundant check for an empty string (`""`) removed
    if (!trimmedInput) return;

    if (task.includes(trimmedInput)) {
      setInputValue(""); // Task already exists; reset input
      return;
    }

    setTask((prevTask) => [...prevTask, trimmedInput]);

    setInputValue(""); // Clear the input after adding the task
  };

  const handleTaskRemove = (taskIndex) => {
    // New: Remove the task by index
    setTask((prevTask) => prevTask.filter((_, index) => index !== taskIndex));
  };

  const handleTaskComplete = (taskIndex) => {
    // New: Mark task as completed (Example: remove it or style it)
    console.log(`Task at index ${taskIndex} completed.`);
  };

  return (
    <div
      id="main_div"
      className="overflow-y-auto max-h-[70vh] m-5 border-2 border-solid border-gray-300"
    >
      <section className="todo-container flex flex-col justify-center items-center">
        <header>
          <h1 className="text-7xl">To-Do List</h1>
        </header>
        <section>
          <form className="flex flex-row" onSubmit={handleFormSubmit}>
            <div>
              <input
                type="text"
                className="todo-input h-14 w-[270px] px-4 text-3xl mb-7"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter a task"
              />
              <button
                type="submit"
                className="todo-btn cursor-pointer text-3xl h-14 px-5 ml-2"
              >
                +
              </button>
            </div>
          </form>
        </section>
        <div id="raju" className="mb-3 overflow-y-auto h-[50vh] border-white border-2 border-solid w-[48vw]">
        <section >
          <ul className="flex flex-col">
            {task.map((t, index) => (
              <li
                className="bg-slate-700 w-[335px] my-5 list-none flex justify-between items-center overflow-hidden break-words"
                key={index}
              >
                <span className="px-2 inline-block max-w-64 text-3xl truncate">
                  {t}
                </span>
                <div className="inline-block">
                  <button
                    className="cursor-pointer text-2xl inline-block mr-1"
                    onClick={() => handleTaskRemove(index)} // Fixed: Add onClick handler for removal
                  >
                    <ImCross />
                  </button>
                  <button
                    className="cursor-pointer text-2xl inline-block"
                    onClick={() => handleTaskComplete(index)} // Fixed: Add onClick handler for completion
                  >
                    <FaCheck />
                  </button>
                </div>
              </li>
            ))}
            {/* Added this div as a reference for scrolling */}
          </ul>
        </section>
        <div ref={first}></div>
        </div>
      </section>
    </div>
  );
};

export default App;
