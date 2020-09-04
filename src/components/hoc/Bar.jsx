import React from 'react';

const Bar = ({title, toggle}) => {
    return <div className="w-full p-2 bg-red-200 text-center cursor-pointer" onClick={()=>toggle()}>{ title }</div>
}

export default Bar;