import { useState } from "react";

function ToDoItem({ task, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      <div className="task-text">
        {task.completed ? "✅ " : "⬜ "}{" "}
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <span>{task.text}</span>
        )}
      </div>

      <div className="task-buttons">
        {isEditing ? (
          <button className="save-btn" onClick={handleEdit}>
            Save
          </button>
        ) : (
          <>
            <button
              className={task.completed ? "undo-btn" : "complete-btn"}
              onClick={() => toggleComplete(task.id)}
            >
              {task.completed ? "Undo" : "Mark as Complete"}
            </button>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ToDoItem;
