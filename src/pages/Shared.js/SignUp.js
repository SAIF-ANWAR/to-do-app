import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <div class="card-body">
                    <h2 class="card-title">Sign Up</h2>
                    <form>
                        <input type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs mt-2" />
                        <input type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs mt-2" />
                        <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs mt-2" />
                        <input className='btn btn-primary w-full mt-2' type="submit" value="Login" />
                    </form>
                    <small className='flex justify-between'><p>Already have an account? <Link to="/login" className='text-primary font-bold'> Log In</Link> </p></small>
                    <div class="divider">OR</div>
                    <button class="btn btn-outline btn-accent">Continue With Google</button>

                </div>
            </div>
        </div>
    );
};

export default SignUp;