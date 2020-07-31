import React from 'react';
import returnicon from '../assets/returnicon.svg';

const LoginCommon = () => (
    <div>
        <div>
            <a href="/" className="w-6 inline-block">
                <img src={returnicon} alt="return icon" />
            </a>
            <div>
                <p className="font-bold">Create your account</p>
            </div>
        </div>
        <div>
            <form action="">
                <p>
                    <label htmlFor="name">Name</label><br />
                    <input type="text" name="" id="name"/>
                </p>
                <p>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" name="" id="email"/>
                </p>
                <p>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="" id="password"/>
                </p>
                <input type="button" value="Sign Up"/>
            </form>
        </div>
    </div>
);

export default LoginCommon;