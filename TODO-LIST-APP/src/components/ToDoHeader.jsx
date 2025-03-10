import { useState } from "react";

function ToDoHeader({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === "") {
      alert("Please add a task before pressing ENTER!");
      return;
    };
    addTask(taskText);
    setTaskText("");
  };

  return (
    <header className="task-header">
      <h2>To-Do List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button type="submit" id="addbtn">Add</button>
      </form>
    </header>
  );
}

export default ToDoHeader;
