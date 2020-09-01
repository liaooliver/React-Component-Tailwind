import React from 'react';
import team from '../assets/icon/team-management.png';
import member from '../assets/icon/newmember.png';

const BtnGroup = ({openCreate, openTeam, openMember, isOpen}) => {

    return <div className="w-full h-8 relative">

        <div 
            className={`w-12 h-12 z-10 inline-block absolute text-gray-200 bg-red-400 rounded-full cursor-pointer transform ${isOpen ? 'rotate-180' : ''} transition-all duration-500`} 
            onClick={() => openCreate()}
        >
            <p className="w-full h-full text-center leading-10 text-4xl ">+</p>
        </div>
        <div className={`w-0 h-3 bg-red-100 absolute create-deco transition-all duration-500 ${isOpen ? 'w-40' : ''}`}></div>
        <div 
            className={`absolute create-group w-10 h-10 inline-block cursor-pointer text-center leading-8 rounded-full bg-red-300 transition-all duration-500 ${isOpen ? 'create-group-active' : ''}`} 
            onClick={() => openTeam()}
        >
            <img className="w-6 inline-block" src={team} alt="team" />
        </div>
        <div 
            className={`absolute create-member w-10 h-10 inline-block cursor-pointer text-center leading-8  rounded-full bg-red-300  transition-all duration-500 ${isOpen ? 'create-member-active' : ''}`} 
            onClick={() => openMember()}
        >
            <img className="w-6 inline-block" src={member} alt="member" />
        </div>
    </div>
}

export default BtnGroup;