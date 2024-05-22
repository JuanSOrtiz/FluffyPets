import React from 'react';
import Logo from '../assets/images/logo.png';
import { Link , useNavigate} from 'react-router-dom';
import { useUser } from '../UserContext';

const Header = () => {
  const navigate = useNavigate()
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirige a la página de inicio de sesión después del logout
};

  return (
    <div className='ftco-navbar-light flex justify-between items-center bg-white z-3 py-2 px-4 shadow-md md:relative md:top-0 md:py-2 md:px-6'>
      <img src={Logo} alt="Logo" style={{height: '4.5rem'}} />
      <div className='flex py-2 px-4'>
        <Link to='/' className={`mx-16 font-semibold uppercase text-base  hover:text-green-500`} style={{paddingTop: '2.3rem', paddingBottom: '2.3rem', paddingLeft: '18px', paddingRight: '18px', fontWeight: '700', position: 'relative', opacity: '1'}} >Inicio</Link>
        <Link to='/adopciones' className={`mx-16 font-semibold uppercase text-base  hover:text-green-500`} style={{paddingTop: '2.3rem', paddingBottom: '2.3rem', paddingLeft: '18px', paddingRight: '18px', fontWeight: '700', position: 'relative', opacity: '1'}}>Adopciones</Link>
        <Link to='/' className={`mx-16 font-semibold uppercase text-base  hover:text-green-500`} style={{paddingTop: '2.3rem', paddingBottom: '2.3rem', paddingLeft: '18px', paddingRight: '18px', fontWeight: '700', position: 'relative', opacity: '1'}}>Productos</Link>
        <Link to='/' className={`mx-16 font-semibold uppercase text-base  hover:text-green-500`} style={{paddingTop: '2.3rem', paddingBottom: '2.3rem', paddingLeft: '18px', paddingRight: '18px', fontWeight: '700', position: 'relative', opacity: '1'}}>Contacto</Link>
        {user && user.name ? (
          <>
            <span className='mx-4 font-semibold uppercase text-base text-green-500 py-2' style={{paddingTop: '2.3rem', paddingBottom: '2.3rem', paddingLeft: '18px', paddingRight: '18px', fontWeight: '700', position: 'relative', opacity: '1'}}>{user.name}</span>
            <button onClick={handleLogout} className='mx-4 font-semibold uppercase text-base hover:text-green-500 py-2'>Logout</button>
          </>
        ) : (
          <Link to='/login' className='ml-4 font-semibold uppercase text-base hover:text-green-500 py-2' style={{paddingTop: '2.3rem', paddingBottom: '2.3rem', paddingLeft: '18px', paddingRight: '18px', fontWeight: '700', position: 'relative', opacity: '1'}}>Login</Link> 
        )}
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
