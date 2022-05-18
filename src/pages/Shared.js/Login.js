import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';


const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (loading) {
        return <Loading></Loading>
    }
    if (user || guser) {
        navigate(from, { replace: true });
    }
    const handleLogIn = e => {
        e.preventDefault()
        const email = e.target.email?.value
        const password = e.target.password?.value
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <h2 className="card-title">Login</h2>
                    <form onSubmit={handleLogIn}>
                        <input type="email" placeholder="Your Email" name='email' className="input input-bordered w-full max-w-xs mt-2" />
                        <input type="password" placeholder="Password" name='password' className="input input-bordered w-full max-w-xs mt-2" />
                        <input className='btn btn-primary w-full mt-2' type="submit" value="Login" />
                    </form>
                    <small className='flex justify-between'><p>New to this site? <Link to="/signup" className='text-primary font-bold'> Sign Up</Link> </p></small>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent">Continue With Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;