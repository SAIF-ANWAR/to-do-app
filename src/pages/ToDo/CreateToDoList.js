import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const CreateToDoList = () => {
    const [user] = useAuthState(auth)
    const handleAddLists = (event) => {
        event.preventDefault()
        const title = event.target.title?.value
        const description = event.target.description?.value
        const email = event.target.email?.value
        const task = { title, description, user: email }
        console.log(task)
        fetch(`https://powerful-waters-44296.herokuapp.com/tasks`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        event.target.reset()
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <form onSubmit={handleAddLists} className='flex flex-col'>
                    <label htmlFor="Task Name" className='mb-2'>Task Name</label>
                    <input type="text" name="title" id="" className="input input-bordered w-50 max-w-xs" />
                    <label htmlFor="Task Name" className='mt-5 mb-2'>Description</label>
                    <textarea type="text" name="description" id="" className="input input-bordered w-50 max-w-xs" />
                    <label htmlFor="Your Email " className='mt-5 mb-2'>Your Email</label>
                    <input type="email" value={user?.email} name="email" id="" className="input input-bordered w-50 max-w-xs" />
                    <input type="submit" className='btn btn-primary mt-3 w-48 text-white' value="Add task" />
                </form>

            </div>
        </div>
    );
};

export default CreateToDoList;