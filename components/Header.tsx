
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-40">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-green-800">
                    <i className="fas fa-leaf mr-2"></i>
                    Finca El Paraíso
                </div>
                <a 
                    href="#contact"
                    className="bg-green-600 text-white font-bold py-2 px-6 rounded-full hover:bg-green-700 transition duration-300"
                >
                    Contactar
                </a>
            </div>
        </header>
    );
};

export default Header;
