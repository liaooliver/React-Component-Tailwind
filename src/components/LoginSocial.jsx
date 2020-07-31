import React from 'react';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import gmail from '../assets/gmail.svg';

const LoginSocial = () => (
    <div>
        <div className="mb-8"> 
            <p className="font-bold text-3xl">Get started</p>
        </div>
        <ul>
            <li>
                <a href="/" className="p-6 bg-white rounded-lg flex items-center mb-4">
                    <span className="w-12 p-3 bg-indigo-100 rounded-lg">
                        <img width="100%" src={gmail} alt="" srcset=""/>
                    </span>
                    <span className="ml-4">
                        <p>Sign up with email</p>
                    </span>
                </a>
            </li>
            <li>
                <a href="/" className="p-6 bg-white rounded-lg flex items-center mb-4">
                    <span className="w-12 p-3 bg-indigo-100 rounded-lg">
                        <img width="100%" src={twitter} alt="" srcset=""/>
                    </span>
                    <span className="ml-4">
                        <p>Sign up with twitter</p>
                    </span>
                </a>
            </li>
            <li>
                <a href="/" className="p-6 bg-white rounded-lg flex items-center mb-4">
                    <span className="w-12 p-3 bg-indigo-100 rounded-lg">
                        <img width="100%" src={facebook} alt="" srcset=""/>
                    </span>
                    <span className="ml-4">
                        <p>Sign up with facebook</p>
                    </span>
                </a>
            </li>
        </ul>
        <div>
            <p>Already have an account? <a href="/" className="text-blue-500 underline">Log in</a></p>
        </div>
    </div>
);

export default LoginSocial;