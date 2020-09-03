import React from 'react';
import CreditCard from './hoc/CreditCard';
import Promotion from './hoc/Promotion';
import withOpen from './hoc/withOpen';

const CreditCardWithOpen = withOpen(CreditCard)
const PromotionWithOpen = withOpen(Promotion)

const HOC = () => {
    return <div className="flex">
        <CreditCardWithOpen></CreditCardWithOpen>
        <PromotionWithOpen></PromotionWithOpen>
    </div>
}

export default HOC;