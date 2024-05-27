import React, { useState, useEffect } from 'react';
import Header from './Header';
import PetForm from './PetForm';
import { useUser } from '../UserContext';
import { useNavigate } from 'react-router-dom';

export const Adoption = () => {
  const [pets, setPets] = useState([]);
  const { user } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [addPetModal, setAddPetModal] = useState(false);
  const [species, setSpecies] = useState([]);
  const [selectedSpecie, setSelectedSpecie] = useState('');
  const [selectedPet, setSelectedPet] = useState(null);
  const [wannaAdopt, setWannaAdopt] = useState(false);
  const [cellphoneNumber, setCellphoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [liveWithQuant, setLiveWithQuant] = useState('');
  const [ownHouse, setOwnHouse] = useState('');
  const [responsibility, setResponsibility] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false); // Nuevo estado para mostrar modal de inicio de sesión

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const response = await fetch('http://localhost:3000/specie');
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

  const fetchPets = async () => {
    try {
      let url = 'http://localhost:3000/pet/state/false';
      if (selectedSpecie) {
        url = `http://localhost:3000/pet/species/${selectedSpecie}/state/false`;
      }
      const petResponse = await fetch(url);
      if (!petResponse.ok) {
        throw new Error('No se pudieron obtener los datos de las mascotas');
      }
      const petData = await petResponse.json();
      const mappedPets = petData.map(pet => ({
        id: pet.id,
        name: pet.name,
        birth_date: new Date(pet.birth_date).toLocaleDateString(),
        breed: pet.breed.name,
        specie: pet.specie.name,
        shelter: pet.shelter.name,
        state: pet.state,
        animal_sex: pet.animal_sex.name,
        imgUrl: pet.image_url,
      }));
      setPets(mappedPets);
    } catch (error) {
      console.error('Error al obtener los datos de las mascotas:', error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, [selectedSpecie, pets]);

  const updatePetsList = async () => {
    try {
      await fetchPets();
    } catch (error) {
      console.error('Error al actualizar la lista de mascotas:', error);
    }
  };

  const handleSpecieChange = (event) => {
    setSelectedSpecie(event.target.value);
  };

  const handleImageClick = (pet) => {
    if (!user.role) {
      setShowLoginModal(true); // Mostrar modal de inicio de sesión si el usuario no está autenticado
      return;
    }
    setSelectedPet(pet);
    setShowModal(true);
  };

  const handleSubmitAdoption = async (event) => {
    event.preventDefault();


    try {
      const confirmAction = window.confirm('¿Estás seguro de que quieres adoptar esta mascota?');

      if (!confirmAction) {
        return;
      }

      const adoptionData = {
        user: user.email,
        pet: selectedPet.name,
        adoption_date: new Date().toISOString(),
        adoption_status: "En revisión",
        cellphone_number: cellphoneNumber,
        address,
        neighborhood,
        live_with_quant: parseInt(liveWithQuant),
        own_house: ownHouse === 'true',
        responsibility: responsibility === 'true'
      };

      console.log(JSON.stringify(adoptionData))

      const response = await fetch('http://localhost:3000/adoption', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adoptionData),
      });

      if (!response.ok) {
        alert('Error al guardar la adopción');
        throw new Error('Error al guardar la adopción');
      }

      const patchData = {
        state: true,
      };

      const patchResponse = await fetch(`http://localhost:3000/pet/${selectedPet.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patchData),
      });

      if (!patchResponse.ok) {
        alert('Error al actualizar el estado de la mascota');
        throw new Error('Error al actualizar el estado de la mascota');
      }

      setShowSuccessModal(true);
      fetchPets();
    } catch (error) {
      console.error('Error al manejar el clic en la imagen:', error);
    }
  };

  // Función para calcular la edad a partir de la fecha de nacimiento
  const calculateAge = (birthDate) => {
    if (!birthDate) return ''; // Manejar el caso en que la fecha de nacimiento sea undefined o null
  
    // Usar expresiones regulares para dividir la cadena en día, mes y año
    const [day, month, year] = birthDate.split(/[-\/]/);
  
    // Construir una cadena de fecha en formato reconocible por JavaScript (yyyy-mm-dd)
    const formattedBirthDate = `${year}-${month}-${day}`;
  
    const today = new Date();
    const birthDateObj = new Date(formattedBirthDate);
    
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--; // Restar 1 si todavía no ha pasado el cumpleaños este año
    }
    return age;
  };
  
  

  // Función para cerrar el modal de inicio de sesión
  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleNewForm = () => {
    setWannaAdopt(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleAddModal = () => {
    setAddPetModal(!addPetModal);
  };

  const handleCreatePet = () => {
    setAddPetModal(true);
  };

  const handleCloseModals = () => {
    closeSuccessModal();
    toggleModal();
  };

  const handleVerAdopcion = () => {
    navigate('/see-Adoption');
  };

  return (
    <>
      <Header />
      <div className="p-4">
        <div>
          {user.role === 'admin' && (
            <>
              <button
                onClick={handleCreatePet}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block mr-4"
              >
                Añadir Mascota
              </button>
              <button
                onClick={handleVerAdopcion}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block"
              >
                Ver adopciones
              </button>
            </>
          )}
        </div>
      </div>

      {user.role === 'admin' && addPetModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" style={{ zIndex: 999 }}>
          <div className="bg-white rounded-lg p-8 max-w-md relative">
            <span className="absolute top-0 right-0 text-xl cursor-pointer" onClick={toggleAddModal}>
              &times;
            </span>
            <h2 className="text-2xl font bold mb-4">Añadir una mascota</h2>
            <PetForm/>
          </div>
        </div>
      )}
    {showModal && selectedPet && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" style={{ zIndex: 999 }}>
        <div className="bg-white rounded-lg p-8 max-w-md relative">
          <span className="absolute top-0 right-0 text-xl cursor-pointer" onClick={toggleModal}>
            &times;
          </span>
          <h2 className="text-2xl font-bold mb-4">Información de la Mascota</h2>
          <img src={selectedPet.imgUrl} alt={selectedPet.name} className="w-full h-auto rounded-lg" />
          <p>
            <strong>Nombre:</strong> {selectedPet.name}
          </p>
          <p>
            <strong>Fecha de nacimiento:</strong> {selectedPet.birth_date}
          </p>
          <p>
            <strong>Edad:</strong> {calculateAge(selectedPet.birth_date)}
          </p>
          <p>
            <strong>Raza:</strong> {selectedPet.breed}
          </p>
          <p>
            <strong>Especie:</strong> {selectedPet.specie}
          </p>
          <p>
            <strong>Refugio:</strong> {selectedPet.shelter}
          </p>
          <button
            onClick={handleNewForm}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Quiero adoptar
          </button>
        </div>
      </div>
  )}

  {showModal && selectedPet && wannaAdopt && user.role &&(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" style={{ zIndex: 999 }}>
      <div className="bg-white rounded-lg p-8 max-w-md relative">
        <span className="absolute top-0 right-0 text-xl cursor-pointer" onClick={toggleModal}>
          &times;
        </span>
        <h2 className="text-2xl font-bold mb-4">Formulario de Adopción</h2>
        <form onSubmit={handleSubmitAdoption} className="space-y-4">
          <div>
            <label htmlFor="number" className="block text-gray-700 text-sm font-bold">
              Número de celular:
            </label>
            <input
              type="text"
              id="number"
              value={cellphoneNumber}
              onChange={(e) => setCellphoneNumber(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="direccion" className="block text-gray-700 text-sm font-bold">
              Dirección de residencia:
            </label>
            <input
              type="text"
              id="direccion"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="barrio" className="block text-gray-700 text-sm font-bold">
              Barrio:
            </label>
            <input
              type="text"
              id="barrio"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="liveWithQuant" className="block text-gray-700 text-sm font-bold">
              ¿Con cuántas personas vives?:
            </label>
            <input
              type="number"
              id="liveWithQuant"
              value={liveWithQuant}
              onChange={(e) => setLiveWithQuant(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold">¿La casa es propia?</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="ownHouse"
                  value="true"
                  checked={ownHouse === 'true'}
                  onChange={() => setOwnHouse('true')}
                />
                Sí
              </label>
              <label>
                <input
                  type="radio"
                  name="ownHouse"
                  value="false"
                  checked={ownHouse === 'false'}
                  onChange={() => setOwnHouse('false')}
                />
                No
              </label>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold">
              ¿Estás de acuerdo con todas las responsabilidades de tener una mascota?
            </label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="responsibility"
                  value="true"
                  checked={responsibility === 'true'}
                  onChange={() => setResponsibility('true')}
                />
                Sí
              </label>
              <label>
                <input
                  type="radio"
                  name="responsibility"
                  value="false"
                  checked={responsibility === 'false'}
                  onChange={() => setResponsibility('false')}
                />
                No
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Adoptar
            </button>
          </div>
        </form>
      </div>
    </div>
  )}

  {showSuccessModal && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" style={{ zIndex: 999 }}>
      <div className="bg-white rounded-lg p-8 max-w-md relative">
        <span className="absolute top-0 right-0 text-xl cursor-pointer" onClick={closeSuccessModal}>
          &times;
        </span>
        <h2 className="text-2xl font-bold mb-4">¡Adopción exitosa!</h2>
        <p>
          Gracias por adoptar a {selectedPet.name}. Pronto nos pondremos en contacto contigo para completar el
          proceso.
        </p>
        <button
          onClick={handleCloseModals}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Cerrar
        </button>
      </div>
    </div>
  )}

  {showLoginModal && ( // Renderizado condicional del modal de inicio de sesión
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" style={{ zIndex: 999 }}>
      <div className="bg-white rounded-lg p-8 max-w-md relative">
        <span className="absolute top-0 right-0 text-xl cursor-pointer" onClick={handleCloseLoginModal}>
          ×
        </span>
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
        <p className="mb-4">Debes iniciar sesión para continuar.</p>
          <button
          onClick={() => {
          setShowLoginModal(false); // Ocultar el modal de inicio de sesión
          navigate('/login'); // Redirigir al usuario a la página de inicio de sesión
          }}
          className="bg-green-500 hover
          text-white font-bold py-2 px-4 rounded"
          >
            Ir a Iniciar Sesión
        </button>
      </div>
    </div>
        )}
          <div className="mt-4 mx-4">
    <label htmlFor="specie-select" className="block text-sm font-medium text-gray-700">Selecciona una especie:</label>
    <select
      id="specie-select"
      onChange={handleSpecieChange}
      value={selectedSpecie}
      className="mt-1 block w-1/4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    >
      <option value="">Todas</option>
      {species.map((specie) => (
        <option key={specie.id} value={specie.id}>
          {specie.name}
        </option>
      ))}
    </select>
  </div>

  <div className="grid grid-cols-3 gap-6 mt-8 mx-4">
  {pets.map((pet) => (
    <div key={pet.name} onClick={() => handleImageClick(pet)} className="cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
      <img src={pet.imgUrl} alt={pet.name} className="w-full h-auto rounded-lg" />
      <div className="p-4">
        <p className="text-lg font-bold text-gray-800 mb-2">{pet.name}</p>
        <p className="text-sm text-gray-600">Edad: {calculateAge(pet.birth_date)}</p>
        <p className="text-sm text-gray-600">Sexo: {pet.animal_sex}</p>
      </div>
    </div>
  ))}
</div>



  </>
);
};

