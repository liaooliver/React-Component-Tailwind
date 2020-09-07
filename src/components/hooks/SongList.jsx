import React, { useState, useEffect } from 'react';
import uuid from 'uuid/dist/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {

    const [songs, setSongs] = useState([
        { title: 'almost home', id: 1 },
        { title: 'This wild darkness', id: 2 },
        { title: 'memory gospel', id: 3 },
    ])

    const [age, setAge] = useState(20)

    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid() }])
    }

    useEffect(()=>{}, )

    return ( 
        <div>
            <ul>
                {
                    songs.map(song => {
                        return <li key={song.id}>{song.title}</li>
                    })
                }
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={()=>setAge(age+1)}>Add 1 to age: {age}</button>
        </div>
     );
}
 
export default SongList;