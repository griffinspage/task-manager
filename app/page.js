"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add Task
  const addTask = () => {
    if (taskInput.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setTaskInput("");
  };

  // Toggle Completion
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    setTasks(updatedTasks);
  };

  // Delete Task
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(
      (task) => task.id !== id
    );

    setTasks(filteredTasks);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-blue-500 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-3">
            Task Manager
          </h1>

          <p className="text-blue-100 text-lg">
            Organize your work beautifully
          </p>
        </div>

        {/* Input Section */}
        <div className="flex gap-4 mb-8">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={taskInput}
            onChange={(e) =>
              setTaskInput(e.target.value)
            }
            onKeyDown={(e) =>
              e.key === "Enter" && addTask()
            }
            className="flex-1 px-5 py-4 rounded-2xl bg-white/20 text-white placeholder-blue-100 outline-none border border-white/20 focus:border-white transition-all duration-300"
          />

          <button
            onClick={addTask}
            className="px-6 py-4 bg-white text-blue-900 rounded-2xl font-semibold hover:scale-105 hover:bg-blue-100 transition-all duration-300 shadow-lg"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <div className="space-y-4">
          {tasks.length === 0 ? (
            <div className="text-center py-10 text-blue-100">
              No tasks added yet
            </div>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between bg-white/15 border border-white/10 backdrop-blur-md rounded-2xl px-5 py-4 hover:bg-white/20 transition-all duration-300"
              >
                {/* Task Text */}
                <div
                  onClick={() =>
                    toggleTask(task.id)
                  }
                  className={`flex-1 cursor-pointer text-lg transition-all duration-300 ${
                    task.completed
                      ? "line-through text-blue-200 opacity-70"
                      : "text-white"
                  }`}
                >
                  {task.text}
                </div>

                {/* Delete Button */}
                <button
                  onClick={() =>
                    deleteTask(task.id)
                  }
                  className="ml-4 px-4 py-2 rounded-xl bg-red-500/80 text-white hover:bg-red-600 transition-all duration-300"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-blue-100 text-sm">
          {tasks.length} task
          {tasks.length !== 1 && "s"} total
        </div>
      </div>
    </main>
  );
}