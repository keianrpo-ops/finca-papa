
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
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Un Legado de Prosperidad y Tranquilidad</h2>
                        <p className="text-gray-600 mb-4 text-lg">
                            Ubicada a pocos kilómetros de Uribe, en el corazón del Valle, esta finca no es solo una propiedad, es un proyecto de vida. Imagínese despertar cada mañana con vistas panorámicas a las majestuosas montañas, respirar el aire puro y escuchar el sonido de la naturaleza.
                        </p>
                        <p className="text-gray-600 mb-4 text-lg">
                            Con 11 cuadras de tierra productiva, la finca está lista para generar ingresos desde el primer día gracias a sus 5,000 matas de plátano en plena producción y un lago de peces listo para la acuicultura. Las casas construidas ofrecen comodidad y un estilo de vida campestre auténtico, con amplios corredores para disfrutar del paisaje y la brisa fresca.
                        </p>
                        <p className="text-gray-600 text-lg font-semibold">
                            Esta es una oportunidad única para invertir en un negocio rentable, asegurar un patrimonio para su familia y vivir en el paraíso.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Description;