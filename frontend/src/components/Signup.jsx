import React from 'react'
import { useState, useEffect } from 'react';
import Header from './Header';

    
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
        <Header/>
        <form onSubmit={handleSubmit}>
            <label>Nombre: </label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

            <label>Email: </label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <label>Password: </label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />

            <label>Gender: </label>
            <select 
                name="gender" 
                id="gender"
                value={selectedGender}
                onChange={(e)=>setSelectedGender(e.target.value)}
            >
                <option value="" disabled hidden>Selecciona género</option>
                {gender.map((gender,index)=>(
                <option key = {index} value={gender} >
                    {gender}
                </option>
                ))}
                
            </select>

            <label>Birth Date: </label>
            <input type="date" value={birthDate} onChange={(e)=>setBirthDate(e.target.value)}/>
            
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default Signup