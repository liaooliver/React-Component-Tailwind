import React, { useState, useEffect } from 'react';
import returnicon from '../assets/returnicon.svg';

const LoginCommon = ({isOpened}) => {

    
    useEffect(()=>{
        isOpened ? doOpen() : close();
    }, [isOpened])

    const doOpen = () => {
        setShowForm({
            effect:{
                display: 'block'
            }    
        })
    }

    const close = () => {
        setShowForm({
            effect:{
                display: 'none'
            }    
        })
    }

    const [showForm, setShowForm] = useState({
        effect:{
            display: 'none'
        } 
    })

    // const show = () => {}

    return (
    <div className='w-full' style={showForm.effect}>
        <div className="w-3/4">
            <div className="mb-5">
                <a href="underfind" className="w-6 inline-block">
                    <img src={returnicon} alt="return icon" />
                </a>
                <p className="font-bold text-3xl leading-none">Create your <br /> account</p>
            </div>
            <div>
                <form action="">
                    <p className="mb-3">
                        <label htmlFor="name">Name</label><br />
                        <input className="w-full mt-1 py-2 px-4 rounded-sm font-light" type="text" name="" id="name"/>
                    </p>
                    <p className="mb-3">
                        <label htmlFor="email">Email</label><br />
                        <input className="w-full mt-1 py-2 px-4 rounded-sm font-light" type="email" name="" id="email"/>
                    </p>
                    <p className="mb-3">
                        <label htmlFor="password">Password</label><br />
                        <input className="w-full mt-1 py-2 px-4 rounded-sm font-light" type="password" name="" id="password"/>
                    </p>
                    <input className="w-full bg-gray-600 text-white py-2 px-4 rounded-sm" type="button" value="Sign Up"/>
                </form>
            </div>
        </div>
    </div>
)};

export default LoginCommon;