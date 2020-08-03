import React, { useState, useEffect } from 'react';
import returnicon from '../assets/returnicon.svg';

const LoginCommon = ({ isOpened, emitEvent }) => {

    const [showForm, setShowForm] = useState({
        display: 'block',
        transform: "translateX(0px)",
        opacity: 0
    })

    useEffect(()=>{
        isOpened ? doOpen() : close();
    }, [isOpened])

    const doOpen = () => {
        setShowForm({
            display: 'block',
            transform: "translateX(-448px)",
            opacity: 1
        })
    }

    const close = () => {
        setShowForm({
            display: 'block',
            transform: "translateX(-48px)",
            opacity: 0
        })
    }

    const backSocialPage = () => {
        emitEvent(false)
        close();
    }



    return (
    <div className='min-w-full transition-all duration-500 ease-in' style={showForm}>
        <div className="w-3/4">
            <div className="mb-5">
                <i href="underfind" className="w-6 inline-block cursor-pointer" onClick={backSocialPage}>
                    <img src={returnicon} alt="return icon" />
                </i>
                <p className="font-bold text-3xl leading-none">Create your <br /> account</p>
            </div>
            <div>
                <form action="">
                    <p className="mb-3">
                        <label htmlFor="name">Name</label><br />
                        <input className="w-full mt-1 py-2 px-4 rounded-md font-light" type="text" name="" id="name"/>
                    </p>
                    <p className="mb-3">
                        <label htmlFor="email">Email</label><br />
                        <input className="w-full mt-1 py-2 px-4 rounded-md font-light" type="email" name="" id="email"/>
                    </p>
                    <p className="mb-3">
                        <label htmlFor="password">Password</label><br />
                        <input className="w-full mt-1 py-2 px-4 rounded-md font-light" type="password" name="" id="password"/>
                    </p>
                    <input className="w-full bg-gray-600 text-white py-2 px-4 rounded-md" type="button" value="Sign Up"/>
                </form>
            </div>
        </div>
    </div>
)};

export default LoginCommon;