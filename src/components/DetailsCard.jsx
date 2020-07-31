import React, { useState } from 'react';
import DetailColorPicker from './DetailColorPicker';
import DetailTutorial from './DetailTutorial';
import DetailCodeSnippets from './DetailCodeSnippets';

const DetailsCard = () => {

  const [transform, setTransform] = useState({ position: {
   transform: "translateX(0px)"
  }})

  const sliderContent = (value) => {
    let newPos = { transform: `translateX(-${value}px)` }
    setTransform({position:newPos})
  }

  return (
    <div style={{ width: '360px' }} className='py-2 px-3 bg-gray-200 rounded-md'>
      <div className='flex mb-4'>
        <button type="button" onClick={() => { sliderContent(0) }} onKeyDown={sliderContent} className='w-1/3 focus:shadow-md focus:outline-none focus:bg-white text-black font-bold py-2 px-4 rounded-md'>Details</button>
        <button type="button" onClick={() => { sliderContent(336) }} onKeyDown={sliderContent} className='w-1/3 focus:shadow-md focus:outline-none focus:bg-white text-black font-bold py-2 px-4 rounded-md'>Tutorials</button>
        <button type="button" onClick={() => { sliderContent(672) }} onKeyDown={sliderContent} className='w-1/3 focus:shadow-md focus:outline-none focus:bg-white text-black font-bold py-2 px-4 rounded-md'>
          Code
          <br />
          snippets
        </button>
      </div>
      <div className='flex overflow-hidden'>
        <div className='min-w-full px-6 transition ease-in-out duration-500' style={transform.position}>
          <DetailColorPicker />
        </div>
        <div className='min-w-full px-6 transition ease-in-out duration-500' style={transform.position}>
          <DetailTutorial />
        </div>
        <div className='min-w-full px-6 transition ease-in-out duration-500' style={transform.position}>
          <DetailCodeSnippets />
        </div>
      </div>
    </div>
  );
}

export default DetailsCard;
