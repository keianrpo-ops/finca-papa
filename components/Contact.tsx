
import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-green-800 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-extrabold mb-4">¿Listo para dar el siguiente paso?</h2>
                <p className="text-lg text-green-200 mb-8 max-w-2xl mx-auto">
                    No deje pasar esta increíble oportunidad. Contáctenos hoy mismo para agendar una visita y enamórese de su nuevo proyecto de vida.
                </p>
                <a 
                    href="https://wa.me/573244490660?text=Hola%2C%20estoy%20interesado%20en%20la%20finca%20en%20venta%20cerca%20a%20Uribe."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-green-800 font-bold text-xl py-4 px-10 rounded-full inline-flex items-center gap-3 hover:bg-green-100 transition-colors duration-300 shadow-xl transform hover:scale-105"
                >
                    <i className="fab fa-whatsapp text-3xl"></i>
                    Contactar por WhatsApp
                </a>
            </div>
        </section>
    );
};

export default Contact;