import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useUser } from '../UserContext';

function Profile() {
    const [adoptions, setAdoptions] = useState([]);
    const [comments, setComments] = useState([]);
    const { user } = useUser();

    useEffect(() => {
        const fetchAdoptions = async () => {
            try {
                console.log("ID del usuario:", user.id); // Agregado para imprimir el ID del usuario
                const response = await fetch(`http://localhost:3000/adoption/user/${user.email}`);
                if (!response.ok) {
                    throw new Error('No se pudieron obtener las adopciones');
                }
                const data = await response.json();
                setAdoptions(data);
            } catch (error) {
                console.error('Error al obtener las adopciones', error);
            }
        };
    
        fetchAdoptions();
    }, [user.id]);

    useEffect(() => {
        const fetchComments = async (adoptionId) => {
            try {
                const response = await fetch(`http://localhost:3000/adoption-commentary/adoption/${adoptionId}`); 
                if (!response.ok) {
                    throw new Error('No se pudieron obtener los comentarios de adopción');
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error al obtener los comentarios de adopción', error);
                return [];
            }
        };

        const fetchCommentsForAdoptions = async () => {
            try {
                const commentsForAdoptions = await Promise.all(
                    adoptions.map(async (adoption) => {
                        const comments = await fetchComments(adoption.id);
                        return { adoptionId: adoption.id, comments: comments };
                    })
                );
                setComments(commentsForAdoptions);
            } catch (error) {
                console.error('Error al obtener los comentarios de adopción para las adopciones', error);
            }
        };

        fetchCommentsForAdoptions();
    }, [adoptions]);

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
                                    <th className="px-4 py-2 bg-gray-200 text-gray-600 border">Mascota</th>
                                    <th className="px-4 py-2 bg-gray-200 text-gray-600 border">Fecha</th>
                                    <th className="px-4 py-2 bg-gray-200 text-gray-600 border">Estado</th>
                                    <th className="px-4 py-2 bg-gray-200 text-gray-600 border">Comentarios</th>
                                </tr>
                            </thead>
                            <tbody>
                                {adoptions.map(adoption => (
                                    <tr key={adoption.id} className="border">
                                        <td className="px-4 py-2 align-middle">{adoption.pet.name}</td>
                                        <td className="px-4 py-2 align-middle">{formatDate(adoption.adoption_date)}</td>
                                        <td className="px-4 py-2 align-middle">{adoption.adoption_status.name}</td>
                                        <td className="px-4 py-2 align-middle">
                                            <ul className="list-disc list-inside text-left ">
                                                {comments
                                                    .find(commentsForAdoption => commentsForAdoption.adoptionId === adoption.id)
                                                    ?.comments.map((comment, index) => (
                                                        <li key={index}>{comment.description}</li>
                                                    ))}
                                            </ul>
                                        </td>
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

export default Profile;
