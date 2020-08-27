import React from 'react';
import user from '../assets/icon/user.png';


const Member = ({ team, empty }) => {
    const { name } = team
    return <div className={`p-2 flex items-center ${empty ? 'bg-gray-700': ''} `}>
        <img src={user} alt="user" />
        {name}
    </div>
}

export default Member;