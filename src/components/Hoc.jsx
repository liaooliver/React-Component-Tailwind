import React from 'react';
import CreditCard from './hoc/CreditCard';
import Promotion from './hoc/Promotion';
import withOpen from './hoc/withOpen';

const CreditCardWithOpen = withOpen(CreditCard)
const PromotionWithOpen = withOpen(Promotion)

const HOC = () => {
    return <div className="w-full flex justify-center">
        <div className="mr-5">
            <CreditCardWithOpen></CreditCardWithOpen>
        </div>
        <div>
            <PromotionWithOpen></PromotionWithOpen>
        </div>
    </div>
}

export default HOC;