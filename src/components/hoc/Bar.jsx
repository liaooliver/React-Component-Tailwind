import React from 'react';

const Bar = (props) => {
    return <div className="w-full p-2 bg-red-200 text-center cursor-pointer" onClick={() => props.toggle()}>
        {props.children}
    </div>
}

export default Bar;