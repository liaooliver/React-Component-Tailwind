import React, { useState, createContext } from 'react';

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'The way of kings', id: 1 },
        { title: 'The name of the wind', id: 2 },
        { title: 'The final of empire', id: 3 }
    ])
    return ( 
        <BookContext.Provider value={{books}}>
            { props.children }
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;