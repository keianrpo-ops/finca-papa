
import React from 'react';
import { ImageData } from '../constants';

interface GalleryProps {
    images: ImageData[];
    onImageClick: (src: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ images, onImageClick }) => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800">Explore Cada Rincón</h2>
                    <p className="text-lg text-gray-600 mt-2">Un vistazo a su futuro hogar y negocio. Haga clic en una imagen para ampliar.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <div 
                            key={index} 
                            className="overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                            onClick={() => onImageClick(image.src)}
                        >
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
