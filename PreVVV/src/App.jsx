import React, { useEffect, useState } from 'react';

const App = () => {
    const getitem = () => JSON.parse(localStorage.getItem("Tasks")) || [];
    const setitems = () => localStorage.setItem("Tasks", JSON.stringify(Tasklist));
    const [userInput, setuserInput] = useState('');
    const [Tasklist, setTasklist] = useState(getitem);

    const handleonsubmit = (e) => {
        e.preventDefault();
        setTasklist([...Tasklist, userInput]);
        setuserInput('');
    };

    useEffect(() => {
        setitems();
    }, [Tasklist]);

    const handleondel = (indx) => {
        setTasklist(Tasklist.filter((_, ind) => indx !== ind));
    };

    const handleonedit = (indx) => {
        const userval = prompt("Enter the updated task");
        if (userval) {
            setTasklist(Tasklist.map((item, ind) => (indx === ind ? userval : item)));
        }
    };

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-900 text-white gap-6">
            <form onSubmit={handleonsubmit} className="flex gap-4">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setuserInput(e.target.value)}
                    className="border-2 border-emerald-400 bg-transparent px-4 py-2 rounded-md outline-none text-white"
                />
                <button type="submit" className="border-2 border-emerald-400 px-4 py-2 rounded-md hover:bg-emerald-400 hover:text-black">
                    Add Task
                </button>
            </form>
            <div className="border-2 border-emerald-400 h-80 w-96 p-4 overflow-y-auto flex flex-col gap-3 rounded-md">
                {Tasklist.length === 0 ? (
                    <div className="text-center text-gray-500">No tasks available...</div>
                ) : (
                    Tasklist.map((item, indx) => (
                        <div key={indx} className="flex justify-between items-center bg-emerald-500 text-black px-4 py-2 rounded-md">
                            <span>{item}</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleonedit(indx)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleondel(indx)}
                                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default App;
