import React, { useState, useEffect } from 'react';
import Header from './Header';

function AdoptionAdmin() {
    const [adoptions, setAdoptions] = useState([]);
    const [selectedAdoption, setSelectedAdoption] = useState(null);
    const [showInfoModal, setShowInfoModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [comment, setComment] = useState('');
    const [adoptionStatus, setAdoptionStatus] = useState('');
    const [adoptionStatuses, setAdoptionStatuses] = useState([]);
    const [comments, setComments] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState('');

    useEffect(() => {
        const fetchAdoptions = async () => {

            console.log(selectedStatus)
            try {
                let url = 'http://localhost:3000/adoption';
                if (selectedStatus) {
                  url = `http://localhost:3000/adoption/adoption-status/${selectedStatus}`;
                }
                const response = await fetch(url);
                if (!response.ok) {
                  throw new Error('No se pudieron obtener los datos de la adopcion');
                }  
                const data = await response.json();
                setAdoptions(data);
            } catch (error) {
                console.error('Error al obtener las adopciones', error);
            }
        };

        const fetchAdoptionStatuses = async () => {
            try {
                const response = await fetch('http://localhost:3000/adoption-status'); 
                if (!response.ok) {
                    throw new Error('No se pudieron obtener los estados de adopción');
                }
                const data = await response.json();
                setAdoptionStatuses(data);
            } catch (error) {
                console.error('Error al obtener los estados de adopción', error);
            }
        };
    
        fetchAdoptions();
        fetchAdoptionStatuses();
    }, [adoptions]);


    useEffect(() => {
        const fetchComments = async () => {
            try {
                if (selectedAdoption) {
                    const response = await fetch(`http://localhost:3000/adoption-commentary/adoption/${selectedAdoption.id}`); 
                    if (!response.ok) {
                        throw new Error('No se pudieron obtener los comentarios de adopción');
                    }
                    const data = await response.json();
                    setComments(data);
                }
            } catch (error) {
                console.error('Error al obtener los comentarios de adopción', error);
            }
        };
    
        fetchComments();
    }, [selectedAdoption]);

    const handleRowClick = (adoption) => {
        setSelectedAdoption(adoption);
        setShowInfoModal(true);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString();
    };

    const handleCloseInfoModal = () => {
        setShowInfoModal(false);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };

    const handleEditStatus = () => {
        setShowEditModal(true);
        handleCloseInfoModal(); // Cerrar la ventana modal de información al abrir la ventana modal de edición
    };

    const handleSaveEdit = async () => {
        try {
            const response = await fetch(`http://localhost:3000/adoption/${selectedAdoption.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    adoption_status: adoptionStatus
                })
            });

            const commentaryData = {
                description: comment,
                adoption: selectedAdoption.id                
              };
        
              console.log(JSON.stringify(commentaryData))
        
              const petition = await fetch('http://localhost:3000/adoption-commentary', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(commentaryData),
              });
        
              if (!response.ok) {
                alert('Error al guardar la adopción');
                throw new Error('Error al guardar la adopción');
              }
    
            if (!petition.ok) {
                throw new Error('Error al guardar el comentario y el estado de adopción');
            }
    
            console.log('Comentario y estado de adopción guardados exitosamente');
            setShowEditModal(false);
        } catch (error) {
            console.error('Error al guardar el comentario y estado de adopción:', error);
        }
    };

    const handleSaveAndClose = () => {
        handleSaveEdit();
        handleCloseEditModal();
        handleCloseInfoModal();
    };

    const handleChange = (e) => {
        setComment(e.target.value);
    };

    return (
        <>
            <Header />

            <div className="mt-4 mx-4">
                <label htmlFor="status-select" className="block text-sm font-medium text-gray-700">
                    Filtrar por estado:
                </label>
                <select
                    id="status-select"
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    value={selectedStatus}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option value="">Todos</option>
                    {adoptionStatuses.map(status => (
                        <option key={status.id} value={status.name}>{status.name}</option>
                    ))}
                </select>
            </div>
            {showInfoModal && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-8 shadow-lg relative">
                        <button onClick={handleCloseInfoModal} className="absolute top-0 right-0 p-2 m-4 text-gray-500 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 className="text-xl font-bold mb-4">Detalles de la Adopción</h2>
                        <p className="mb-2"><span className="font-semibold">Adoptante:</span> {selectedAdoption?.user.name}</p>
                        <p className="mb-2"><span className="font-semibold">Mascota:</span> {selectedAdoption?.pet.name}</p>
                        <p className="mb-2"><span className="font-semibold">Fecha de Adopción:</span> {formatDate(selectedAdoption?.adoption_date)}</p>
                        <div className="mb-4">
                            <span className="font-semibold block mb-2">Comentarios:</span>
                            <ul>
                                {comments.map((comment, index) => (
                                    <li key={index} className="list-disc ml-4">{comment.description}</li>
                                ))}
                            </ul>
                        </div>
                        <button onClick={handleEditStatus} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Editar</button>
                    </div>
                </div>
            )}


            {showEditModal && (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded-lg p-8 relative">
            <button onClick={handleCloseEditModal} className="absolute top-0 right-0 p-2 m-2 text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <h2 className="text-xl font-bold mb-4">Editar Estado de Adopción</h2>
            <textarea 
                value={comment} 
                onChange={handleChange} 
                placeholder="Ingrese un comentario..." 
                className="border border-gray-300 p-2 mb-4 w-full"
            ></textarea>
            <select 
                value={adoptionStatus} 
                onChange={(e) => setAdoptionStatus(e.target.value)} 
                className="border border-gray-300 p-2 mb-4 w-full"
            >
                <option value="">Seleccione un estado de adopción</option>
                {adoptionStatuses.map(status => (
                    <option key={status.id} value={status.name}>{status.name}</option>
                ))}
            </select>
            <button onClick={handleSaveAndClose} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Guardar</button>
        </div>
    </div>
)}

            <div className="h-screen flex mt-20">
                <div className="container mx-auto overflow-x-hidden">
                    <h2 className="text-xl font-bold mb-4">Adopciones Realizadas</h2>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse text-center">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 bg-gray-200 text-gray-600 border">Adoptante</th>
                                    <th className="px-4 py-2 bg-gray-200 text-gray-600 border">Mascota</th>
                                    <th className="px-4 py-2 bg-gray-200 text-gray-600 border">Fecha</th>
                                    <th className="px-4 py-2 bg-gray-200 text-gray-600 border">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {adoptions.map(adoption => (
                                    <tr key={adoption.id} className="border hover:bg-gray-200" onClick={() => handleRowClick(adoption)}>
                                        <td className="px-4 py-2 align-middle">{adoption.user.name}</td>
                                        <td className="px-4 py-2 align-middle">{adoption.pet.name}</td>
                                        <td className="px-4 py-2 align-middle">{formatDate(adoption.adoption_date)}</td>
                                        <td className="px-4 py-2 align-middle">{adoption.adoption_status.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );  
}

export default AdoptionAdmin;
