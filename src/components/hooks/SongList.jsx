import React, { useState } from 'react';
import uuid from 'uuid/dist/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {

    const [songs, setSongs] = useState([
        { title: 'almost home', id: 1 },
        { title: 'This wild darkness', id: 2 },
        { title: 'memory gospel', id: 3 },
    ])

    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid() }])
    }

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
        </div>
     );
}
 
export default SongList;