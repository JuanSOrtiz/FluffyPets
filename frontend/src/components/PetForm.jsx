import { useState, useEffect } from 'react';
import { useUser } from '../UserContext';

function PetForm() {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [breed, setBreed] = useState([]);
  const [specie, setSpecie] = useState([]);
  const [shelter, setShelter] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedSpecie, setSelectedSpecie] = useState('');
  const [selectedShelter, setSelectedShelter] = useState('');
  const [pets, setPets] = useState([]);
  const [filePath, setFilePath] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const { user } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const breedResponse = await fetch("http://localhost:3000/breed");
        const specieResponse = await fetch("http://localhost:3000/specie");
        const shelterResponse = await fetch("http://localhost:3000/shelter");
        const petResponse = await fetch("http://localhost:3000/pet");

        if (!breedResponse.ok || !specieResponse.ok || !shelterResponse.ok || !petResponse.ok) {
          throw new Error("No se pudieron obtener los datos");
        }

        const breedData = await breedResponse.json();
        const specieData = await specieResponse.json();
        const shelterData = await shelterResponse.json();
        const petData = await petResponse.json();


        // Mapear los datos de mascotas para incluir tanto el nombre como la URL de la imagen
        const mappedPets = petData.map(pet => ({
          name: pet.name,
          imgUrl: pet.image_url || 'src/assets/foto1.png'
        }));

        setBreed(breedData.map(item => item.name));
        setSpecie(specieData.map(item => item.name));
        setShelter(shelterData.map(item => item.name));
        setPets(mappedPets);
      } catch (error) {
        console.error("Error al obtener los datos", error);
      }
    };

    fetchData();
  }, [name, birthDate, selectedSpecie, selectedBreed, selectedShelter, imgUrl]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        name: name,
        specie: selectedSpecie,
        breed: selectedBreed,
        shelter: selectedShelter,
        birth_date: birthDate,
        image_url: imgUrl
      };

      const response = await fetch("http://localhost:3000/pet", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      setName('');
      setBirthDate('');
      setSelectedSpecie('');
      setSelectedBreed('');
      setSelectedShelter('');
      document.getElementById("fileInput").value = null

      fetchData();


    } catch (error) {
      console.error("Error al enviar el formulario", error);
    }
    

    
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fileName = file.name;
    const newFilePath = "src/assets/images/" + fileName;
    setFilePath(newFilePath);
    setImgUrl(newFilePath);

  }

  return (
    <>
      {user.role== 'admin'&&(
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold">Nombre:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label htmlFor="specie" className="block text-gray-700 text-sm font-bold">Especie:</label>
              <select
                name="specie"
                id="specie"
                value={selectedSpecie}
                onChange={(e) => setSelectedSpecie(e.target.value)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled hidden>Selecciona una especie</option>
                {specie.map((specie, index) => (
                  <option key={index} value={specie}>
                    {specie}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="breed" className="block text-gray-700 text-sm font-bold">Raza:</label>
              <select
                name="breed"
                id="breed"
                value={selectedBreed}
                onChange={(e) => setSelectedBreed(e.target.value)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled hidden>Selecciona una raza</option>
                {breed.map((breed, index) => (
                  <option key={index} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="shelter" className="block text-gray-700 text-sm font-bold">Refugio:</label>
              <select
                name="shelter"
                id="shelter"
                value={selectedShelter}
                onChange={(e) => setSelectedShelter(e.target.value)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled hidden>Selecciona un refugio</option>
                {shelter.map((shelter, index) => (
                  <option key={index} value={shelter}>
                    {shelter}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="birthDate" className="block text-gray-700 text-sm font-bold">Fecha de nacimiento:</label>
              <input
                type="date"
                id="birthDate"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label htmlFor="fileInput" className="block text-gray-700 text-sm font-bold">Sube la imagen:</label>
              <input
                id="fileInput"
                type="file"
                onChange={handleFileChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>

      )}
        

      
    </>
  );
}

export default PetForm;