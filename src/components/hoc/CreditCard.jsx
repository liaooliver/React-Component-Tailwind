import React from 'react';
import Bar from './Bar';
import Image from './Image';

const CreditCard = ({toggle, isOpen}) => {
    return <div className="w-40 inline-block">
        <Bar toggle={toggle} title="Create cards" />
        { isOpen && <div className="p-3 bg-orange-200"><Image></Image></div>}
    </div> 
}

export default CreditCard;