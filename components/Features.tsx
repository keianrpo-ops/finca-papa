
import React from 'react';

const FeatureCard: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
        <div className="text-green-600 text-5xl mb-4 inline-block">
            <i className={icon}></i>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base">{children}</p>
    </div>
);

const Features: React.FC = () => {
    return (
        <section id="features" className="py-20 bg-green-700">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white">Riqueza Productiva y Natural</h2>
                    <p className="text-lg text-green-200 mt-2">Una finca autosostenible con múltiples fuentes de ingreso.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard icon="fas fa-tree" title="Alta Producción Frutal">
                        500 Árboles de Naranja, 400 de Mandarina, 600 de Cacao, 20 de Limón y 800 matas de Pitaya listas para cosecha.
                    </FeatureCard>
                    <FeatureCard icon="fas fa-water" title="Abundancia de Agua">
                        Agua propia de nacimiento y servicio de acueducto. Garantía hídrica para cultivos, animales y consumo.
                    </FeatureCard>
                    <FeatureCard icon="fas fa-piggy-bank" title="Instalaciones Pecuarias">
                        Infraestructura lista: Marraneras, galpones para aves, potreros para 5-7 animales y lago de peces productivo.
                    </FeatureCard>
                    <FeatureCard icon="fas fa-house-chimney-window" title="Vivienda y Terreno">
                        11 Cuadras de tierra fértil con casa principal cómoda, cocina amplia, habitaciones múltiples y miradores.
                    </FeatureCard>
                </div>
            </div>
        </section>
    );
};

export default Features;
