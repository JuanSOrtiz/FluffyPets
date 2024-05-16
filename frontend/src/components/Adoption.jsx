import React from 'react'
import { useState, useEffect } from 'react'
import Header from './Header'
import PetForm from './PetForm'
import { useUser } from '../UserContext';

export const Adoption = () => {

  const [pets, setPets] = useState([]);
  const { user } = useUser();


  useEffect(() => {

    if (user && user.email) {
      console.log('Usuario logueado:', user.email); // Verificar el correo del usuario
    } else {
      console.log('Usuario no logueado o sin correo'); // Caso en el que no haya usuario o correo
    }
    const fetchData = async () => {
      try {

        const petResponse = await fetch("http://localhost:3000/pet");

        if (!petResponse.ok) {
          throw new Error("No se pudieron obtener los datos");
        }

        const petData = await petResponse.json();


        // Mapear los datos de mascotas para incluir tanto el nombre como la URL de la imagen
        const mappedPets = petData.map(pet => ({
          name: pet.name,
          imgUrl: pet.image_url || 'src/assets/foto1.png'
        }));

        setPets(mappedPets);
      } catch (error) {
        console.error("Error al obtener los datos", error);
      }
    };

    fetchData();
  }, []);


  const handleImageClick = async (petId) => {

    try {
      
      // Confirmar la acción con el usuario
      const confirmAction = window.confirm('¿Estás seguro de que quieres adoptar esta mascota?');

      if (!confirmAction) {
        return; // Si el usuario cancela, no hacemos nada
      }

      // Realizar la lógica para guardar la información
      const adoptionData = {
        user: user.email,
        pet: petId,
        adoption_date: new Date().toISOString(),
        adoption_status: "Rechazado"
      };

      // Ejemplo: Enviar los datos al servidor
      const response = await fetch('http://localhost:3000/adoption', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adoptionData),
      });

      if (!response.ok) {
        throw new Error('Error al guardar la adopción');
      }

      console.log('Adopción guardada exitosamente');
    } catch (error) {
      console.error('Error al manejar el clic en la imagen:', error);
    }
  };

  return (
    <>
      <Header/>
      <PetForm/>
      <div>
          <div>
            <img src="src/assets/images/ternura.jpg"/>
            <p>Mascota 1</p>
          </div>

          <div>
            <img src="src/assets/images/hermoso.jpg"/>
            <p>Mascota 2</p>
          </div>
      </div>

      
    </>
    
  )
}
