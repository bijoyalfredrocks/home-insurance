import React, { useState } from 'react';
import { useContextData } from '../../context/AppContext';

export const CoverOption = ({ id, title, text, monthlyPrice, annualPrice }) => {

    const { dispatch, reducerState: { togglePayment } } = useContextData();
    const [selected, setSelected] = useState(false);

    const addExtra = (id, monthlyPrice, annualPrice) => {
        dispatch({
            type: "ADD_EXTRA",
            payload: {
                id: id,
                monthlyPrice: monthlyPrice,
                annualPrice: annualPrice
            }
        });
    }

    const removeExtra = (id) => {
        dispatch({ type: "REMOVE_EXTRA", payload: { id: id } });
    }

    return (
        <div className="col">
            <div className={`card h-100 p-4 shadow ${selected ? 'border border-4 border-primary' : ''}`}>
                <div className="card-header border-0 bg-white">
                    <div className='row'>
                        <div className="col-lg-8 col-md-12">
                            <h3 className="fs-2">{title}</h3>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="float-lg-end float-sm-start fs-5">{`£${togglePayment ? annualPrice : monthlyPrice} per ${togglePayment ? 'annuam' : 'monthly'}`}</div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text fs-5">{text}</p>
                </div>
                <div className="card-footer text-right border-0 bg-white mb-4 me-4">
                    <button
                        onClick={(e) => {
                            setSelected(!selected);
                            selected ? removeExtra(id) : addExtra(id, monthlyPrice, annualPrice);
                        }}
                        className={`btn ${selected ? "btn-danger" : "btn-primary"} btn-lg float-lg-end float-sm-start mb-md-0 pt-3 pb-3 px-5`}>
                        <strong>{selected ? "Remove this extra" : "Select this extra"}</strong>
                    </button>
                </div>
            </div>
        </div>
    )
}
