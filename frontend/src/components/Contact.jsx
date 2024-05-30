import React from 'react';
import Header from './Header';
import backgroundImage from '../assets/images/contacto.png';
import Footer from './Footer';
import InstagramIcon from '../assets/icons/instagram.png'
import FacebokIcon from '../assets/icons/facebook.png'
import WhatsappIcon from '../assets/icons/whatsapp.png'
import UbicacionIcon from '../assets/icons/ubicacion.png'

export const Contact = () => {
  return (
    <>
      <Header />
      
      <div className="hero-wrap h-screen relative overflow-hidden bg-cover bg-center flex items-center justify-center" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} data-stellar-background-ratio="0.5">
        <div className="overlay absolute top-0 left-0 right-0 bottom-0"></div>
        <div className="container">
          <div className="row no-gutters slider-text h-full justify-content-center items-center" data-scrollax-parent="true">
          </div>
        </div>
      </div>

      <div className="col-md-7 pl-md-5 py-md-5 flex flex-col justify-center items-center mt-8">
        <div className="mb-10">
          <h2 className="font-bold text-2xl md:text-5xl font-amatic text-f99dc6">¿Quieres estar al tanto de Fluffy Pets?</h2>
        </div>
      </div>

      <div className="mb-10 text-center">
        <h2 className="font-semibold text-2xl md:text-1xl">Síguenos en nuestras redes sociales</h2>
      </div>

      <div className="flex justify-center gap-20">
        <div className="flex flex-col items-center">
          <a href='https://www.instagram.com/fundacionhablemosxellos/?hl=es' target="_blank" rel="noopener noreferrer">
          <div className="icon bg-f99dc6 rounded-full w-20 h-20 shadow-md relative flex items-center justify-center mb-2">
            <img src={InstagramIcon} alt="Instagram Icon" className="w-12 h-12 text-white" />
          </div>
          </a>
          <div className="text-center">
            <h4 className="font-bold text-xl mb-0">Instagram</h4>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <a href='https://www.facebook.com/fundacionhablemosporellos' target="_blank" rel="noopener noreferrer">
          <div className="icon bg-f99dc6 rounded-full w-20 h-20 shadow-md relative flex items-center justify-center mb-2">
            <img src={FacebokIcon} alt="Facebook Icon" className="w-12 h-12 text-white" />
          </div>
          </a>
          <div className="text-center">
            <h4 className="font-bold text-xl mb-0">Facebook</h4>
          </div>
        </div>
      </div>

      <div className="col-md-7 pl-md-5 py-md-5 flex flex-col justify-center items-center mt-8">
        <div className="mb-10">
          <h2 className="font-bold text-2xl md:text-5xl font-amatic text-a4dadc">¿Necesitas comunicarte directamente con nosotros?</h2>
        </div>
      </div>

      <div className="mb-10 text-center">
        <h2 className="font-semibold text-2xl md:text-1xl">Escríbenos o visítanos</h2>
      </div>

      <div className="flex justify-center gap-20">
        <div className="flex flex-col items-center">
          <a href='https://w.app/3RIATx' target="_blank" rel="noopener noreferrer">
          <div className="icon bg-a4dadc rounded-full w-20 h-20 shadow-md relative flex items-center justify-center mb-2">
            <img src={WhatsappIcon} alt="Whatsapp Icon" className="w-12 h-12 text-white" />
          </div>
          </a>
          <div className="text-center">
            <h4 className="font-bold text-xl mb-0">WhatsApp</h4>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <a href='https://www.google.com/maps/place/Hablemos+Por+Ellos+Rionegro/@6.2086287,-75.3457094,15z/data=!4m2!3m1!1s0x0:0x30c326b62931bb01?sa=X&ved=1t:2428&ictx=111' target="_blank" rel="noopener noreferrer">
          <div className="icon bg-a4dadc rounded-full w-20 h-20 shadow-md relative flex items-center justify-center mb-2">
            <img src={UbicacionIcon} alt="Ubicacion Icon" className="w-12 h-12 text-white" />
          </div>
          </a>
          <div className="text-center">
            <h4 className="font-bold text-xl mb-0">Ubicación</h4>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};
