import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import AdoptaIcon from '../assets/icons/adopta.png';
import ProductoIcon from '../assets/icons/producto.png';

const Content = () => {
  return (
    <section className="ftco-section bg-light ftco-no-pt ftco-intro py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="services relative bg-white shadow rounded-lg overflow-hidden transition duration-300 hover:bg-green-500 hover:text-white">
            <div className="flex items-center justify-center bg-gray-200 rounded-full w-24 h-24 mx-auto my-6">
              <img src={AdoptaIcon} alt="Adopta Icon" className="w-16 h-16" /> 
            </div>
            <div className="text-center mb-6">
              <h3 className="font-semibold text-xl">Adopta</h3>
              <p className="text-gray-700 mb-4">Nuestro servicio de adopción de mascotas conecta a animales necesitados con hogares amorosos, ofreciendo una segunda oportunidad para que encuentres un compañero fiel y transformes su vida y la tuya.</p>
              <a href="/adopciones" className="btn-custom inline-flex items-center justify-center bg-green-500 text-white rounded-full w-12 h-12 shadow-md transition duration-300 hover:bg-white hover:text-green-500"><FontAwesomeIcon icon={faChevronRight} /></a>
            </div>
          </div>  
          <div className="services-2 relative bg-white shadow rounded-lg overflow-hidden transition duration-300 hover:bg-green-500 hover:text-white">
            <div className="flex items-center justify-center bg-gray-200 rounded-full w-24 h-24 mx-auto my-6">
              <img src={ProductoIcon} alt="Producto Icon" className="w-16 h-16" /> 
            </div>
            <div className="text-center mb-6">
              <h3 className="font-semibold text-xl">Productos</h3>
              <p className="text-gray-700 mb-4">Ofrecemos una amplia gama de productos de alta calidad para mascotas, desde alimentos nutritivos y juguetes divertidos hasta accesorios cómodos y seguros. Todo lo que necesitas para mantener a tu compañero feliz y saludable, en un solo lugar.</p>
              <a href="/" className="btn-custom inline-flex items-center justify-center bg-green-500 text-white rounded-full w-12 h-12 shadow-md transition duration-300 hover:bg-white hover:text-green-500"><FontAwesomeIcon icon={faChevronRight} /></a>
            </div>
          </div>  
        </div>
      </div>
    </section>
  );
}

export default Content;
