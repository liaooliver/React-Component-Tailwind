import React from 'react';

const DetailContentTitle = ({ title, content }) => (
    <div>
        <h6 className='font-bold text-gray-600'>{title}</h6>
        <p className='text text-gray-500 text-sm'>{content}</p>
    </div>
);

export default DetailContentTitle;