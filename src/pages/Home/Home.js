import React from 'react';
import CreateToDoList from '../ToDo/CreateToDoList';

const Home = () => {
    return (
        <div>
            <h2 className='text-primary text-4xl font-bold text-center py-12'>Create Your Todo Lists</h2>
            <CreateToDoList></CreateToDoList>
        </div>
    );
};

export default Home;