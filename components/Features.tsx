
import React from 'react';

const FeatureCard: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] max-w-sm">
        <div className="text-green-600 text-5xl mb-4 inline-block">
            <i className={icon}></i>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{children}</p>
    </div>
);

const Features: React.FC = () => {
    return (
        <section id="features" className="py-20 bg-green-700">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white">Riqueza Productiva y Seguridad</h2>
                    <p className="text-lg text-green-200 mt-2">Una finca autosostenible, segura y lista para producir.</p>
                </div>
                {/* Usamos flex wrap para centrar las tarjetas si son impares (5 tarjetas) */}
                <div className="flex flex-wrap justify-center gap-8">
                    <FeatureCard icon="fas fa-tree" title="El Protagonista: Banano">
                        Producción masiva con <strong>5.000 matas de Banano</strong> y cultivo de Plátano complementario. Además: <strong>600 de Cacao</strong>, <strong>400 de Naranja</strong>, <strong>40 de Mandarina</strong>, <strong>20 de Limón</strong>, Aguacate y <strong>800 matas de Pitaya</strong>.
                    </FeatureCard>
                    
                    <FeatureCard icon="fas fa-shield-alt" title="Seguridad Monitorizada">
                        Tranquilidad total con un sistema moderno de <strong>15 cámaras de vigilancia</strong> (CCTV) que cubren puntos estratégicos de la propiedad, monitoreable desde la casa.
                    </FeatureCard>

                    <FeatureCard icon="fas fa-water" title="Abundancia de Agua">
                        Agua propia de nacimiento y servicio de acueducto. Garantía hídrica para cultivos, animales y consumo.
                    </FeatureCard>

                    <FeatureCard icon="fas fa-piggy-bank" title="Instalaciones Pecuarias">
                        Infraestructura lista: Marraneras, galpones para aves, potreros para 5-7 animales y lago de peces productivo.
                    </FeatureCard>

                    <FeatureCard icon="fas fa-ruler-combined" title="Gran Extensión">
                        12.5 Cuadras (8 Hectáreas) de tierra fértil con casa principal cómoda, cocina amplia, habitaciones y miradores.
                    </FeatureCard>
                </div>
            </div>
        </section>
    );
};

export default Features;
