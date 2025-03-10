import { useState } from "react";
import Header from "./components/Header";
import ToDoHeader from "./components/ToDoHeader";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    const confirmDelete = window.confirm("Do you want to delete this task?");
    if (confirmDelete) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  return (
    <>
      <Header />
      <div className="container">
        <ToDoHeader addTask={addTask} />
      </div>
      <div className="task-container">
        <ToDoList
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
    </>
  );
}

export default App;