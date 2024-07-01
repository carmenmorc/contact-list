import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/form.css";

export const Form = () => {

    const {store, actions} = useContext(Context);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        actions.addContact(formData);
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value});
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <input type="text" className="form-control" placeholder="Full Name" value={formData.name} name="name" onChange={handleChange}/>
                <input type="text" className="form-control" placeholder="E-Mail" value={formData.email} name="email" onChange={handleChange}/>
                <input type="text" className="form-control" placeholder="Phone" value={formData.phone} name="phone" onChange={handleChange}/>
                <input type="text" className="form-control" placeholder="Address" value={formData.address} name="address" onChange={handleChange}/>
                <input type="submit" className="btn btn-primary" value="Add Contact" />
                <Link to="/" className="btn btn-secondary">See List</Link>
            </form>
        </>
    );
};