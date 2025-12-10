
import React from 'react';

const Hero: React.FC = () => {
    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href')?.substring(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section 
            className="relative h-screen bg-cover bg-center flex items-center justify-center text-white" 
            style={{ backgroundImage: "url('/images/vista-casa-ppal.jpeg')" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-lg">
                    Su Paraíso Productivo en el Corazón del Valle
                </h1>
                <p className="text-xl md:text-2xl mb-6 font-light drop-shadow-md">
                    11 Cuadras de oportunidades, naturaleza y un futuro próspero le esperan.
                </p>
                <div className="bg-white text-gray-900 font-bold text-3xl md:text-4xl py-3 px-8 rounded-lg inline-block mb-8 shadow-2xl">
                    $800,000,000 COP
                </div>
                <div>
                    <a 
                        href="#features"
                        onClick={handleScroll}
                        className="bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition duration-300 shadow-xl cursor-pointer"
                    >
                        Descubrir Más
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;