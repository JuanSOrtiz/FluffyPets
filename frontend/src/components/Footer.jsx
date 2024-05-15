import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white py-28 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="footer-item">
            <h2 className="footer-heading text-xl mb-6 font-bold">Petsitting</h2>
            <p className="mb-6">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <ul className="ftco-footer-social p-0 flex gap-3">
              <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="WhatsApp"><FontAwesomeIcon icon={faWhatsapp} className="text-xl" /></a></li>
              <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><FontAwesomeIcon icon={faFacebook} className="text-xl" /></a></li>
              <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><FontAwesomeIcon icon={faInstagram} className="text-xl" /></a></li>
            </ul>
          </div>
          <div className="footer-item">
            <h2 className="footer-heading text-xl mb-6 font-bold">Quick Links</h2>
            <ul className="list-none">
              <li><a href="#" className="py-2 block hover:text-green-500">Inicio</a></li>
              <li><a href="#" className="py-2 block hover:text-green-500">Adopciones</a></li>
              <li><a href="#" className="py-2 block hover:text-green-500">Productos</a></li>
              <li><a href="#" className="py-2 block hover:text-green-500">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-item">
            <h2 className="footer-heading text-xl mb-6 font-bold">Have a Questions?</h2>
            <ul className="list-none">
              <li className="mb-2"><span className="icon"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl mr-2" /></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
              <li className="mb-2"><a href="#"><span className="icon"><FontAwesomeIcon icon={faPhone} className="text-xl mr-2" /></span><span className="text">+2 392 3929 210</span></a></li>
              <li><a href="#"><span className="icon"><FontAwesomeIcon icon={faEnvelope} className="text-xl mr-2" /></span><span className="text">info@yourdomain.com</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
