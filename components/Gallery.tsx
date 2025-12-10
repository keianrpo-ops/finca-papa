
import React, { useState } from 'react';
import { ImageData } from '../constants';

interface GalleryProps {
    images: ImageData[];
    onImageClick: (src: string) => void;
}

const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'casa', label: 'Casa Principal' },
    { id: 'cultivos', label: 'Cultivos' },
    { id: 'instalaciones', label: 'Instalaciones y Lago' },
    { id: 'paisaje', label: 'Paisaje' },
];

const Gallery: React.FC<GalleryProps> = ({ images, onImageClick }) => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredImages = activeCategory === 'all' 
        ? images 
        : images.filter(img => img.category === activeCategory);

    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800">Galería Fotográfica</h2>
                    <p className="text-lg text-gray-600 mt-2">Explore las instalaciones, los cultivos y la casa.</p>
                    
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                                    activeCategory === cat.id
                                        ? 'bg-green-600 text-white shadow-lg transform scale-105'
                                        : 'bg-white text-gray-600 hover:bg-green-100'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredImages.map((image, index) => (
                        <div 
                            key={index} 
                            className="overflow-hidden rounded-lg shadow-lg cursor-pointer group relative aspect-square"
                            onClick={() => onImageClick(image.src)}
                        >
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-end justify-start p-4">
                                <span className="text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-black drop-shadow-md">
                                    <i className="fas fa-search-plus mr-2"></i>Ver más
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
