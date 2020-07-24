import React from 'react';
import mail from '../assets/icon_mail.svg';
import tel from '../assets/icon_tel.svg';

const ContactHeader = () => (
<<<<<<< HEAD
  <div className="w-full relative p-4 pr-48 py-6 sm:px-2 bg-gray-300 flex justify-between items-center">
    <span className="w-56 lg:w-48 md:w-40 sm:w-32">
      {/* <img width="100%" src="https://readycrew.jp/assets/images/common/hd_logo.png" alt="" /> */}
=======
  <div className="w-full relative px-6 pr-48 py-8 md:px-4 sm:px-2 bg-gray-300 flex justify-between items-center">
    <span className="w-56 lg:w-48 md:w-32 sm:w-24">
      <img width="100%" src="https://readycrew.jp/assets/images/common/hd_logo.png" alt="" />
>>>>>>> origin/master
    </span>
    {/* list */}
    {/*   */}
    <nav className="flex items-center p-6">
      <ul className="flex xl:hidden lg:hidden md:hidden sm:hidden">
        <li className="mx-6"><a href="/#"><span className="before relative font-sansJP text-red-600 font-bold">Home</span></a></li>
        <li className="mx-6"><a href="/#"><span className="after relative font-sansJP font-bold hover:text-red-600">Ready Crewとは？</span></a></li>
        <li className="mx-6"><a href="/#"><span className="after relative font-sansJP font-bold hover:text-red-600">Ready Crewの想い</span></a></li>
        <li className="mx-6"><a href="/#"><span className="after relative font-sansJP font-bold hover:text-red-600">マンガで知るReady Crew</span></a></li>
      </ul>
    </nav>
    {/* menu */}
    <div className="absolute w-full top-0 right-0 pt-26 md:pt-20 sm:pt-20 xs:pt-20">
      <div className="w-full p-10 bg-gray-300">
        <ul className="w-full">
          <li className="mt-6 text-center">
            <a href="">
              <span className="relative before pt-1 font-sansJP text-red-600 xxl:text-xl xl:text-xl lg:text-xl text-base font-bold">Home</span>
            </a>
          </li>
          <li className="mt-6 text-center">
            <a href="">
              <span className="relative after pt-1 hover:text-red-600 font-sansJP xxl:text-xl xl:text-xl lg:text-xl text-base font-bold">Ready Crewとは？</span>
            </a>
          </li>
          <li className="mt-6 text-center">
            <a href="">
              <span className="relative after pt-1 hover:text-red-600 font-sansJP xxl:text-xl xl:text-xl lg:text-xl text-base font-bold">Ready Crewの想い</span>
            </a>
          </li>
          <li className="mt-6 text-center">
            <a href="">
              <span className="relative after pt-1 hover:text-red-600 font-sansJP xxl:text-xl xl:text-xl lg:text-xl text-base font-bold">マンガで知るReady Crew</span>
            </a>
          </li>
          <li className="mt-6 text-center">
            <a href="">
              <span className="relative after pt-1 hover:text-red-600 font-sansJP xxl:text-xl xl:text-xl lg:text-xl text-base font-bold">ケーススタディ</span>
            </a>
          </li>
          <li className="mt-6 text-center">
            <a href="">
              <span className="relative after pt-1 hover:text-red-600 font-sansJP xxl:text-xl xl:text-xl lg:text-xl text-base font-bold">ご利用企業</span>
            </a>
          </li>
          <li className="mt-6 text-center">
            <a href="">
              <span className="relative after pt-1 hover:text-red-600 font-sansJP xxl:text-xl xl:text-xl lg:text-xl text-base font-bold">会社を登録</span>
            </a>
          </li>
          <li className="mt-6 text-center"><button className="px-24 py-4 bg-red-600 rounded-full bg-red-600 border border-red-600 hover:bg-white text-white hover:text-red-600 font-bold">お問い合わせ</button></li>
        </ul>
        <ul className="mt-4 flex justify-center">
          <li className="mx-3"><a href=""><span className="relative after_underline text-xs text-gray-600">マッチング実績</span></a></li>
          <li className="mx-3"><a href=""><span className="relative after_underline text-xs text-gray-600">よくあるご質問</span></a></li>
          <li className="mx-3"><a href=""><span className="relative after_underline text-xs text-gray-600">ニュース</span></a></li>
          <li className="mx-3"><a href=""><span className="relative after_underline text-xs text-gray-600">運営企業</span></a></li>
          <li className="mx-3"><a href=""><span className="relative after_underline text-xs text-gray-600">採用情報</span></a></li>
          <li className="mx-3"><a href=""><span className="relative after_underline text-xs text-gray-600">プライバシーポリシー</span></a></li>
        </ul>
      </div>
    </div>
    {/* icon btn */}
    <div className="fixed right-0 flex items-center z-10 mr-10">
      <a href="/#">
        <div className="w-20 h-20 mr-3 bg-red-600 hover:bg-white text-white hover:text-black rounded-full border border-red-600 flex flex-col items-center justify-center">
          <span className="w-8 mb-1">
            <img src={mail} alt="mail" />
          </span>
          <span className="text-xs">
            お問い合わせ
          </span>
        </div>
      </a>
      <a href="/#">
        <div className="xxl:hidden w-20 h-20 mr-3 bg-red-600 text-white rounded-full border border-red-600 flex flex-col items-center justify-center">
          <span className="w-8 mb-1">
            <img src={tel} alt="tel" />
          </span>
          <span className="text-xs">
            電話
          </span>
        </div>
      </a>
      {/* menu btn */}
      <a href="/#" className="p-2 group flex flex-col items-center justify-center">
        <div className="xxl:w-10 xxl:h-10 w-8 h-8 flex flex-col justify-around group">
          <span className="w-full h-1 rounded-sm bg-black group-hover:bg-red-600 group-hover:w-full transition-all duration-200" />
          <span className="w-1/3 h-1 rounded-sm bg-black group-hover:bg-red-600 group-hover:w-full transition-all duration-200" />
          <span className="w-2/3 h-1 rounded-sm bg-black group-hover:bg-red-600 group-hover:w-full transition-all duration-200" />
        </div>
        <span className="text-xs font-bold whitespace-no-wrap group-hover:text-red-600 transition-all duration-200">メニュー</span>
      </a>
      {/* </div> */}
    </div>
  </div>
);

export default ContactHeader;
