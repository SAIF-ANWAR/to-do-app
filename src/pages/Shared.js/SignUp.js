import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from './Loading';

const SignUp = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    if (user || guser) {
        navigate('/todo')
    }
    if (loading) {
        return <Loading></Loading>
    }
    const handleSignUp = e => {
        e.preventDefault()
        const email = e.target.email?.value
        const password = e.target.password?.value
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <h2 className="card-title">Sign Up</h2>
                    <form onSubmit={handleSignUp}>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs mt-2" />
                        <input type="email" placeholder="Your Email" name='email' className="input input-bordered w-full max-w-xs mt-2" />
                        <input type="password" placeholder="Password" name='password' className="input input-bordered w-full max-w-xs mt-2" />
                        <input type="password" placeholder="confirm-password" name='confirmPassword' className="input input-bordered w-full max-w-xs mt-2" />
                        <input className='btn btn-primary w-full mt-2' type="submit" value="Sign Up" />
                    </form>
                    <small className='flex justify-between'><p>Already have an account? <Link to="/login" className='text-primary font-bold'> Log In</Link> </p></small>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent">Continue With Google</button>

                </div>
            </div>
        </div>
    );
};

export default SignUp;