import React from 'react';
import NavBar from './NavBar';
import BookList from './BookList';
import ThemeToggle from './ThemeToggle';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';

import SongList from './SongList';

const Hook = () => {
    return (
        <div className="mx-auto">
            <div className="mx-auto text-center inline-block" style={{ width: '400px' }}>
                <ThemeContextProvider>
                    <AuthContextProvider>
                        <NavBar />
                        <BookContextProvider>
                            <BookList />
                        </BookContextProvider>
                        <ThemeToggle />
                    </AuthContextProvider>
                </ThemeContextProvider>
            </div>
            <div className="block">
                <SongList />
            </div>
        </div>
    )
}

export default Hook;