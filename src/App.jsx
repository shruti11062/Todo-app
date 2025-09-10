import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Load tasks from localStorage
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks") || [];
    console.log(tasks);
    if (storedTasks) {
      try {
        setTasks(JSON.parse(storedTasks));
      } catch {
        setTasks([]);
      }
    }
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }else{
       localStorage.removeItem("tasks")
    }
  }, [tasks]);

  function addTask(newTask) {
    const task = { text: newTask, completed: false };
    setTasks([...tasks, task]);
     console.log("After add, newTasks:", task);
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
    
  }

  function toggleComplete(index) {
    const updatedTask = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTask);
  }

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-start p-6 transition-all ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white"
    :"bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 text text-blue"

      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-xl mb-6">
        <h1 className="text-3xl font-bold drop-shadow-lg">✨ Todo App</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-2xl backdrop-blur-md bg-white/20 hover:bg-white/40 dark:bg-black/20 dark:hover:bg-black/40 transition"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      {/* Input Section */}
      <div className="w-full max-w-xl mb-6">
        <TodoInput addTask={addTask} />
      </div>

      {/* Task List */}
      <div className="w-full max-w-xl">
        <TodoList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
}

export default App;
