import React, { useContext, useRef, useState } from 'react';
import image from '../../../../assets/others//authentication2.png'
import { CiFacebook } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/UseAuth/UseAuth';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { data } from 'autoprefixer';
const Register = () => {


    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"
    const { createUser, googleAuth, githubAuth , upadateUserProfile} = useAuth();
    const {register , formState : {errors}} = useForm()
   const axiosPublic = useAxiosPublic();
    // const onSubmit = data => {
    //     console.log("data", data);
    //     createUser(data.email, data.password)
    //         .then(result => {
    //             const loggedUser = result.user;
    //             console.log(loggedUser);
    //             navigate(from, { replace: true })

    //         })
    //         .catch(error => {
    //             console.error('Registration error:', error);
    //         });


    // }
      const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log( name,email, password);
        createUser(email,password)
               .then(result => {
                   const loggedUser = result.user;
                   console.log(loggedUser)
                    upadateUserProfile(name)
                    .then(() => {
                        const userInfo = {
                           name: name,
                           email : email
                        }
                        axiosPublic.post("/users" , userInfo)
                        .then(res => {
                            console.log( "Sent To Datebase" ,res.data);
                        })
                    })
              
                   toast.success("Successfully Signup")
                   navigate(from, { replace: true });

               })
               .catch(error => {
                   console.error('Registration error:', error);
               });
    }
    const handleGoogle = () => {
        googleAuth()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);
                const userInfo = {
                    email : result.user?.email,
                    name :  result.user?.displayName
                } 
                axiosPublic.post("/users", userInfo)
                .then(res => {
                    console.log(res.data);
                    if(res.data.insertedId){
                toast.success("Successfully Signup")
                        
                    }
                })
                 

                navigate(from, { replace: true })
            })
    }
    const handleGithub = () => {
        githubAuth()
            .then(result => {
                const githubUser = result.user;
                console.log(githubUser);
                toast.success("Successfully Signup")

                navigate(from, { replace: true })
            })
    }

    return (
        <div>
            <div style={{
                backgroundImage: "url(https://i.ibb.co.com/ZWzZxx6/authentication.png)",
            }} className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left ">
                        <img src={image} className='ml-28 hidden md:block ' alt="" />
                    </div>
                    <div className=" w-full max-w-sm ">
                        <p className='text-2xl font-bold text-center'>Register</p>
                        <form onSubmit={handleRegister} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text" name='name' {...register("name", { required: true })} placeholder="Type here" className="p-2 px-3" />
                                {errors.name && <span className=''>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold " > Email</span>
                                </label>
                                <input type="email" name='email'{...register("email", { required: true })} placeholder="Type here" className="p-2 px-3" />
                                {errors.email && <span className=''>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Enter your password</span>
                                </label>
                                <input type="password" name='password'{...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^[A-Za-z]+$/i },)} placeholder="password" className="p-2 px-3" />
                                {errors.password?.type === "required" && <span className=''>This field is required</span>}
                                {errors.password?.type === "minLength" && <span className=''> Password Must be 6 Characters</span>}


                            </div>
                            <button className="btn text-white bg-orange-300">SignUp</button>


                            <p className='text-orange-300  font-bold text-center '>Already registered? <Link to={"/login"}>Go to log in</Link></p>
                            <p className='text-center'>Or sign in with</p>
                            <div className='text-center justify-center items-center flex gap-9 mt-3  text-2xl '>
                                <FaFacebook />
                                <button onClick={handleGoogle}>    < FcGoogle /></button>

                                <button onClick={handleGithub}>  <FaGithub /></button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;