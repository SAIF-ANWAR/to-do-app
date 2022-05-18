import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ToDo = () => {
    const [user, loading, error] = useAuthState(auth);
    const [todo, myTodo] = useState([])
    useEffect(() => {
        const email = user?.email
        fetch(`http://localhost:5000/tasks?email=${email}`)
            .then(res => res.json())
            .then(data => myTodo(data))
    }, [user])
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure?")
        if (proceed) {
            fetch(`https://powerful-waters-44296.herokuapp.com/tasks/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = todo.filter(task => task._id !== id)
                    myTodo(remaining)
                })
        }

    }

    const handleCompleted = (id) => {
        const url = `https://powerful-waters-44296.herokuapp.com/tasks/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <div className='px-12'>
            <h2 className='text-primary text-4xl font-bold text-center py-5'>You have added the following todo lists : {todo?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Complete ?</th>
                            <th>Delete ?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todo.map(task => <tr>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td><button onClick={() => handleCompleted(task._id)} className='btn btn-primary text-white'>Completed</button></td>
                                <td><button onClick={() => handleDelete(task._id)} className='btn btn-primary text-white'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ToDo;