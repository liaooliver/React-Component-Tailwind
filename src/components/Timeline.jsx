import React from 'react';

const Timeline = () => {
    return <div className="w-full py-20 bg-white relative">
        <div className="w-1/2 mx-auto relative timeline-container">
            <div className="my-10 relative timeline-top">
                <div className="w-3/4" />
                <div className="absolute top-0 right-0 h-10 w-1/4 rounded-tr-lg" />
            </div>
            <div className="my-32 relative timeline-medium">
                <div className="absolute bottom-0 right-0 h-24 w-1/4 rounded-br-lg" />
                <div className="w-1/2 mx-auto bg-blue-500" />
                <div className="absolute top-0 left-0 h-24 w-1/4 rounded-tl-lg" />
            </div>
            <div className="my-10 relative timeline-bottom">
                <div className="w-3/4 ml-auto" />
                <div className="absolute bottom-0 left-0 h-10 w-1/4 rounded-bl-lg" />
            </div>
        </div>
        <div className="w-1/2 mx-auto absolute inset-0">
            <span className="absolute text-xl inline-block top-15 ml-25">13 700</span>
            <span className="absolute text-xl inline-block top-15 ml-50">50%</span>
            <span className="absolute text-xl inline-block top-15 ml-75">90%</span>
            <span className="absolute text-xl inline-block top-30 ml-25">202 600</span>
            <span className="absolute text-xl inline-block top-30 ml-50">133 203</span>
            <span className="absolute text-xl inline-block top-30 ml-75">76%</span>
        </div>
    </div>
}

export default Timeline;