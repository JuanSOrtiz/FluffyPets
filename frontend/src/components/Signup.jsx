import React from 'react'
import { useState, useEffect } from 'react';
import Header from './Header';
import bgImage from '../assets/images/fondo.png'

    
const Signup = () => {

    const [name, setName] = useState([''])
    const [email, setEmail] = useState([''])
    const [password, setPassword] = useState([''])
    const [gender, setGender] = useState([])
    const [birthDate, setBirthDate] = useState([''])
    const [selectedGender, setSelectedGender] = useState('')

    useEffect(() => {
        const fetchData = async () => {
          try {
            const genderResponse = await fetch("http://localhost:3000/gender");
    
            if (!genderResponse.ok) {
              throw new Error("No se pudieron obtener los datos");
            }
    
            const genderData = await genderResponse.json();
    
            setGender(genderData.map(item => item.name));
    
          } catch (error) {
            console.error("Error al obtener los datos", error);
          }
        };
    
        fetchData();
      }, []);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(selectedGender)
        try {
            const formData = {
                name: name,
                email: email,
                password: password,
                gender: selectedGender,
                birth_date: birthDate
            }

            const response = await fetch("http://localhost:3000/auth/register", {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

        if (!response.ok) {
            throw new Error("Error al enviar el formulario");
        }
        else{
            setName('');
            setEmail('');
            setPassword('');
            setBirthDate('');
            setSelectedGender('');
        }
      } catch (error) {
            console.error("Error al registrarse", error);
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

      <div className="max-w-xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-md" style={{width: '90%', padding: '20px'}}>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nombre:</label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password:</label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">Gender:</label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="gender"
              id="gender"
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
            >
              <option value="" disabled hidden>Selecciona género</option>
              {gender.map((gender, index) => (
                <option key={index} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthDate">Birth Date:</label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              id="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Signup