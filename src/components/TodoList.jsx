function TodoList({ tasks, deleteTask, toggleComplete }) {
  return (
    <ul className="space-y-3">
      {tasks.map((task, i) => (
        <li
          key={i}
          className="flex items-center justify-between p-4 bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-2xl shadow-md"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(i)}
              className="w-5 h-5 accent-purple-500"
            />
            <span
              className={`text-lg ${
                task.completed
                  ? "line-through text-gray-500 dark:text-gray-400"
                  : ""
              }`}
            >
              {task.text}
            </span>
          </div>
          <button
            onClick={() => deleteTask(i)}
            className="px-3 py-1 rounded-lg bg-red-500/80 text-white hover:bg-red-600 transition"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
