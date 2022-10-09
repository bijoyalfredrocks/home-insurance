import React from 'react';
import { useFetch } from '../../hooks/useFetch';

export const UserInfo = () => {
    let quoteUrl = '/quote';
    const [data, loading, error] = useFetch(quoteUrl);

    if (error) {
        console.log(error)
    }
    const concatAddress = (obj, separator) =>
    Object.values(obj)
        .filter((val) => val)
        .join(separator);

    return (
        <>
            {loading && <div>Loading...</div>}
            {data && <div className="col-md-6 mt-lg-5 mt-md-5 mb-5 mb-md-0">{data?.map(user => {
                return (<>
                    <h1>{`Hey ${user.firstName},`}</h1>
                    <div className="mt-4 fs-5">{`Here is your quote for ${user.address1 + "," + user.address2 + "," + user.address3 + "," + user.town}`}</div>
                    <div className="mt-4 fs-5">{`Quote Reference: ${user.quoteRef}`}</div>
                    <div className="mt-4 fs-5">{`Cover starts on ${user.startDate}`}</div>
                </>
                );
            })}
            </div>}
        </>
    )
}
