import React, { useContext } from "react";

export const Contact = ({name, email, address, phone}) => {

    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{address}</p>
            <p>{phone}</p>
        </div>
    )
}