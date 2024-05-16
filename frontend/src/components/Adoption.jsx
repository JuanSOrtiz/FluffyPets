import React from 'react'
import { useState, useEffect } from 'react'
import Header from './Header'
import PetForm from './PetForm'
import { useUser } from '../UserContext';

export const Adoption = () => {

  const [pets, setPets] = useState([]);
  const { user } = useUser();
  const [showModal, setShowModal] = useState(false);


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
  }, [pets]);


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

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCreatePet = () => {
    toggleModal();
  };

  return (
    <>
        <Header />
        {user.role === "admin" && (
          <button onClick={handleCreatePet} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
            Añadir Mascota
          </button>
        )}

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 max-w-md relative">
              <span className="absolute top-0 right-0 text-xl cursor-pointer" onClick={toggleModal}>&times;</span>
              <h2 className="text-2xl font-bold mb-4">Añadir una mascota</h2>
              <PetForm />
            </div>
          </div>
        )}

        <div className="grid grid-cols-3 gap-6 mt-8">
          {pets.map(pet => (
            <div key={pet.name} onClick={() => handleImageClick(pet.name)} className="cursor-pointer bg-green-300 rounded-lg overflow-hidden">
              <img src={pet.imgUrl} alt={pet.name} className="w-full h-auto rounded-lg" style={{ height: "300px" }} />
              <p className="text-center mt-2">{pet.name}</p>
            </div>
          ))}
        </div>

      
    </>
    
  )
}
