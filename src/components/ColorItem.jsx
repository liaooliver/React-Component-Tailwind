import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../styles/colorpicker.scoped.css';


const ColorItem = ({ color }) => {

    const [showCopied, setShowCopied] = useState(false)
    
    const copied = () => {
        setShowCopied(!showCopied)
        setTimeout(() => {
            setShowCopied(false)
        },1000)
    }

    return (
        <li className="p-2 bg-white rounded-md mx-4" key={color}>
            <CopyToClipboard text={color}>
                <div className="relative py-20 px-16 rounded-md cursor-pointer"
                    style={{ backgroundColor: `${color}` }}
                    onClick={()=> copied()}>
                    <div className={`absolute origin transition-all duration-500 ease-in ${showCopied? 'showPos ' : ''}`}>copied!!</div>
                </div>
            </CopyToClipboard>
            <p className="text-center mt-2">{color}</p>
        </li>
    )

}

export default ColorItem;