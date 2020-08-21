import React from 'react';
import '../styles/waterfall.css';

const Waterfall = () => {

    const generator = () => {
        const lists = []
        for (let i = 0; i < 20; ++i){
            lists.push(`https://picsum.photos/200/${100+i*20}?random=${i}`)
        }
        return lists
    }


    return (
        <div className="w-full bg-white rounded-md shadow-md p-4 wa-grid wa-block">
            {
                generator().map(item => {
                    return <div key={item} className="p-2">
                        <img width="100%" src={item} alt={item}></img>
                    </div>
                })
            }
        </div>
    )
}

export default Waterfall