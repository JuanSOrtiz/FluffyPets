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
              <h3 className="font-semibold text-xl">Dog Walking</h3>
              <p className="text-gray-700 mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.</p>
              <a href="#" className="btn-custom inline-flex items-center justify-center bg-green-500 text-white rounded-full w-12 h-12 shadow-md transition duration-300"><FontAwesomeIcon icon={faChevronRight} /></a>
            </div>
          </div>  
          <div className="services-2 relative bg-white shadow rounded-lg overflow-hidden transition duration-300 hover:bg-green-500 hover:text-white">
            <div className="flex items-center justify-center bg-gray-200 rounded-full w-24 h-24 mx-auto my-6">
              <img src={ProductoIcon} alt="Producto Icon" className="w-16 h-16" /> 
            </div>
            <div className="text-center mb-6">
              <h3 className="font-semibold text-xl">Pet Daycare</h3>
              <p className="text-gray-700 mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.</p>
              <a href="#" className="btn-custom inline-flex items-center justify-center bg-green-500 text-white rounded-full w-12 h-12 shadow-md transition duration-300"><FontAwesomeIcon icon={faChevronRight} /></a>
            </div>
          </div>  
        </div>
      </div>
    </section>
  );
}

export default Content;
