import React, { useState, useEffect } from 'react';
import Header from './Header';

function AdoptionAdmin() {
    const [adoption, setAdoption] = useState([]);

    useEffect(() => {
        const fetchAdoptions = async () => {
            try {
                const response = await fetch('http://localhost:3000/adoption'); 
                if (!response.ok) {
                    throw new Error('No se pudieron obtener las adopciones');
                }
                const data = await response.json();
                setAdoption(data);
            } catch (error) {
                console.error('Error al obtener las adopciones', error);
            }
        };
    
        fetchAdoptions();
        console.log(adoption);
    }, []);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString();
    };

    return (
        <>
            <Header />
            <div className="h-screen flex mt-20">
                <div className="container mx-auto">
                    <h2 className="text-xl font-bold mb-4">Adopciones Realizadas</h2>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse text-center">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 bg-gray-200 text-gray-600 border">Adoptante</th>
                                    <th className="px-4 py-2 bg-gray-200 text-gray-600 border">Mascota</th>
                                    <th className="px-4 py-2 bg-gray-200 text-gray-600 border">Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                {adoption.map(adopcion => (
                                    <tr key={adopcion.id} className="border">
                                        <td className="px-4 py-2 align-middle">{adopcion.user.name}</td>
                                        <td className="px-4 py-2 align-middle">{adopcion.pet.name}</td>
                                        <td className="px-4 py-2 align-middle">{formatDate(adopcion.adoption_date)}</td>
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
