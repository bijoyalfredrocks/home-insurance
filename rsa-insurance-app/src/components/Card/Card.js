import React from 'react'
import { Button } from '../Button/Button';

export const Card = ({ title, text, monthlyPrice, annualPrice, priceToggled }) => {
      return (
        <div className='col'>
            <div className="card h-100 p-4 shadow">
                <div class="card-header container-fluid border-0 bg-white">
                    <div className='row'>
                        <div class="col-md-8">
                            <h3 className="fs-2">{title}</h3>
                        </div>
                        <div className="col-md-4">
                            <div className="float-end fs-5">{`£${priceToggled ? annualPrice : monthlyPrice} per ${priceToggled? 'yearly':'monthly'}`}</div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text fs-5">{text}</p>
                </div>
                <div className="card-footer text-right border-0 bg-white mb-4 me-4">
                    <button className="btn btn-primary btn-lg float-end  mb-md-0 pt-3 pb-3 ps-5 pe-5">
                        <strong>Select this extra</strong>
                    </button>
                </div>
            </div>
        </div>
    )
}
