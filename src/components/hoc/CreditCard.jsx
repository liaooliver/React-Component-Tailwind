import React from 'react';
import Bar from './Bar';
import Image from './Image';
import payment from '../../assets/payment.png';

const CreditCard = ({toggle, isOpen}) => {
    return <div className="w-40 inline-block">
        <Bar toggle={toggle}>Create cards</Bar>
        { isOpen && <div className="p-3 bg-orange-200"><Image src={payment}></Image></div>}
    </div> 
}

export default CreditCard;