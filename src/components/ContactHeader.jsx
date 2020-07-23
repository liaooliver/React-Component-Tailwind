import React from 'react';

const ContactHeader = () => (
  <div className="w-full p-6 md:p-4 sm:p-2 pr-48 bg-gray-300 flex justify-between items-center">
    <span className="w-56 lg:w-48 md:w-32 sm:w-24">
      <img width="100%" src="https://readycrew.jp/assets/images/common/hd_logo.png" alt="" />
    </span>
    {/* list */}
    <nav className="xl:hidden lg:hidden md:hidden sm:hidden">
      <ul className="flex">
        <li className="mx-6"><a href="/#"><span className="before relative font-sansJP text-red-600 font-bold">Home</span></a></li>
        <li className="mx-6"><a href="/#"><span className="after relative font-sansJP font-bold hover:text-red-600">Ready Crewとは？</span></a></li>
        <li className="mx-6"><a href="/#"><span className="after relative font-sansJP font-bold hover:text-red-600">Ready Crewの想い</span></a></li>
        <li className="mx-6"><a href="/#"><span className="after relative font-sansJP font-bold hover:text-red-600">マンガで知るReady Crew</span></a></li>
      </ul>
    </nav>
    {/* icon btn */}
    {/* <div></div> */}
  </div>
);

export default ContactHeader;
