import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root/Root';
import HomePage from './pages/home page/HomePage';
import AboutPage from './pages/about page/AboutPage';
import ContactPage from './pages/contact page/ContactPage';
import AllProducts from './pages/all products/AllProducts';
import ProductsDetails from './pages/products details/ProductsDetails';
import FAQPage from './pages/FAQ page/FAQPage';
import BlogPage from './pages/blog page/BlogPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/shop",
        element: <AllProducts/>
      },
      {
        path: "/products-details",
        element: <ProductsDetails/>
      },
      {
        path: "/FAQ",
        element: <FAQPage/>
      },
      {
        path: "/about",
        element: <AboutPage/>
      },
      {
        path: "/contact",
        element: <ContactPage/>
      },
      {
        path: "/blog",
        element: <BlogPage/>
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
