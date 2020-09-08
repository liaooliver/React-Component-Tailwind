import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {

    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title)
        setTitle('')
    }

    return ( 
        <form onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="song">Song name: </label>
            <input id="song" type="text" value={title} required onChange={(e)=>setTitle(e.target.value)} />
            <input type="submit" value="add song"/>
        </form>
     );
}
 
export default NewSongForm;