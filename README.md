# MERN To-Do List Web Application
MERN To-Do List Web App - Backend (Node.js + Express + MongoDB)

Welcome to my **MERN Stack To-Do List Web App**, a complete task management system built with modern web technologies. This app helps users organize daily tasks with ease — add, mark done, update, or delete tasks anytime.

---

## 🚀 Live Demo

- Frontend: [https://your-frontend-url.vercel.app](https://todo-app-six-gamma-99.vercel.app)  
- Backend API: ([https://your-backend-url.onrender.com/api/todos](https://todo-app-tcq8.onrender.com/api/todos))

---

## 🌟 Key Features

- Add new tasks with a simple form  
- View all your tasks in a clean, responsive list  
- Mark tasks as completed with a click  
- Delete tasks when finished  
- Real-time sync between frontend and backend  
- Mobile-friendly and responsive UI  
- Environment variables keep secrets safe  
- Fully deployed on Vercel (frontend) and Render (backend)  

---

## 🛠️ Technology Stack

| Layer     | Technology                |
| --------- | -------------------------|
| Frontend  | React.js, CSS             |
| Backend   | Node.js, Express.js       |
| Database  | MongoDB Atlas             |
| Deployment| Vercel (frontend), Render (backend) |

---

## 🧑‍🏫 How This Project Works — Explained Like You're 10!

Imagine you have a magic notebook that remembers all your tasks forever, even if you close it and open it later. This project is like that magic notebook, but on the internet.

- The **React frontend** is the part you see and use in your browser. It shows you the list of tasks and lets you add or check them off.
- The **Node.js backend** is the helper who listens to your requests from the frontend and talks to the magic notebook to save, update, or delete tasks.
- The **MongoDB database** is the magic notebook that stores all your tasks safely in the cloud.
- When you add a task, the frontend sends a message to the backend, which saves it in the notebook. When you open the app later, it reads from the notebook and shows your tasks again.

---

## 🏗️ How To Run This Project Locally (Step by Step)

1. **Download the code**  
   Open your terminal and type:
git clone https://github.com/Shruti-Chauhan01/todo-app.git
cd todo-app

2. **Start the backend**  
cd server
npm install


Create a file called `.env` in the `server` folder, and write:
MONGO_URI=MONGO_URI=mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER>.mongodb.net/<DBNAME>?retryWrites=true&w=majority
PORT=5000

Then run:
npm start

3. **Start the frontend**  
Open a new terminal tab/window and type:
cd client
npm install

perl
Copy code
Create a file called `.env` in the `client` folder, and write:
REACT_APP_API_URL=[http://localhost:5000/api/todos](https://todo-app-tcq8.onrender.com/api/todos)

Then run:
npm start

Open your browser and go to `http://localhost:3000` to use the app.

---

## 🔧 How the Code Works (Overview)

- In the frontend React files (`src/components`), you’ll find components that let you add tasks and display the list.
- The frontend talks to backend API endpoints using Axios, with URLs stored safely in `.env`.
- The backend Express routes (in `server/routes/todoRoutes.js`) handle requests like adding, fetching, updating, or deleting tasks.
- MongoDB stores your tasks in collections that persist across sessions and devices.

---

## 🔐 Environment Variables (Secrets Made Simple)

To keep your app safe and flexible:

- Your MongoDB connection string is stored in the backend `.env` file — so it’s never shown publicly.
- The frontend `.env` file stores the API URL, so you can easily switch between your local and deployed backend without changing code.

---

## 👩‍💻 Contribution

Feel free to suggest improvements or report bugs by opening issues or pull requests. Your feedback helps make this project better!

---

## 🙏 Thank You!

Thank you for checking out my MERN To-Do App! Hope it helps you learn or organize your tasks better. Happy coding! 🚀

---

## 📫 Contact Me

- Email: shrutichauhan0086@gmail.com 
- LinkedIn: [your-linkedin-profile](https://www.linkedin.com/in/shruti-chauhan-35b082338/)

---
