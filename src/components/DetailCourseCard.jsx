import React from 'react';
import arrow from '../assets/icon/arrow.svg';

const DetailCourseCard = ({ link, name }) => (
  <a href={link}>
    <div className='flex items-center justify-between'>
      <h6 className='font-bold text-gray-700'>{name}</h6>
      <span className='w-3'>
        <img width='100%' src={arrow} alt='Arrow' />
      </span>
    </div>
    <p className='mt-3 text-sm text-gray-500'>{link}</p>
  </a>
);

export default DetailCourseCard;
