import React from 'react';
import BookContextProvider from './context/BookContext';
import NavBar from './components/NavBar';

const Book = () => {
    return (
        <div className="p-10 bg-green-900 mx-auto">
            <BookContextProvider>
                <NavBar />
            </BookContextProvider>
        </div>
    );
}
 
export default Book;