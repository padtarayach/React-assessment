import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import HomeNormal from './Components/HomeNormal.jsx'
import HomeAdmin from './Components/HomeAdmin.jsx'
import HomeUser from './Components/HomeUser.jsx'
import Owner from './Components/Owner.jsx'

const router = createBrowserRouter ([
 {path: '/',
 element: <HomeNormal/>},

 {path: '/admin',
 element: <HomeAdmin/>},

 {path: '/user',
 element: <HomeUser/>},

 {path: '/owner',
 element: <Owner/>}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)