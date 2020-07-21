import React, { useState } from 'react';
import menu from '../assets/iconfinder_menu-alt_134216.png'
import close from '../assets/close.png';

export default function CommonHeader(){
    const [ state, setState ] = useState({
        isOpenNav: false
      });
    let lists = ['私たちの想い', 'サービス内容', '会社情報', 'お知らせ', 'IFAパートナー募集'];

    const openNav = e => {
        e.preventDefault();
        setState({isOpenNav: !state.isOpenNav})
    }

    return (
        <div className="w-full py-4 px-6 bg-gray-300 flex items-center justify-between shadow-md relative">
            <span className="xs:w-24">
                <img src="https://www.jw-advisers.co.jp/assets/images/common/logo.svg" alt="logo"></img>
            </span>
            <span 
                className={
                    `${state.isOpenNav? 'hidden': ''}
                    w-8 cursor-pointer xl:hidden lg:hidden`
                } onClick={openNav}>
                <img src={menu} alt="menu"></img>
            </span>
            <nav className={`${state.isOpenNav? 'block md:absolute sm:absolute md:inset-0 sm:inset-0 md:p-12 sm:p-12':'md:hidden sm:hidden'}`}>
                <ul className={`flex md:flex-col sm:flex-col md:relative sm:relative md:bg-blue-500 sm:bg-blue-500 md:p-10 sm:p-10 md:rounded-md sm:rounded-md`}>
                    <div class="flex justify-end absolute top-0 right-0 pt-3 pr-6 lg:hidden xl:hidden">
                        <span className="w-8" onClick={openNav}>
                            <img className="cursor-pointer" src={close} alt="close"></img>
                        </span>
                    </div>
                {
                    lists.map(
                        (list, index) =>  
                        <li 
                            key={index} 
                            className='md:text-white md:py-5 md:border-b sm:text-white sm:py-5 sm:border-b pr-6 last:pr-0 hover:text-blue-700 hover:text-blue-700'>
                                <a href="/">{list}</a>
                        </li>
                    )
                }
                </ul>
            </nav>
        </div>
    ) 
    
}