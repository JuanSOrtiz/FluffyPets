import React from 'react'
import { useState, useEffect } from 'react'
import Header from './Header'
import PetForm from './PetForm'
import { useUser } from '../UserContext';
import {useNavigate} from 'react-router-dom';

export const Adoption = () => {

  const [pets, setPets] = useState([]);
  const { user } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [addPetModal, setAddPetModal] = useState(false)
  const [species, setSpecies] = useState([]);
  const [selectedSpecie, setSelectedSpecie] = useState('');
  const [selectedPet, setSelectedPet] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const response = await fetch('http://localhost:3000/specie'); // Ajusta la URL según tu backend
        if (!response.ok) {
          throw new Error('No se pudieron obtener las especies');
        }
        const data = await response.json();
        setSpecies(data);
      } catch (error) {
        console.error('Error al obtener las especies', error);
      }
    };

    fetchSpecies();
  }, []);



  useEffect(() => {

    
    const fetchData = async () => {
      try {
        let url = 'http://localhost:3000/pet/state/false';
        if (selectedSpecie) {
          url = `http://localhost:3000/pet/species/${selectedSpecie}/state/false`;
        }

        const petResponse = await fetch(url);

        if (!petResponse.ok) {
          throw new Error("No se pudieron obtener los datos");
        }

        const petData = await petResponse.json();


        // Mapear los datos de mascotas para incluir tanto el nombre como la URL de la imagen
        const mappedPets = petData.map(pet => ({
          id: pet.id,
          name: pet.name,
          birth_date: new Date(pet.birth_date).toLocaleDateString(),
          breed: pet.breed.name,
          specie: pet.specie.name,
          shelter: pet.shelter.name,
          state: pet.state,
          imgUrl: pet.image_url 
        }));

        setPets(mappedPets);
      } catch (error) {
        console.error("Error al obtener los datos", error);
      }
    };

    fetchData();
  }, [pets, selectedSpecie]);

  const handleSpecieChange = (event) => {
    setSelectedSpecie(event.target.value);
  };


  const handleImageClick = (pet) => {
    setSelectedPet(pet);
    setShowModal(true);
  };

  const handleSubmitAdoption = async (petId) => {

    try {
      if(!user.role){
        alert("Debes loguearte primero")
        return
      }

      console.log(petId)
      
      // Confirmar la acción con el usuario
      const confirmAction = window.confirm('¿Estás seguro de que quieres adoptar esta mascota?');

      if (!confirmAction) {
        return; // Si el usuario cancela, no hacemos nada
      }

      // Realizar la lógica para guardar la información
      const adoptionData = {
        user: user.email,
        pet: petId.name,
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
        alert("Error al guardar la adopcion")
        throw new Error('Error al guardar la adopción');   
      }

      const patchData = {
        state:true
      };

      // Cambiar el estado de la mascota a "true" mediante una solicitud PATCH
      const patchResponse = await fetch(`http://localhost:3000/pet/${petId.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patchData),
      });

      if (!patchResponse.ok) {
        alert("Error al actualizar el estado de la mascota");
        throw new Error('Error al actualizar el estado de la mascota');
      }
      
      setShowSuccessModal(true);
   

    } catch (error) {
      console.error('Error al manejar el clic en la imagen:', error);
    }
  }; 

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };
  

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleAddModal = () => {
    setAddPetModal(!addPetModal)
  };

  const handleCreatePet = () => {
    setAddPetModal(true);
  };

  const handleCloseModals = () => {
    closeSuccessModal();
    toggleModal();
  };

  const handleVerAdopcion = () =>{
    navigate('/see-Adoption');
    
  }

  return (
    <>
        <Header />
        <div className=' p-4 '>
          <div>
            {user.role === "admin" && (
              <button onClick={handleCreatePet} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block mr-4">
                Añadir Mascota
              </button>
            )}

            {user.role === "admin" && (
              <button onClick={handleVerAdopcion} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block">
                Ver adopciones
              </button>
            )}
          </div>
        </div>
        

        {user.role === "admin" && addPetModal&&(
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 max-w-md relative">
              <span className="absolute top-0 right-0 text-xl cursor-pointer" onClick={toggleAddModal}>&times;</span>
              <h2 className="text-2xl font-bold mb-4">Añadir una mascota</h2>
              <PetForm />
            </div>
          </div>
        )}

        {showModal && selectedPet&& (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 max-w-md relative">
              <span className="absolute top-0 right-0 text-xl cursor-pointer" onClick={toggleModal}>&times;</span>
              <h2 className="text-2xl font-bold mb-4">Información de la Mascota</h2>
              <img src={selectedPet.imgUrl} alt={selectedPet.name} className="w-full h-auto rounded-lg" />
              <p><strong>Nombre:</strong> {selectedPet.name}</p>
              <p><strong>Fecha de Nacimiento:</strong> {selectedPet.birth_date}</p>
              <p><strong>Raza:</strong> {selectedPet.breed}</p>
              <p><strong>Especie:</strong> {selectedPet.specie}</p>
              <p><strong>Refugio:</strong> {selectedPet.shelter}</p>
              <button onClick={() => handleSubmitAdoption(selectedPet)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
                Adoptar
              </button>
            </div>
          </div>
        )}

        {showSuccessModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 max-w-md relative">
              <span className="absolute top-0 right-0 text-xl cursor-pointer" onClick={closeSuccessModal}>&times;</span>
              <h2 className="text-2xl font-bold mb-4">¡Adopción exitosa!</h2>
              <p>Gracias por adoptar a {selectedPet.name}. Pronto nos pondremos en contacto contigo para completar el proceso.</p>
              <button onClick={handleCloseModals} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
                Cerrar
              </button>
            </div>
          </div>
        )}

        <div className="mt-4 mx-4">
          <label htmlFor="specie-select">Selecciona una especie:</label>
          <select id="specie-select" onChange={handleSpecieChange} value={selectedSpecie} className="ml-2 p-2 border rounded">
            <option value="">Todas</option>
            {species.map(specie => (
              <option key={specie.id} value={specie.id}>{specie.name}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-8 mx-4">
          {pets.map(pet => (
            <div key={pet.name} onClick={() => handleImageClick(pet)} className="cursor-pointer bg-white rounded-lg overflow-hidden">
              <img src={pet.imgUrl} alt={pet.name} className="w-full h-auto rounded-lg"/>
              <p className="text-center mt-2">{pet.name}</p>
            </div>
          ))}
        </div>

      
    </>
    
  )
}
