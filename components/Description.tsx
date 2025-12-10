
import React from 'react';

const Description: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 w-full">
                        <img 
                            src="/images/vista-carretera.jpeg" 
                            alt="Paisaje montañoso de la finca"
                            className="rounded-xl shadow-2xl w-full h-auto object-cover"
                        />
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Un Negocio Rentable y un Hogar Soñado</h2>
                        <p className="text-gray-600 mb-4 text-lg">
                            Esta finca de <strong>11 cuadras</strong>, ubicada estratégicamente cerca de Uribe, Valle, es una joya agrícola en plena producción. No es solo tierra; es una empresa funcionando. Cuenta con una impresionante variedad de cultivos establecidos: <strong>600 árboles de Cacao</strong>, <strong>500 árboles de Naranja</strong> (más 50 matas adicionales), <strong>400 de Mandarina</strong>, 20 de Limón y un cultivo tecnificado de <strong>800 matas de Pitaya</strong>.
                        </p>
                        <p className="text-gray-600 mb-4 text-lg">
                            La seguridad hídrica es total, contando con <strong>agua propia de nacimiento</strong> y agua de acueducto. Además de la agricultura, la finca está equipada para la explotación pecuaria: posee un <strong>lago de peces productivo</strong>, marraneras, galpones y potreros con pasto suficiente para sostener entre 5 y 7 cabezas de ganado.
                        </p>
                        <p className="text-gray-600 text-lg font-semibold">
                            La propiedad incluye una casa principal espaciosa, con cocina amplia, múltiples habitaciones y corredores para disfrutar de la vista. Es la inversión perfecta para quien busca rentabilidad inmediata y calidad de vida.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Description;
