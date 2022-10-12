import React from 'react';
import { CoverOption } from '../components/Card/CoverOption';

import {useContextData} from'../context/AppContext';

export const OptionalExtraCover = () => {

  const { addOnLoading, addOnError, addOndata } = useContextData();
 
  return (
    <>
      {addOnLoading && <div>Loading...</div>}
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {addOndata?.map((addon, index) => {
          return (<CoverOption
            id={addon.title}
            key={`${addon.title}_${index}`}
            title={addon.title}
            text={addon.text}
            monthlyPrice={addon.monthlyPrice}
            annualPrice={addon.annualPrice}/>
          );
        })}
      </div>
    </>
  )
}
