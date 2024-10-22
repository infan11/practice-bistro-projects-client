import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Componenets/Provider/AuthProvider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
    <Toaster/>
   <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
   </AuthProvider>
  </StrictMode>,
)
