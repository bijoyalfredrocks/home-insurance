import React, { useState } from 'react'
import { Button } from '../Button/Button';

export const TotalPriceCard = ({ togglePayment }) => {
    const [toggleBtnContent, setToggleBtnContent] = useState(false);

    return (
        <div className="col-md-6">
            <div className="card shadow">
                <div className="card-body text-center">
                    <h1 className="card-title display-3"><strong>{"£21.64"}</strong></h1>
                    <p className="card-text fs-2">{"per month"}</p>
                    <p className="card-text fs-5">{"This price includes Insurance Premium Tax at the current rate. No charge for paying monthly"}</p>
                    <button
                        type="button"
                        onClick={(e) => togglePayment(setToggleBtnContent(!toggleBtnContent))}
                        className="btn btn-primary btn-lg mb-3 pt-3 pb-3"
                        style={{ width: "70%" }}>
                        <strong>{toggleBtnContent ? "Switch to monthly" : "Switch to annual"}</strong>
                    </button>
                </div>
            </div>
        </div>

    )
}
