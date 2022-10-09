import React from 'react'
import { Card } from '../components/Card/Card';
import { useFetch } from '../hooks/useFetch';

export const CardsContainer = ({togglePayment}) => {
  let addonsUrl = '/addons';
  const [data, loading, error] = useFetch(addonsUrl);
  console.log("addonsUrl", data);
  return (
    <>
      {loading && <div>Loading...</div>}
      {data && 
        <div className="row row-cols-1 row-cols-md-2 g-4">{data?.map(addon => {
        return (<Card
          title = {addon.title}
          text = {addon.text}
          monthlyPrice = {addon.monthlyPrice}
          annualPrice = {addon.annualPrice}
          priceToggled= {togglePayment}>
        </Card>
        );
      })}
      </div>
      }
    </>
  )
}
