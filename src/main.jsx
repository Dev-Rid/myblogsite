import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { route } from '../routes'

createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={route}/>
  </React.StrictMode>,

)



