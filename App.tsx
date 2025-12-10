
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Description from './components/Description';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import { images } from './constants';

const App: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="bg-gray-50 text-gray-800 font-sans">
            <Header />
            <main>
                <Hero />
                <Features />
                <Description onImageClick={setSelectedImage} />
                <Gallery images={images} onImageClick={setSelectedImage} />
                <Contact />
            </main>
            <Footer />
            {selectedImage && <ImageModal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />}
        </div>
    );
};

export default App;
