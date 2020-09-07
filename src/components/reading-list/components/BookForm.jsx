import React, { useState, useContext } from 'react';
import { BookContext } from '../context/BookContext';
const NewBookForm = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('')
    const { addBook } = useContext(BookContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }

    return ( 
        <form onSubmit={handleSubmit} className="text-center">
            <input type="text" placeholder="book title" value={title} className="w-full p-2 mt-3 rounded-md"
                onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="author" value={author} className="w-full p-2 mt-3 rounded-md"
                onChange={(e) => setAuthor(e.target.value)} required />
            <input type="submit" value="add book" className="mt-2 p-2 rounded-md" />
        </form>
    );
}
 
export default NewBookForm;