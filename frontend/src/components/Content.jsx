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

      {/* Nueva sección */}
      <section class="ftco-section ftco-no-pt ftco-no-pb">
        <div class="container">
          <div class="row d-flex no-gutters">
            <div class="col-md-5 d-flex">
              <div class="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0" style={{backgroundImage: "url(images/about-1.jpg)"}}></div>
            </div>
            <div class="col-md-7 pl-md-5 py-md-5">
              <div class="heading-section pt-md-5">
                <h2 class="mb-4">Why Choose Us?</h2>
              </div>
              <div class="row">
                <div class="col-md-6 services-2 w-100 d-flex">
                  <div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-stethoscope"></span></div>
                  <div class="text pl-3">
                    <h4>Care Advices</h4>
                    <p>Far far away, behind the word mountains, far from the countries.</p>
                  </div>
                </div>
                <div class="col-md-6 services-2 w-100 d-flex">
                  <div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-customer-service"></span></div>
                  <div class="text pl-3">
                    <h4>Customer Supports</h4>
                    <p>Far far away, behind the word mountains, far from the countries.</p>
                  </div>
                </div>
                <div class="col-md-6 services-2 w-100 d-flex">
                  <div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-emergency-call"></span></div>
                  <div class="text pl-3">
                    <h4>Emergency Services</h4>
                    <p>Far far away, behind the word mountains, far from the countries.</p>
                  </div>
                </div>
                <div class="col-md-6 services-2 w-100 d-flex">
                  <div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-veterinarian"></span></div>
                  <div class="text pl-3">
                    <h4>Veterinary Help</h4>
                    <p>Far far away, behind the word mountains, far from the countries.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Content;
