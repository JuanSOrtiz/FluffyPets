import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Adoption } from './components/Adoption.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { UserProvider } from './UserContext.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import AdoptionAdmin from './components/AdoptionAdmin.jsx'
import Profile from './components/Profile.jsx'
import { Contact } from './components/Contact.jsx'


const router = createBrowserRouter([{
  path: '/',
  element: <App/>
},
{
  path: '/adopciones',
  element: <Adoption/>
},
{
  path: '/contacto',
  element: <Contact/>
},
{
  path: '/login',
  element: <Login/>
},
{
  path: '/signup',
  element: <Signup/>
},

{
  path: '/see-Adoption',
  element: <AdoptionAdmin/>
},

{
  path: '/profile',
  element: <Profile/>
},


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
    
  </React.StrictMode>,
)
