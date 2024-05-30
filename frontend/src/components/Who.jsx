import React from 'react';
import SinFondo from '../assets/images/conte.png';
import HuellaIcon from '../assets/icons/huella.png';
import AnimalIcon from '../assets/icons/animal.png';
import FormuIcon from '../assets/icons/formu.png';

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
          <div className="col-md-7 pl-md-5 py-md-5 flex flex-col justify-center items-center">
            <div className="mb-10">
              <h2 className="font-bold text-2xl md:text-8xl font-amatic text-f99dc6">Nosotros</h2>
            </div>
            <div className="mb-10">
              <h2 className="font-bold text-2xl md:text-3xl">¿Quiénes somos?</h2>
            </div>
            <div className="description-section text-center mb-10">
              <p className="text-lg md:text-lg text-center">
              Fluffy Pets es un espacio dedicado a conectar a las mascotas más necesitadas con hogares amorosos. Somos una plataforma comprometida con la adopción responsable y el bienestar animal. Nuestra misión es brindar visibilidad a refugios de todo el país para poder amplificar su alcance y aumentar las oportunidades de adopción, proporcionando una plataforma unificada donde puedan mostrar a sus adorables mascotas en busca de un hogar permanente, ya que entendemos que cada mascota tiene una historia única y merece una oportunidad justa de encontrar un hogar feliz. Creemos firmemente en el poder de la comunidad para cambiar vidas y estamos aquí para facilitar ese proceso, uniendo a personas y mascotas de una manera significativa y duradera mediante procesos de adopción responsables.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="icon bg-f99dc6 rounded-full w-20 h-20 shadow-md relative flex items-center justify-center mb-4">
                  <img src={HuellaIcon} alt="Huella Icon" className="w-12 h-12 text-white" />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-xl mb-2">Habeas Data</h4>
                  <p className="mb-4 text-justify">En Fluffy Pets, nos tomamos muy en serio la protección de tus datos personales. Cumplimos con todas las normativas de protección de datos y valoramos tu privacidad. Todos los datos proporcionados a través de nuestra plataforma se utilizan únicamente con el propósito de facilitar el proceso de adopción de mascotas y nunca serán compartidos con terceros sin tu consentimiento explícito.</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="icon bg-f99dc6 rounded-full w-20 h-20 shadow-md relative flex items-center justify-center mb-4">
                  <img src={AnimalIcon} alt="Animal Icon" className="w-12 h-12 text-white" />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-xl mb-2">Refugios</h4>
                  <p className="mb-4 text-justify">En Fluffy Pets, trabajamos en estrecha colaboración con refugios y organizaciones de rescate de animales de todo el país para darles la visibilidad que merecen. Al unir fuerzas, podemos amplificar el alcance de estos refugios, aumentar las oportunidades de adopción y, lo más importante, cambiar vidas. Únete a nosotros en nuestra misión de darles una mejor vida a cada mascota.</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="icon bg-f99dc6 rounded-full w-20 h-20 shadow-md relative flex items-center justify-center mb-4">
                  <img src={FormuIcon} alt="Formu Icon" className="w-12 h-12 text-white" />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-xl mb-2">Proceso de adopción</h4>
                  <p className="mb-4 text-justify">En Fluffy Pets, nos comprometemos con la adopción responsable de mascotas. Nuestro objetivo es asegurar que cada mascota encuentre un hogar amoroso y permanente, donde pueda recibir el cuidado y la atención que merece. Para lograr esto, hemos establecido procesos de adopción cuidadosos y responsables mediante formulario y contacto directo con el adoptante para garantizar el bienestar de las mascotas. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;
