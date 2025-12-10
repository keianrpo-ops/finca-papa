
export interface ImageData {
    src: string;
    alt: string;
    category: 'casa' | 'cultivos' | 'instalaciones' | 'paisaje';
}

export const images: ImageData[] = [
    // Casa y Exteriores
    { src: '/images/vista-casa-ppal.jpeg', alt: 'Vista aérea de la casa principal con techo rojo', category: 'casa' },
    { src: '/images/lateral-entrada.jpeg', alt: 'Entrada lateral de la casa con corredor', category: 'casa' },
    { src: '/images/lateral-pasillo.jpeg', alt: 'Pasillo lateral de la casa con baranda', category: 'casa' },
    { src: '/images/mirador-cocina.jpeg', alt: 'Mirador desde la cocina', category: 'casa' },
    { src: '/images/lateral-trasera.jpeg', alt: 'Parte trasera de la casa', category: 'casa' },
    { src: '/images/parqueadero.jpeg', alt: 'Zona de parqueo cubierta', category: 'casa' },
    { src: '/images/mesanin-casa-ppal.jpeg', alt: 'Mezanine de la casa principal', category: 'casa' },

    // Interiores
    { src: '/images/cocina.jpeg', alt: 'Cocina equipada', category: 'casa' },
    { src: '/images/baño-planta2.jpeg', alt: 'Baño de la planta superior', category: 'casa' },
    { src: '/images/cuanto-1psio2.jpeg', alt: 'Habitación en primer piso', category: 'casa' },
    { src: '/images/piesa-1.jpeg', alt: 'Habitación principal', category: 'casa' },
    { src: '/images/piesa-2.jpeg', alt: 'Habitación auxiliar', category: 'casa' },
    { src: '/images/pieza-3.jpeg', alt: 'Habitación de huéspedes', category: 'casa' },

    // Cultivos
    { src: '/images/cacao-cultivo.jpeg', alt: 'Árboles de Cacao en producción', category: 'cultivos' },
    { src: '/images/aguacate-cultivo.jpeg', alt: 'Cultivo de Aguacate', category: 'cultivos' },
    { src: '/images/pitaya-1.jpeg', alt: 'Cultivo de Pitaya', category: 'cultivos' },
    { src: '/images/frutales-entrada.jpeg', alt: 'Árboles frutales a la entrada', category: 'cultivos' },
    { src: '/images/cultivo-1.jpeg', alt: 'Panorámica de cultivos de plátano', category: 'cultivos' },
    { src: '/images/cultivo-2.jpeg', alt: 'Cultivos productivos', category: 'cultivos' },
    { src: '/images/cultivo-3.jpeg', alt: 'Vegetación y cultivos', category: 'cultivos' },
    { src: '/images/cultivo-distancia.jpeg', alt: 'Vista de los cultivos a la distancia', category: 'cultivos' },

    // Instalaciones y Agua
    { src: '/images/lago-toma1.jpeg', alt: 'Lago de peces productivo - Vista 1', category: 'instalaciones' },
    { src: '/images/lago-toma2.jpeg', alt: 'Lago de peces productivo - Vista 2', category: 'instalaciones' },
    { src: '/images/galpones-1.jpeg', alt: 'Galpones para aves', category: 'instalaciones' },
    { src: '/images/marranera-1.jpeg', alt: 'Cocheras para cerdos - Vista interna', category: 'instalaciones' },
    { src: '/images/marranera-2.jpeg', alt: 'Instalaciones para cerdos', category: 'instalaciones' },
    
    // Paisaje
    { src: '/images/vista-carretera.jpeg', alt: 'Carretera de acceso y paisaje', category: 'paisaje' },
];
