import React from 'react';
import user from '../assets/icon/user.png';


const Oraniztional = () => {

    const employees = ['milk', 'apple', 'sony', 'apple', 'sony', 'apple', 'sony', 'apple', 'sony', 'apple', 'apple', 'apple']


    return (
        <div className="w-full h-full flex bg-gray-400 rounded-md shadow-md">
            {/* list */}
            <div className="w-64 h-full p-3">
                <div className="w-full p-3 bg-white rounded-md overflow-y-scroll">
                    <ul>
                        {
                            employees.map(employee =>
                                <li key={employee} className="w-full p-3 mb-3 last:mb-0 rounded-md bg-orange-200 flex">
                                    <img src={user} alt="user" />
                                    <div className="ml-3">
                                        {employee}
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
            {/* content */}
            <div className="flex-grow p-3">
                <div className="w-full p-5 bg-white rounded-md"></div>
            </div>
        </div>
    )
}

export default Oraniztional;