import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './component/Root/Root';
import ProductCreate from './component/ProductList/ProductCreate';
import MainSection from './component/MainSection/MainSection';
import UpdateCoffee from './component/UpdateCoffee/UpdateCoffee';
import AuthProvider from './component/Provider/AuthProvider';
import SignIN from './component/SignIn/SignIN';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <MainSection></MainSection>,
        loader: () => fetch('http://localhost:3000/product')
      }
    ]
  },
  {
    path: '/product',
    element: <ProductCreate></ProductCreate>
  },
  {
    path: '/product/:id',
    loader: ({ params }) => fetch(`http://localhost:3000/product/${params.id}`),
    Component: UpdateCoffee
  },
  {
    path:'/signIn',
    Component:SignIN
  }

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>,
)
