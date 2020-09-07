import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {

    const { books } = useContext(BookContext)

    return books.length ? ( 
        <div>
            <ul className="text-gray-200">
                {
                    books.map(book => {
                        return (
                            <BookDetails book={book} key={book.id} />
                        )
                    })
                }
            </ul>
        </div>
    ):(
        <div className="text-gray-200">No books to read</div>        
    ) ;
}
 
export default BookList;