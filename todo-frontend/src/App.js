import React, { useState, useEffect } from "react";
import axios from "axios";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState("light");
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error.message);
    }
  };

  const addTask = async (title) => {
    try {
      const response = await axios.post("http://localhost:5000/api/tasks", { title });
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Error adding task:", error.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error.message);
    }
  };

  const markComplete = async (id, completed) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/tasks/${id}`, { completed });
      setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
    } catch (error) {
      console.error("Error updating task:", error.message);
    }
  };

  const editTask = async (id, newTitle) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/tasks/${id}`, { title: newTitle });
      setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
    } catch (error) {
      console.error("Error editing task:", error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Filter tasks based on the search query
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <button className="toggle-theme" onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update search query
        className="search-bar"
      />
      <AddTask addTask={addTask} />
      <h2>Active Tasks</h2>
      <TaskList
        tasks={filteredTasks.filter((task) => !task.completed)}
        deleteTask={deleteTask}
        markComplete={markComplete}
        editTask={editTask}
      />
      <h2>Completed Tasks</h2>
      <TaskList
        tasks={filteredTasks.filter((task) => task.completed)}
        deleteTask={deleteTask}
        markComplete={markComplete}
        editTask={editTask}
      />
    </div>
  );
};

export default App;
