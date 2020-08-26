import React, { useState } from 'react';
import ColorItem from './ColorItem';


const origin = {
    top: '-20%',
    opacity: 0
}

const moved = {
    top: '-15%',
    opacity: 1
}

const ColorPicker = () => {

    const [colors, setColors] = useState(["#6E88EB", "#F22FDE", "#C0092F", "#23AA43", "#828EA8"]);
    const [select, setSelect] = useState("#6E88EB");
    const [isRemind, setIsRemind] = useState(false)

    const random = () => {
        const letters = "0123456789ABCDEF";
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const generatorColor = () => {
        const colorArray = [];

        for (let i = 0; i < 5; i++) {
            colorArray.push(random())
        }
        setColors(colorArray)
    }

    const copyAlert = (color) => {
        setSelect(color)
    }


    return (
        <div className="relative w-full m-auto p-4 bg-gray-400 rounded-md shadow-md flex flex-col items-center">
            {/* <div className="absolute w-1/5 p-3 bg-red-400 rounded-lg text-white text-xl text-center transition-all duration-200 ease-in"
                style={ `${isRemind ? 'moved' : ''}` }>{select}</div> */}
            <h2 className="my-10 text-3xl">Color Palette Generator</h2>
            <ul className="flex justify-around mb-10">
                {
                    colors.map(color => <ColorItem color={color} key={color} />)
                }
            </ul>
            <div>
                <button type="button" className="bg-purple-500 text-white py-4 px-16 rounded-md my-10" onClick={() => generatorColor()}>Generate palette</button>
            </div>
        </div>
    )
}

export default ColorPicker;