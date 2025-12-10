import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-6 text-center">
                <p>&copy; {new Date().getFullYear()} Finca San Pedro. Todos los derechos reservados.</p>
                <p className="text-sm text-gray-400 mt-1">Una oportunidad única en Uribe, Valle.</p>
            </div>
        </footer>
    );
};

export default Footer;
