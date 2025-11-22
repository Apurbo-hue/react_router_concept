import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './assets/components/root/root.jsx';
import Home from './assets/components/home/home.jsx';
import Mobiles from './assets/components/mobiles/mobiles.jsx';
import Laptop from './assets/components/laptop/laptop.jsx';
import Users from './assets/components/users/users.jsx';
import UsersDetails from './assets/components/users/usersDetails.jsx';

 

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {index:true,Component:Home},
      {path:"/mobiles",Component:Mobiles},
      {path:"/laptops",Component:Laptop},
      {
        path:"/users",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        Component:Users
      },
      {
        path:"/users/:userid",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        Component:UsersDetails
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
