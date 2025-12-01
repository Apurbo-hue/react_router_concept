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
import Posts from './assets/components/users/posts.jsx';
import PostsDetails from './assets/components/users/postsDetails.jsx';
import Todos from './assets/components/users/todos.jsx';
import TodosDetails from './assets/components/users/todosDetails.jsx';
import Albums from './assets/components/users/albums.jsx';
import AlbumsDetails from './assets/components/users/albumsDetails.jsx';

 

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
      },
      {
        path:"/posts",
        loader:()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        Component:Posts
      },
      {
        path:"posts/:postid",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`),
        Component:PostsDetails
      },
      {
        path:"/todos",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/todos'),
        Component:Todos
      },
      {
        path:"/todos/:todosid",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/todos/${params.todosid}`),
        Component:TodosDetails
      },
      {
        path:"/albums",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/albums'),
        Component:Albums
      },
      {
        path:"/albums/:albumsid",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumsid}`),
        Component:AlbumsDetails
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
