import React, { useState } from 'react';

const SongList = () => {

    const [songs, setSongs] = useState([
        { title: 'almost home', id: 1 },
        { title: 'This wild darkness', id: 2 },
        { title: 'memory gospel', id: 3 },
    ])

    const addSong = () => {
        setSongs([...songs, { title: 'new song', id: 4 }])
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
            <button onClick={addSong}>Add a song</button>
        </div>
     );
}
 
export default SongList;