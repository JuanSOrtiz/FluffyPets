import React from 'react'
import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { useUser } from '../UserContext';
import Header from './Header';
import bgImage from '../assets/images/fondo.png';
import Footer from './Footer';

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [name, setName] = useState('')
    const { user, setUser } = useUser();
    const [loggedIn, setLoggedIn] = useState(false);


    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const formData = {
                email: email,
                password: password
            }

            const response = await fetch("http://localhost:3000/auth/login", {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const userResponse = await fetch(`http://localhost:3000/user/${email}`)

            const userData = await userResponse.json()

            if (!response.ok) {
                alert("Correo o contraseña incorrectos")
                throw new Error("Error al enviar el formulario");
            }
            else{
                setUser({ role: userData.role, name: userData.name, email: userData.email });
                setEmail('');
                setPassword('');
                setLoggedIn(true);
                navigate('/');
            }
      } catch (error) {
            setPassword('');
            console.error("Error al logearse", error);
      }

    }
  
   
  return (
    <>
      <Header />

      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>

      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md" style={{width: '90%', padding: '20px'}}>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password:</label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enviar
          </button>
          <Link
            className="block text-sm mt-4 text-green-500 hover:text-green-700"
            to="/signup"
          >
            ¿No estás registrado aún?
          </Link>
        </form>
        {user.role && <p className="text-gray-700 mt-4">Rol del usuario: {user.role}</p>}
        {loggedIn && <Redirect to="/" />}
      </div>
      </div>

      <Footer/>
    </>
  )
}

export default Login