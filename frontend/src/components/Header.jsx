import React from 'react';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='ftco-navbar-light flex justify-between bg-white z-3 py-2 px-4 shadow-md md:relative md:top-0 md:py-2 md:px-6'>
      <img src={Logo} alt="Logo" className="h-14" />
      <div className='flex py-2 px-4'>
        <NavItem href="/" text="Inicio" isActive={true} />
        <NavItem href="/adopciones" text="Adopciones" isActive={false} />
        <NavItem href="#" text="Productos" isActive={false} />
        <NavItem href="#" text="Contacto" isActive={false} />
        <NavItem href="#" text="Login" isActive={false} />
      </div>
    </div>
  );
};

const NavItem = ({ href, text, isActive }) => {
  return (
    <a href={href} className={`mx-16 font-semibold uppercase text-base ${isActive ? 'text-green-500' : 'text-black'} hover:text-green-500`} style={{paddingTop: '2.3rem', paddingBottom: '2.3rem', paddingLeft: '18px', paddingRight: '18px', fontWeight: '700', position: 'relative', opacity: '1'}}>{text}</a>
  );
};

export default Header;
