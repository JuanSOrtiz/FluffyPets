import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useUser } from '../UserContext';
import Header from './Header';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [name, setName] = useState('')
    const { user, setUser } = useUser();


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
                throw new Error("Error al enviar el formulario");
            }
            else{
                setUser({ role: userData.role, name: userData.name, email: userData.email });
                setEmail('');
                setPassword('');
            }
      } catch (error) {
            setPassword('');
            console.error("Error al logearse", error);
      }

    }
  return (
    <>
        <Header></Header>
        <form onSubmit={handleSubmit}>

            <label>Email: </label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <label>Password: </label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          
        <button type="submit">Enviar</button>
        <Link to="/signup">No estas registrado aun?</Link>

      </form>

      {user.role && <p>Rol del usuario: {user.role}</p>}
    </>
  )
}

export default Login