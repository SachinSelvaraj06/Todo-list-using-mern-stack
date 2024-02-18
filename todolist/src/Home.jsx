

import { faPlus, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import 'reactjs-popup/dist/index.css';
import './App.css';

function Home() {
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(0);
    const [editedText, setEditedText] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleEdit = (id) => {
        setEditId(id);
        const editedTodo = todos.find(todo => todo._id === id);
        setEditedText(editedTodo.task);
    };
    const handleCompleteEdit = (id) => {
        axios.put('http://localhost:3001/update/'+id+'/toggleDone')
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

    const handleUpdateText = (e) => {
        setEditedText(e.target.value);
    };

   



    const handleSave = () => {
        axios.put('http://localhost:3001/update/' + editId+'/updateTask', { task: editedText })
            .then(result => {
                setEditId(0); // Reset editId after saving
                setEditedText(""); // Clear editedText after saving
                location.reload();
            })
            .catch(err => console.log(err));
    };

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' + id)
            .then(result => {
                location.reload();
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='home'>
            <h2 style={{ color: "black" }}>TODO LIST</h2>
            <Create />
            <br />
            {
                todos.length === 0
                    ?
                    <div><h2>No Record</h2></div>
                    :
                    todos.map(todo => (
                        <div className='task' key={todo._id}>
                            {editId === todo._id ? (
                                <div className='edit-task'>
                                    <input style={{ backgroundColor: "black", color: "red", width: "261px", height: "30px", borderColor:"white", color: "white" }} type="text" value={editedText} onChange={handleUpdateText} />
                                    <button style={{ backgroundColor: "black", height: "20px", color: "white", borderStyle: "none", cursor: "pointer" }}  onClick={handleSave}>
                                    <FontAwesomeIcon icon={faUpload} size={'1x'} />
                                    
                                    </button>
                                </div>
                            ) : (
                                <div className='checkbox' onClick={() => handleCompleteEdit(todo._id)}>
                                    {todo.done ?
                                        <BsFillCheckCircleFill className='icon' />
                                        : <BsCircleFill className='icon' />
                                    }
                                    <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                                </div>
                            )}
                            <div>
                                <span>
                                    <BsPencilSquare className='icon'
                                        onClick={() => handleEdit(todo._id)} />
                                </span>
                                <span>
                                    <BsFillTrashFill className='icon'
                                        onClick={() => handleDelete(todo._id)} />
                                </span>
                            </div>
                        </div>
                    ))
            }
        </div>
    );
}

function updateTask(taskId, updatedText) {
    axios.put(`http://localhost:3001/update/${taskId}`, { task: updatedText })
        .then(result => {
            console.log("Task updated successfully:", result.data);
            
        })
        .catch(error => {
            console.error("Error updating task:", error);
            
        });
}

function Create() {
    const [task, setTask] = useState("");

    const handleAdd = () => {
        axios.post('http://localhost:3001/add', { task: task })
            .then(result => {
                location.reload();
            })
            .catch(error => console.log(error));
    };

    return (
        <div className='create_form'>
            <input type="text" value={task} style={{ backgroundColor: "black", color: "red", width: "315px", height: "32px", borderStyle: "none", color: "white" }} name="" id="task_text" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} />
            <button type="button" style={{ backgroundColor: "black", height: "34px", color: "white", borderStyle: "none", cursor: "pointer" }} onClick={handleAdd}>
                <FontAwesomeIcon icon={faPlus} size={'1x'} />
                <span style={{ marginLeft: '10px' }}></span>
            </button>
        </div>
    );
}

export default Home;
