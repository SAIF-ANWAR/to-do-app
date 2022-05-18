import React from 'react';

const ToDo = () => {
    return (
        <div>
            <h2 className='text-primary text-4xl font-bold text-center py-5'>You have added the following todo lists</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Complete ?</th>
                            <th>Delete ?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td><button className='btn btn-primary text-white'>Completed</button></td>
                            <td><button className='btn btn-primary text-white'>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ToDo;