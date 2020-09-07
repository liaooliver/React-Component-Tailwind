import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookDetails = ({ book }) => {

    const { removeBook } = useContext(BookContext)

    return ( 
        <li onClick={()=> removeBook(book.id)} className="text-gray-200 p-3 bg-green-700 flex justify-between cursor-pointer">
            <div>{book.title}</div>
            <div>{book.author}</div>
        </li>
    );
}
 
export default BookDetails;