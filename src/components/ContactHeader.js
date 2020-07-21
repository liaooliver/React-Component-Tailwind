import React from 'react';

const ContactHeader = () => {
    return (
        <div className="w-full p-6 pr-64 bg-gray-300 flex justify-between items-center">
            <span><img src="https://readycrew.jp/assets/images/common/hd_logo.png" alt=""></img></span>
            {/* list */}
            <ul className="flex">
                <li className="mx-6"><a href="/#"><span className="before relative text-red-600 font-bold">Home</span></a></li>
                <li className="mx-6"><a href="/#"><span className="after relative font-bold hover:text-red-600">Ready Crewとは？</span></a></li>
                <li className="mx-6"><a href="/#"><span className="after relative font-bold hover:text-red-600">Ready Crewの想い</span></a></li>
                <li className="mx-6"><a href="/#"><span className="after relative font-bold hover:text-red-600">マンガで知るReady Crew</span></a></li>
            </ul>
            {/* icon btn */}
            {/* <div></div> */}
        </div>
    );
}

export default ContactHeader;