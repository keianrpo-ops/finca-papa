
import React from 'react';

interface DescriptionProps {
    onImageClick: (src: string) => void;
}

const Description: React.FC<DescriptionProps> = ({ onImageClick }) => {
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
                        <div className="bg-green-50 border-l-8 border-green-600 p-6 rounded-r-lg shadow-sm mb-8">
                            <h3 className="text-xl font-bold text-green-800 uppercase tracking-wide mb-1">Extensión Total del Terreno</h3>
                            <p className="text-4xl font-extrabold text-green-700">
                                12.5 Cuadras <span className="text-2xl font-normal text-gray-600 block sm:inline"> (8 Hectáreas)</span>
                            </p>
                        </div>

                        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Un Negocio Rentable, Seguro y Productivo</h2>
                        <p className="text-gray-600 mb-4 text-lg">
                            Ubicada estratégicamente a pocos kilómetros de Uribe, Valle, esta finca es una joya agrícola en plena producción. El cultivo protagonista es el <strong>Banano, con 5.000 matas establecidas</strong>, acompañado de cultivos de plátano en menor escala y <strong>600 árboles de Cacao</strong> generando rentabilidad constante.
                        </p>
                        <p className="text-gray-600 mb-4 text-lg">
                            La diversidad frutal es impresionante: <strong>400 árboles de Naranja</strong>, <strong>40 de Mandarina</strong>, <strong>20 de Limón</strong>, cultivos de <strong>Aguacate</strong> y <strong>800 matas de Pitaya</strong> listas para cosecha.
                        </p>
                        
                        <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-800 mb-4">
                            <h4 className="font-bold text-gray-800 flex items-center gap-2">
                                <i className="fas fa-video text-red-600"></i> Tecnología y Seguridad
                            </h4>
                            <p className="text-gray-700 mt-1 mb-3">
                                La propiedad cuenta con un <strong>completo sistema de vigilancia de 15 cámaras</strong> de seguridad instaladas. Usted podrá tener control visual total de los accesos, los cultivos y las instalaciones desde la comodidad de la casa principal, garantizando tranquilidad para su inversión y su familia.
                            </p>
                            <img 
                                src="/images/sistema-seguridad.jpeg" 
                                alt="Sistema de cámaras de seguridad" 
                                className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                                onClick={() => onImageClick('/images/sistema-seguridad.jpeg')}
                            />
                            <p className="text-xs text-gray-500 mt-2 italic text-center">Click en la imagen para ampliar</p>
                        </div>

                        <p className="text-gray-600 mb-4 text-lg">
                            La seguridad hídrica es total con <strong>agua propia de nacimiento</strong> y acueducto. Además, posee infraestructura pecuaria completa: <strong>lago de peces</strong>, marraneras, galpones y potreros para ganado.
                        </p>
                        <p className="text-gray-600 text-lg font-semibold">
                            Incluye una casa principal espaciosa, con cocina amplia, múltiples habitaciones y corredores para disfrutar de la vista. Es la inversión perfecta: productiva, segura y placentera.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Description;
