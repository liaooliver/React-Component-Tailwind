import React, { useState } from 'react';
import LoginSocial from './LoginSocial';
import LoginCommon from './LoginCommon';


const LoginPage = () => {

    const [useForm, setUseForm] = useState(false);

    const getEmitFromLoginSocial = (value) => {
        setUseForm(true)
    }

    return(
    <div className="mx-auto shadow-lg rounded-lg flex" style={{'width': '768px'}}>
        <div className="w-1/4 rounded-l-lg bg-blue-900"></div>
        <div className="w-3/4 rounded-r-lg bg-gray-200 px-16 py-16 flex">
            <LoginSocial emitEvent={getEmitFromLoginSocial} />
            <LoginCommon isOpened={useForm} />
        </div>
    </div>
)};

export default LoginPage;