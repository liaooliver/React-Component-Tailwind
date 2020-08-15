import React, { useState, useEffect } from 'react';
import facebook from '../assets/icon/facebook.svg';
import twitter from '../assets/icon/twitter.svg';
import gmail from '../assets/icon/gmail.svg';

const LoginSocial = ({isOpened, emitEvent}) => {

    const [move, setMove] = useState({
        transform: "translateX(0px)",
        opacity: 1
    })

    useEffect(() => {
        if (isOpened === false) showSocialPage()
    }, [isOpened])

    const openCommonPage = () => {
        emitEvent(true)   
        setMove({
            transform: "translateX(400px)",
            opacity: 0
        })
    }

    const showSocialPage = ()  => {
        setMove({
            transform: "translateX(0px)",
            opacity: 1
        })
    }

    return (
    <div className="min-w-full transition-all duration-500 ease-in" style={move}>
        <div className="mb-8"> 
            <p className="font-bold text-3xl">Get started</p>
        </div>
        <ul>
            <li className="shadow-lg mb-5">
                <a href="/" className="p-6 bg-white rounded-lg flex items-center">
                    <span className="w-12 p-3 bg-indigo-100 rounded-lg">
                        <img width="100%" src={gmail} alt="" />
                    </span>
                    <span className="ml-4">
                        <p>Sign up with email</p>
                    </span>
                </a>
            </li>
            <li className="shadow-lg mb-5">
                <a href="/" className="p-6 bg-white rounded-lg flex items-center">
                    <span className="w-12 p-3 bg-indigo-100 rounded-lg">
                        <img width="100%" src={twitter} alt="" />
                    </span>
                    <span className="ml-4">
                        <p>Sign up with twitter</p>
                    </span>
                </a>
            </li>
            <li className="shadow-lg mb-5">
                <a href="/" className="p-6 bg-white rounded-lg flex items-center">
                    <span className="w-12 p-3 bg-indigo-100 rounded-lg">
                        <img width="100%" src={facebook} alt="" />
                    </span>
                    <span className="ml-4">
                        <p>Sign up with facebook</p>
                    </span>
                </a>
            </li>
        </ul>
        <div>
            <p>Already have an account? <a href="javascript:void(0)" onClick={openCommonPage} className="text-blue-500 underline">Log in</a></p>
        </div>
    </div>
)};

export default LoginSocial;