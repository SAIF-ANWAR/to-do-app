import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div >
            <h2 className='text-primary text-4xl font-bold text-center py-12'>Create Your Todo Lists</h2>
            <div className=' lg:w-52 mx-auto'>
                <Link to="/createlist" className='btn btn-primary '>Create Todo List</Link>
            </div>
        </div>
    );
};

export default Home;