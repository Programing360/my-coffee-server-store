import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './component/Root/Root';
import ProductCreate from './component/ProductList/ProductCreate';
import MainSection from './component/MainSection/MainSection';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<MainSection></MainSection>,
        loader:() => fetch('http://localhost:3000/product')
      }
    ]
  },
  {
    path:'/product',
    element:<ProductCreate></ProductCreate>
    
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />,
  </StrictMode>,
)
