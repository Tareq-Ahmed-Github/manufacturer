import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from './../../firebase.init';
import Loading from './Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [
        signInWithGoogle,
        gUser,
        gLoading,
        gError] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        reset()
        signInWithEmailAndPassword(data?.email, data?.password)
    };
    let signInError;
    if (user || gUser) {
        navigate('/home')
    }
    if (loading || gLoading) {
        return <Loading />
    }
    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message}</small></p>
    }
    return (
        <div className=''>
            <div className="">
                <div className=" grid grid-cols-1 border w-80 mx-auto mt-10">
                    <h2 className="text-3xl font-bold my-5">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className=" border my-1 rounded grid grid-cols-1 mx-auto p-5"
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
                                {errors?.email?.type === 'required' && <span className="text-red-500">{errors?.email?.message}</span>}
                                {errors?.email?.type === 'pattern' && <span className="text-red-500">{errors?.email?.message}</span>}
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
                                {errors?.password?.type === 'required' && <span className="text-red-500">{errors?.password?.message}</span>}
                                {errors?.password?.type === 'minLength' && <span className="text-red-500">{errors?.password?.message}</span>}
                            </label>
                        </div>


                        <input className='cursor-pointer border font-semibold text-2xl rounded-lg px-20 p-4 bg-yellow-400 hover:bg-yellow-500' type="submit" value="Login" />
                        {signInError}
                    </form>
                    <p className='text-xl font-bold text-sky-700 py-0 hover:text-2xl mt-5'><small><Link className='text-primary' to="/register">Create A New Account</Link></small></p>
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

export default Login;