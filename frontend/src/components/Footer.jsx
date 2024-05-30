import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link , useNavigate} from 'react-router-dom';
import { useUser } from '../UserContext';

const Footer = () => {
  const navigate = useNavigate()
  const { user, logout } = useUser();
  
  return (
    <footer className="footer bg-gray-600 text-white py-28 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="footer-item">
            <h2 className="footer-heading text-xl mb-6 font-bold">Fluffy Pets</h2>
            <p className="mb-6">Siempre comprometidos con el bienestar animal y la adopción responsable de nuestros peluditos</p>
            <ul className="ftco-footer-social p-0 flex gap-3">
              <li className="ftco-animate"><a href="https://w.app/3RIATx" data-toggle="tooltip" data-placement="top" title="WhatsApp"><FontAwesomeIcon icon={faWhatsapp} className="text-xl" /></a></li>
              <li className="ftco-animate"><a href="https://www.facebook.com/fundacionhablemosporellos" data-toggle="tooltip" data-placement="top" title="Facebook"><FontAwesomeIcon icon={faFacebook} className="text-xl" /></a></li>
              <li className="ftco-animate"><a href="https://www.instagram.com/fundacionhablemosxellos/?hl=es" data-toggle="tooltip" data-placement="top" title="Instagram"><FontAwesomeIcon icon={faInstagram} className="text-xl" /></a></li>
            </ul>
          </div>
          <div className="footer-item">
            <h2 className="footer-heading text-xl mb-6 font-bold">Links</h2>
            <ul className="list-none">
              <li><a href="#" className="py-2 block hover:text-green-500">Inicio</a></li>
              <li><Link to='/adopciones'  className={"py-2 block hover:text-green-500"}>Adopciones</Link></li>
              <li><a href="/contacto" className="py-2 block hover:text-green-500">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-item">
            <h2 className="footer-heading text-xl mb-6 font-bold">¿Tienes preguntas?</h2>
            <ul className="list-none">
              <li className="mb-2"><span className="icon"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl mr-2" /></span><span className="text">Vereda Los Pinos, finca 98, Rionegro, Antioquia</span></li>
              <li className="mb-2"><a href="#"><span className="icon"><FontAwesomeIcon icon={faPhone} className="text-xl mr-2" /></span><span className="text">+57 304 571 7747</span></a></li>
              <li><a href="#"><span className="icon"><FontAwesomeIcon icon={faEnvelope} className="text-xl mr-2" /></span><span className="text">Fluffypets@gmail.com</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
