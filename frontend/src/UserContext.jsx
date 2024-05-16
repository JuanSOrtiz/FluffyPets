import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const UserContext = createContext();

// Crear un proveedor de contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ role: '', name: '', email: '' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Crear un hook para usar el contexto
export const useUser = () => {
  return useContext(UserContext);
};