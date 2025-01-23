# To-Do List Application

## Overview
This is a full-stack To-Do List application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application allows users to add, edit, delete, and mark tasks as complete or incomplete. Tasks are displayed in two sections: Active Tasks and Completed Tasks. A Dark Mode toggle is also included for better user experience.

---

## Features
- **Add Tasks**: Users can add new tasks via a simple input form.
- **Edit Tasks**: Inline editing of task titles.
- **Mark Tasks as Complete/Incomplete**: Toggle the completion status of a task using a checkbox.
- **Delete Tasks**: Remove tasks permanently from the list.
- **Active and Completed Tasks**: Tasks are categorized into two sections for easy management.
- **Dark Mode**: Toggle between light and dark themes for a customizable appearance.
- **Search Tasks**: Filter tasks by title using a search bar.

---

## Setup and Installation

### Prerequisites
- Node.js (v16 or later)
- MongoDB (Local or MongoDB Atlas)
- NPM or Yarn

### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd todo-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend folder and add the following:
   ```env
   MONGO_URI=<your-mongodb-connection-string>
   PORT=5000
   ```
4. Start the server:
   ```bash
   node server.js
   ```
5. Verify the backend is running at `http://localhost:5000`.

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd todo-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
4. Open the application in your browser at `http://localhost:3000`.

---

## Optional Features Implemented

### 1. **Dark Mode**
   - Users can toggle between light and dark themes for improved usability.
   - Dark Mode preference is stored in the browser's local storage for persistence across sessions.

### 2. **Categorized Tasks**
   - Tasks are displayed in two sections: Active Tasks and Completed Tasks.
   - Active tasks have a checkbox to mark them as complete.
   - Completed tasks can be toggled back to active if needed.

### 3. **Search Bar**
   - A search bar allows users to dynamically filter tasks by title.
   - The filtered tasks are displayed in real-time as the user types in the search query.

---

## How to Use
1. Add tasks using the input form.
2. Mark tasks as complete or incomplete using the checkbox.
3. Edit task titles inline by clicking the "Edit" button.
4. Delete tasks using the "Delete" button.
5. Toggle Dark Mode using the switch in the header.

---

## Technologies Used
- **Frontend**: React.js (with Axios for API calls)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Styling**: CSS

---

## Folder Structure
```
todo-list/
├── todo-backend/
│   ├── models/
│   │   └── taskModel.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── server.js
│   ├── .env
│   └── package.json
├── todo-frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddTask.js
│   │   │   ├── TaskList.js
│   │   │   └── TaskItem.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── public/
│   ├── .env
│   └── package.json
```

