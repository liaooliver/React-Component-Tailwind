import React from 'react';
import { Line } from 'rc-progress';
import complete from '../assets/icon/complete.png'
import stop from '../assets/icon/close.png';


const UploadItem = (props) => {

    const { item } = props;
    console.log(item)
    return <li className="my-2 py-2 text-gray-500 flex items-center justify-between flex-wrap" >
    <span className="w-1/5">
        <img className="w-8 h-8" src={complete} alt="complete"/>
    </span>
    <span className="w-3/5 text-center text-sm">{item.filename}</span>
    <span className="w-1/5 inline-block">
        <img className="w-6 h-6 ml-auto" src={stop} alt="stop" />
    </span>
    <div className="w-full mt-2">
        <Line percent={item.progress} strokeWidth="2" strokeColor="#48bb78" trailColor="#D3D3D3" />
    </div>
</li>
}

export default UploadItem