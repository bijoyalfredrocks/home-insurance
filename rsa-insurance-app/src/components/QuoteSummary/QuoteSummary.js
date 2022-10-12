import React, { useState } from 'react'
import { useContextData } from '../../context/AppContext';
import { QuotePrice } from '../QuotePrice/QuotePrice';
import './QuoteSummary.css';

export const QuoteSummary = () => {
    const [toggleBtnContent, setToggleBtnContent] = useState(false);
    const { quoteLoading, quoteError, quoteData, dispatch } = useContextData();

    const togglePayment = (e) => {
        setToggleBtnContent(!toggleBtnContent);
        dispatch({ type: "TOGGLE_PAYMENT" });
    }
    const displayPrice = () => {
        return (<>
            {quoteLoading && <div>Loading...</div>}
            {quoteData?.map((user, index) => {
                return (
                    <QuotePrice
                        key={user.annualPrice + "_" + index}
                        paymentType = {toggleBtnContent}
                        baseMonthlyPrice={user?.monthlyPrice}
                        baseAnnualPrice={user?.annualPrice} />)
            })}
        </>)
    }

    return (
        <div className="col-md-6">
            <div className="card shadow">
                <div className="card-body px-5 text-md-start text-lg-center">
                    {displayPrice()}
                    <p className="card-text m-top mb-3 large-font">{toggleBtnContent ? "per annum" : "per month"}</p>
                    <p className="card-text padding fs-5 mb-4 ms-sm-n4">{`This price includes Insurance Premium Tax at the current rate. No charge for paying ${toggleBtnContent ? "annuam" : "monthly"}`}</p>
                    <button
                        type="button"
                        onClick={togglePayment}
                        className={`btn btn-primary btn-lg mb-3 py-3`}
                        style={{ width: "80%" }}>
                        <strong>{toggleBtnContent ? "Switch to monthly" : "Switch to annum"}</strong>
                    </button>
                </div>
            </div>
        </div>
    )
}
