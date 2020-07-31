import React from 'react';
// import LoginSocial from './LoginSocial';
import LoginCommon from './LoginCommon';


const LoginPage = () => (
    <div className="w-full shadow-lg rounded-lg flex">
        <div className="w-1/4 rounded-l-lg bg-blue-900"></div>
        <div className="w-3/4 rounded-r-lg bg-gray-200 px-10 py-16">
            {/* <LoginSocial /> */}
            <LoginCommon />
        </div>
    </div>
);

export default LoginPage;