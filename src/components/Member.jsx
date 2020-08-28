import React from 'react';
import user from '../assets/icon/user.png';


const Member = ({ name, empty }) => {
    console.log("Member", name)

    const Text = ({name}) => {
        return <div className="flex items-center">
            <img src={user} alt="user" />
            {name}
        </div>
    }

    return (
        <div className={`p-2 ${empty ? 'bg-gray-300' : ''} `}>
            {
                empty ? '' : <Text name={name} />
            }
        </div>
    )
}

export default Member;