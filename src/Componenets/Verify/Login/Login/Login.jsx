import React, { useRef, useState } from 'react';
import image from '../../../../assets/others//authentication2.png'
import { CiFacebook } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from 'react';
const Login = () => {
    const capcharef = useRef(null)
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(8)
    }, [])
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    const handleValidateCapcha = () => {
        const user_capcha_value = capcharef.current.value;
        if (validateCaptcha(user_capcha_value) == true) {
            setDisabled(false)
        }
        else {
               setDisabled(true)
        }
    }

    return (
        <div>
            <div style={{
                backgroundImage: "url(https://i.ibb.co.com/ZWzZxx6/authentication.png)",
            }} className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=" w-full max-w-sm ">
                        <p className='text-2xl font-bold text-center'>Login</p>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Type here" className="border-2 p-2 w-full px-4" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Enter your password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="border-2 p-2 w-full px-4" required />

                            </div>
                            <div>
                                <LoadCanvasTemplate />
                                <input placeholder='Type here' ref={capcharef} name='capcha' className='border-2 p-2 w-full px-4' />
                            </div>
                            <button onClick={handleValidateCapcha} className="btn btn-xs">VALIDATE</button>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div className="form-control mt-6">
                                <button  disabled={disabled} className="btn  bg-orange-300 font-bold text-white">Sign In</button>
                            </div>
                            <p className='text-orange-300  font-bold text-center '>New here? Create a New Account</p>
                            <p className='text-center'>Or sign in with</p>
                            <div className='text-center justify-center items-center flex gap-9 mt-3  text-2xl '>
                                <FaFacebook />
                                <FcGoogle />
                                <FaGithub />
                            </div>
                        </form>
                    </div>
                    <div className="text-center lg:text-left">
                        <img src={image} className='mix-blend-screen' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;