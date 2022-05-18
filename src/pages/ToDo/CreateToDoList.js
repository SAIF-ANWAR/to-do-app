import React from 'react';

const CreateToDoList = () => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
            <div class="card-body">
                <form className='flex flex-col'>
                    <label htmlFor="Task Name" className='mb-2'>Task Name</label>
                    <input type="text" name="title" id="" class="input input-bordered w-50 max-w-xs" />
                    <label htmlFor="Task Name" className='mt-5 mb-2'>Description</label>
                    <textarea type="text" name="title" id="" class="input input-bordered w-50 max-w-xs" />
                    <input type="submit" className='btn btn-primary mt-3 w-48 text-white' value="Add task" />
                </form>

            </div>
        </div>
    );
};

export default CreateToDoList;