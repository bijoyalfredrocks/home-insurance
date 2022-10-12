import React, { useEffect, useState } from 'react';
import { useContextData } from '../../context/AppContext';

export const QuotePrice = ({ paymentType, baseMonthlyPrice, baseAnnualPrice }) => {
    const [totalPrice, setTotalPrice] = useState(baseMonthlyPrice);
    const { reducerState: { addOns } } = useContextData();

    let total = 0;
    useEffect(() => {
        if (addOns.length === 0) {
            paymentType ? setTotalPrice(baseAnnualPrice) : setTotalPrice(baseMonthlyPrice);
        } else {
            total = paymentType ? baseAnnualPrice : baseMonthlyPrice;
            const annualPrice = () => {
                addOns?.forEach(addOn => {
                    total += addOn.annualPrice;
                    setTotalPrice(parseFloat(total).toFixed(2));
                });
            }
            const monthlyPrice = () => {
                addOns?.forEach(addOn => {
                    total += addOn.monthlyPrice;
                    setTotalPrice(parseFloat(total).toFixed(2));
                });
            }
            paymentType ? annualPrice(total) : monthlyPrice(total)
        }
    }, [addOns, paymentType]);
    return (
        <h1 className="card-title display-3">
            <strong>{`£${totalPrice}`}</strong>
        </h1>
    )
}
