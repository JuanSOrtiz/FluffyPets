import React from 'react';
import SinFondo from '../assets/images/conte.png';
import HuellaIcon from '../assets/icons/huella.png';
import AnimalIcon from '../assets/icons/animal.png';
import FormuIcon from '../assets/icons/formu.png'


const Who = () => {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb flex justify-center items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="relative">
              <img src={SinFondo} alt="SinFondo" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
          <div className="col-md-7 pl-md-5 py-md-5 d-flex flex-column justify-content-center align-items-center">
            <div className="heading-section text-center">
              <h2 className="mb-4 font-bold text-2xl md:text-3xl">¿Quiénes somos?</h2>
            </div>
            <div className="description-section text-center mb-4">
              <p className="text-lg md:text-xl">
                Somos una organización dedicada a conectar mascotas necesitadas con hogares amorosos. 
                Nuestra misión es proporcionar una segunda oportunidad a estos animales, brindando apoyo y 
                recursos a las familias adoptivas. Creemos en el poder transformador de la adopción y nos 
                esforzamos por hacer el proceso lo más fácil y gratificante posible.
              </p>
            </div>
            <div className="row">
              <div className="col-md-6 services-2 flex flex-col items-center">
                <div className="icon bg-green-500 rounded-full w-20 h-20 shadow-md relative flex items-center justify-center mb-4">
                  <img src={HuellaIcon} alt="Huella Icon" className="w-12 h-12 text-white" />
                </div>
                <div className="text text-center">
                  <h4 className="font-bold text-xl">Care Advices</h4>
                  <p>Far far away, behind the word mountains, far from the countries.</p>
                </div>
              </div>
              <div className="col-md-6 services-2 flex flex-col items-center mt-4">
                <div className="icon bg-green-500 rounded-full w-20 h-20 shadow-md relative flex items-center justify-center mb-4">
                  <img src={AnimalIcon} alt="Animal Icon" className="w-12 h-12 text-white" />
                </div>
                <div className="text text-center">
                  <h4 className="font-bold text-xl">Customer Supports</h4>
                  <p>Far far away, behind the word mountains, far from the countries.</p>
                </div>
              </div>
              <div className="col-md-6 services-2 flex flex-col items-center mt-4">
                <div className="icon bg-green-500 rounded-full w-20 h-20 shadow-md relative flex items-center justify-center mb-4">
                  <img src={FormuIcon} alt="Formu Icon" className="w-12 h-12 text-white" />
                </div>
                <div className="text text-center">
                  <h4 className="font-bold text-xl">Care Advices</h4>
                  <p>Far far away, behind the word mountains, far from the countries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Who;


