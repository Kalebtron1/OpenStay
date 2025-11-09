import React from 'react';
import { useNavigate } from 'react-router-dom';
// Íconos para la calificación y ubicación
import { StarIcon, MapPinIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'; 
import propertyImage from "../assets/loft.jpg"
import dp1 from "../assets/dp1.jpeg"
import dp2 from "../assets/dp2.jpeg"
import db3 from "../assets/db3.avif"
import db4 from "../assets/db4.webp"
import dp5 from "../assets/image.png"


// Datos Mock para la integración rápida
const mockProperties = [
    { id: 1, title: "Modern Loft in Downtown", location: "Cluj-Napoca, Romania", pricePerNight: 250, rating: 4.85, imageUrl: propertyImage },
    { id: 2, title: "Cabaña Minimalista en el Bosque", location: "Valle de Bravo, Edo. Mex.", pricePerNight: 2800, rating: 4.91, imageUrl:dp1 },
    { id: 3, title: "Departamento Histórico con Balcón", location: "Centro, Querétaro", pricePerNight: 950, rating: 4.60, imageUrl: dp2 },
    { id: 4, title: "Suite de Diseño Industrial", location: "Americas, Guadalajara", pricePerNight: 1850, rating: 4.77, imageUrl: db3 },
    { id: 5, title: "Ático Panorámico de Lujo", location: "Polanco, CDMX", pricePerNight: 4500, rating: 4.95, imageUrl: db4 },
    { id: 6, title: "Estudio Céntrico y Luminoso", location: "Juárez, Monterrey", pricePerNight: 1100, rating: 4.52, imageUrl: dp5 },
];

const HomeGridAgil = () => {
    const navigate = useNavigate(); // ✅ Correcto: dentro del componente
    const properties = mockProperties;

    return (
        <div className="min-h-screen bg-gray-50">
            
            <header><link rel="monetization" href="https://ilp.interledger-test.dev/sparkclient" /></header>
            {/* Header / Barra de Filtros */}
            <header className="sticky top-0 z-10 bg-white shadow-sm border-b border-divider p-4">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <h1 className="text-3xl font-semibold text-primary">
      Explora Alojamientos
    </h1>
    <button className="flex items-center space-x-2 px-4 py-2 border border-divider rounded-md text-primary hover:bg-gray-50 transition duration-150">
      <AdjustmentsHorizontalIcon className="w-5 h-5 text-secondary" />
      <span className="font-medium text-sm">Filtros</span>
    </button>
  </div>
</header>

            {/* Contenedor Principal del Grid */}
            <main className="max-w-7xl mx-auto py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                    {properties.map((property) => (
                        <div
                            key={property.id}
                            className="group cursor-pointer bg-base-background rounded-xl 
                                       shadow-sm hover:shadow-lg transition duration-300 ease-in-out 
                                       border border-divider/50"
                            onClick={() => {
                                if (property.id === 1) {
                                    navigate('/payment'); // <-- Cambia '/tu-pagina' por tu ruta real
                                }
                            }}
                        >
                            {/* Imagen y Rating */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden">
                                <div
                                    className="w-full h-full bg-gray-200"
                                    style={{
                                        backgroundImage: `url(${property.imageUrl})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-t-xl"></div>
                                </div>
                                <div className="absolute top-3 right-3 flex items-center bg-base-background/90 p-1.5 rounded-full text-sm font-semibold text-primary shadow-md">
                                    <StarIcon className="w-4 h-4 text-primary mr-1" />
                                    {property.rating.toFixed(2)}
                                </div>
                            </div>

                            {/* Contenido de la Card */}
                            <div className="p-4 sm:p-6">
                                <h2 className="text-xl font-bold text-primary mb-1 truncate">
                                    {property.title}
                                </h2>
                                <div className="flex items-center text-secondary text-sm mb-3">
                                    <MapPinIcon className="w-4 h-4 mr-1 text-secondary" />
                                    <span className="truncate">{property.location}</span>
                                </div>
                                <div className="mt-2 pt-2 border-t border-divider">
                                    <p className="text-base text-primary">
                                        <span className="text-lg font-semibold text-primary">
                                            ${property.pricePerNight.toLocaleString('es-MX')}
                                        </span>
                                        <span className="text-secondary font-normal text-sm"> / noche</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default HomeGridAgil;
