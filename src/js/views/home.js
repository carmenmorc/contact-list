import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Asegúrate de importar Link desde react-router-dom
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Contact } from "../component/contact";

export const Home = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center mt-3">
            {store.contacts.map((el, i) => (
                <Contact key={i} name={el.name} email={el.email} address={el.address} phone={el.phone} />
            ))}
            <Link to="/add" className="btn btn-primary">Añadir Contacto</Link>
        </div>
    );
};