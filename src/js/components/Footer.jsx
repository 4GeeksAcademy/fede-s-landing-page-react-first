import React, { useState } from 'react';

const Footer = () => {

    const [year, setYear] = useState(new Date().getFullYear().toString());



    return (
        <div className="text-center">
            <footer class="w-100 bg-dark text-white p-3">&copy; Copyright FedeSite <span>{year}</span></footer>
        </div>
    )

};

export default Footer;