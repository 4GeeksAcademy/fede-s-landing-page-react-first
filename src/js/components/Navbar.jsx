import React from "react";

const Navbar = () => {

    const lista = ['Home', 'About', 'Services', 'Contact']
    const liLista = lista.map((item, index) =>{
        return <a className="nav-link" href={`#${index}`}>{item}</a>
    });

    return (
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark px-4">
                <a class="navbar-brand" href="#">FedeSite</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        {liLista}
                    </div>
                </div>
            </nav>

    );
};

export default Navbar;