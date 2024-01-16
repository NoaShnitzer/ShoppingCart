import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/ReleaseForm.scss'
import router from './router/router.jsx'
import {RouterProvider} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} fallbackElement={<div>Router Error</div>} />
  </React.StrictMode>,
)
