## To-Do List Application using React.js, MongoDB, and Node.js

This is a simple To-Do List application built using React.js for the frontend, MongoDB for the database, and Node.js for the backend. The application allows users to create, edit, mark as done, and delete tasks.

### Features:

- **Add Task**: Users can add tasks to the to-do list.
- **Edit Task**: Users can edit existing tasks.
- **Mark as Done**: Users can mark tasks as done by clicking on the checkbox.
- **Delete Task**: Users can delete tasks from the list.

### Technologies Used:

- **React.js**: A JavaScript library for building user interfaces.
- **MongoDB**: A NoSQL database used for storing task data.
- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express.js**: A web application framework for Node.js used to build the RESTful API.
- **axios**: A promise-based HTTP client used for making requests to the backend API.
- **FontAwesome**: A library of scalable vector icons used for displaying icons in the UI.

### Prerequisites:

- Node.js and npm installed on your machine.
- MongoDB installed and running locally or access to a MongoDB instance.

### Setup Instructions:

1. Clone the repository to your local machine:

```
git clone <repository-url>
```

2. Navigate to the project directory:

```
cd <project-directory>
```

3. Install dependencies for both frontend and backend:

```
cd client
npm install

cd ..
cd server
npm install
```

4. Start the backend server:

```
cd server
node index.js
```

5. Start the frontend development server:

```
cd client
npm start
```

6. Open your browser and visit `http://localhost:3000` to view the application.

### Directory Structure:

- **client**: Contains the frontend code built using React.js.
- **server**: Contains the backend code built using Node.js and Express.js.
- **Models**: Contains the Mongoose model for Todo tasks.

### API Endpoints:

- **GET /get**: Retrieves all tasks from the database.
- **PUT /update/:id/toggleDone**: Marks a task as done.
- **PUT /update/:id/updateTask**: Updates the task text.
- **DELETE /delete/:id**: Deletes a task.
- **POST /add**: Adds a new task.

### Database Configuration:

- The application is configured to use a MongoDB database running locally on `mongodb://127.0.0.1:27017/test`. You can modify the connection string in `index.js` file inside the `server` directory to connect to your MongoDB instance.

### Note:

- This is a basic implementation of a To-Do List application. Additional features such as user authentication, task categories, or due dates can be added for more functionality.

### Author:

SACHIN S

### License:

This project is licensed under the [MIT License](LICENSE).
