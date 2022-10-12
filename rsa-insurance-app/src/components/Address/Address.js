import React from 'react'

export const Address = (props) => {
    const address = Object.values(props).filter(Boolean).join(", ");
    return (
        <div className="mt-4 fs-5">{`Here is your quote for ${address}`}</div>
    )
}
