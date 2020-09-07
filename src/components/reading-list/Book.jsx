import React from 'react';
import BookContextProvider from './context/BookContext';
import NavBar from './components/NavBar';
import BookList from './components/BookList';
import NewBookForm from './components/BookForm';

const Book = () => {
    return (
        <div className="p-10 bg-green-900 mx-auto">
            <BookContextProvider>
                <NavBar />
                <BookList />
                <NewBookForm />
            </BookContextProvider>
        </div>
    );
}
 
export default Book;