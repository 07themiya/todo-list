import React, { useState } from "react";

const TaskItem = ({ task, deleteTask, markComplete, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task._id, newTitle);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => markComplete(task._id, !task.completed)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.title}
        </span>
      )}
      <button className={isEditing ? "save" : "edit"} onClick={handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button className="delete" onClick={() => deleteTask(task._id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
