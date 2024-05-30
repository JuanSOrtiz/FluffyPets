import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import AdoptaIcon from '../assets/icons/adopta.png';
import ContactoIcon from '../assets/icons/nube.png';

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
              <p className="text-gray-700 mb-4">Nuestro servicio de adopción de mascotas conecta a animales necesitados con hogares amorosos, ofreciendo la maravillosa oportunidad para que encuentres un compañero fiel y transformes su vida y la tuya.</p>
              <a href="/adopciones" className="btn-custom inline-flex items-center justify-center bg-green-500 text-white rounded-full w-12 h-12 shadow-md transition duration-300 hover:bg-white hover:text-green-500"><FontAwesomeIcon icon={faChevronRight} /></a>
            </div>
          </div>  
          <div className="services-2 relative bg-white shadow rounded-lg overflow-hidden transition duration-300 hover:bg-green-500 hover:text-white">
            <div className="flex items-center justify-center bg-gray-200 rounded-full w-24 h-24 mx-auto my-6">
              <img src={ContactoIcon} alt="Producto Icon" className="w-16 h-16" /> 
            </div>
            <div className="text-center mb-6">
              <h3 className="font-semibold text-xl">Contáctanos</h3>
              <p className="text-gray-700 mb-4">¿Tienes preguntas sobre el proceso de adopción? ¿Quieres que tu refugio haga parte de esta gran iniciativa? ¡Estamos aquí para ayudarte! No dudes en ponerte en contacto con nosotros.</p>
              <a href="/contacto" className="btn-custom inline-flex items-center justify-center bg-green-500 text-white rounded-full w-12 h-12 shadow-md transition duration-300 hover:bg-white hover:text-green-500"><FontAwesomeIcon icon={faChevronRight} /></a>
            </div>
          </div>  
        </div>
      </div>
    </section>
  );
}

export default Content;
