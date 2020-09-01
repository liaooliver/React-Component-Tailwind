import React from 'react';
import user from '../assets/icon/user.png';
import iconic from '../assets/icon/crown.png';


const Member = ({ name, leader, empty }) => {

    const Text = ({ name }) => {
        return <div className="flex justify-between items-center">
            <img src={user} alt="user" />
            <span>
                <p>{name}</p>
                <img src="" alt=""/>
            </span>
            <span className="w-8">
                { leader && <img width="100%" src={iconic} alt="Iconic" /> }
            </span>
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