import React from 'react';
import { QuoteInfo } from '../QuoteInfo/QuoteInfo';
import { QuoteSummary } from '../QuoteSummary/QuoteSummary';

export const Quote = () => {
  return (
    <>
          <QuoteInfo data={data} loading={loading} />
          <QuoteSummary
            data={data}
            loading={loading}
            togglePayment={handleTogglePayment}
            paymentType={reducerState.togglePayment}
            addOns={reducerState.addOns}/>
    </>
  )
}
