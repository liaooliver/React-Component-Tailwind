import React from 'react';
import NavBar from './NavBar';
import BookList from './BookList';
import ThemeToggle from './ThemeToggle';
import ThemeContextProvider from './contexts/ThemeContext';

const Hook = () => {
    return (
        <div className="mx-auto text-center" style={{ width: '400px' }}>
            <ThemeContextProvider>
                <NavBar />
                <BookList />
                <ThemeToggle />
            </ThemeContextProvider>
        </div>
    )
}

export default Hook;