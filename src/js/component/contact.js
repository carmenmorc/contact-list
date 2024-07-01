import React, { useContext } from "react";
import "../../styles/contact.css";

export const Contact = ({ name, email, address, phone }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://st3.depositphotos.com/7486768/17949/v/450/depositphotos_179490486-stock-illustration-profile-anonymous-face-icon-gray.jpg" className="img-fluid rounded-start" alt="Anonymous Profile Picture" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">📧 {email}</p>
                        <p className="card-text">📍 {address}</p>
                        <p className="card-text">📞 {phone}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};