import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ColorPicker = () => {

    const [colors, setColors] = useState(["#6E88EB", "#F22FDE", "#C0092F", "#23AA43", "#828EA8"])


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

    return (
        <div className="w-full m-auto p-4 bg-gray-400 rounded-md shadow-md flex flex-col items-center">
            <h2 className="my-10 text-3xl">Color Palette Generator</h2>
            <ul className="flex justify-around mb-10">
                {
                    colors.map(color => <li className="p-2 bg-white rounded-md mx-4" key={color}>
                        <CopyToClipboard text={color}>
                            <div className="py-20 px-16 rounded-md" style={{ backgroundColor: `${color}` }}>

                            </div>
                        </CopyToClipboard>
                        <p className="text-center mt-2">{color}</p>
                    </li>)
                }
            </ul>
            <div>
                <button type="button" className="bg-purple-500 text-white py-4 px-16 rounded-md my-10" onClick={() => generatorColor()}>Generate palette</button>
            </div>
        </div>
    )
}

export default ColorPicker;