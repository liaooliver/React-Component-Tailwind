import React from 'react';
import Bar from './Bar';
import Image from './Image';
import promotion from '../../assets/promotion.png';

const Promotion = ({toggle, isOpen}) => {
    return <div className="w-40 inline-block">
        <Bar toggle={toggle}>Promotion</Bar>
        { isOpen && <div className="p-3 bg-orange-200"><Image src={promotion}></Image></div>}
    </div>
}

export default Promotion;
