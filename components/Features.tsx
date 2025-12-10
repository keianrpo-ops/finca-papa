
import React from 'react';

const FeatureCard: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
        <div className="text-green-600 text-5xl mb-4 inline-block">
            <i className={icon}></i>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{children}</p>
    </div>
);

const Features: React.FC = () => {
    return (
        <section id="features" className="py-20 bg-green-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800">Una Inversión para la Vida</h2>
                    <p className="text-lg text-gray-600 mt-2">Descubra todo lo que esta magnífica propiedad tiene para ofrecer.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard icon="fas fa-mountain-sun" title="11 Cuadras de Tierra Fértil">
                        Extenso terreno para expandir sus proyectos agrícolas o disfrutar de la inmensidad de la naturaleza.
                    </FeatureCard>
                    <FeatureCard icon="fas fa-house-chimney" title="Casas Construidas">
                        Espaciosas y acogedoras viviendas listas para habitar, perfectas para su familia y trabajadores.
                    </FeatureCard>
                    <FeatureCard icon="fas fa-seedling" title="5,000 Matas de Plátano">
                        Un cultivo en plena producción que garantiza un retorno de inversión y un negocio estable.
                    </FeatureCard>
                    <FeatureCard icon="fas fa-fish-fins" title="Lago de Peces de Cultivo">
                        Una fuente adicional de ingresos y un hermoso atractivo natural para la acuicultura.
                    </FeatureCard>
                </div>
            </div>
        </section>
    );
};

export default Features;
