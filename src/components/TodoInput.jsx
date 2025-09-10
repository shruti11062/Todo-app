import { useState } from "react";

function TodoInput({ addTask }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      addTask(input);
      setInput("");
    }
  };

  return (
    <div className="flex gap-2 p-4 bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-2xl shadow-lg">
      <input
        value={input}
        type="text"
        placeholder="Enter task..."
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-4 py-2 rounded-xl bg-white/40 dark:bg-black/40 backdrop-blur-md border-none focus:ring-2 focus:ring-purple-400 outline-none"
      />
      <button
        onClick={handleAdd}
        className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold shadow-md hover:shadow-xl transition"
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
