import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const NavBar = () => {

    const { books } = useContext(BookContext)

    return ( 
        <div className="p-8 bg-green-500 text-gray-200 text-center">
            <h1 className="text-3xl">Reading List</h1>
            <p>Currently you have { books.length } books to get through ....</p>
        </div>
    );
}
 
export default NavBar;