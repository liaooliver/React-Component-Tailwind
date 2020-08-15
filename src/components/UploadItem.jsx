import React, { useEffect, useState } from 'react';
import { Line } from 'rc-progress';
import complete from '../assets/icon/complete.png'
import stop from '../assets/icon/close.png';
import axios from 'axios';


const UploadItem = ({ item }) => {
    
    const [progress, setProgress] = useState(0)

    useEffect(() => {

        const file = item;
        const formData = new FormData();
        formData.append(file.name, file)
        
        async function postFile() {
            axios.post('http://10.101.100.142:8085/api/upload', formData, {
                onUploadProgress: function (progressEvent) {
                    setProgress((progressEvent.loaded * 100) / progressEvent.total);    
            }})
        }

        postFile();
        console.log(item)
    }, [item])

    return <li className="my-2 py-2 text-gray-500 flex items-center justify-between flex-wrap" >
    <span className="w-1/5">
        <img className="w-8 h-8" src={complete} alt="complete"/>
    </span>
    <span className="w-3/5 text-center text-sm">{item.name}</span>
    <span className="w-1/5 inline-block">
        <img className="w-6 h-6 ml-auto" src={stop} alt="stop" />
    </span>
    <div className="w-full mt-2">
        <Line percent={progress} strokeWidth="2" strokeColor="#48bb78" trailColor="#D3D3D3" />
    </div>
</li>
}

export default UploadItem