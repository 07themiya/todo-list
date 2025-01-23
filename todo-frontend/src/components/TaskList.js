import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, markComplete, editTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          deleteTask={deleteTask}
          markComplete={markComplete}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default TaskList;