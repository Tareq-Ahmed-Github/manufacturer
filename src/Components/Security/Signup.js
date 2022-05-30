import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from './Loading';
import auth from './../../firebase.init';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);
    const [
        signInWithGoogle,
        gUser,
        gLoading,
        gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        reset()
        console.log(data)
        createUserWithEmailAndPassword(data.email, data.password)
    };
    if (user || gUser) {
        navigate('/home')
    }
    if (loading || gLoading) {
        return <Loading />
    }
    let signInError;
    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message}</small></p>
    }
    return (
        <div className=''>
            <div className="">
                <div className="grid grid-cols-1 border w-80 mx-auto my-40">
                    <h2 className="text-3xl font-bold my-5">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="">
                            <input
                                type="name"
                                placeholder="Your Name"
                                className="border my-1 rounded grid grid-cols-1 mx-auto p-5"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>

                        <div className="">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="border my-1 rounded grid grid-cols-1 mx-auto p-5"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="">
                            <input
                                type="password"
                                placeholder="Password"
                                className="border my-1 rounded grid grid-cols-1 mx-auto p-5"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        <input className='cursor-pointer border font-semibold text-2xl rounded-lg px-20 p-4 bg-yellow-400 hover:bg-yellow-500' type="submit" value="Sign Up" />
                        {signInError}
                    </form>
                    <p className='font-bold mt-5'>Already have an Account?</p>
                    <p className='text-xl font-bold text-sky-700 py-0 hover:text-2xl '><small><Link className='text-primary' to="/login">Please Log In</Link></small></p>
                    <div className="font-semibold text-slate-400">Or</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="border w-48 mx-auto my-5 py-1 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700"
                    >Continue with Google</button>
                </div>
            </div>
        </div >
    );
};

export default Signup;