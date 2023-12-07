import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root";
import './index.css'
import Create from './components/Create';
import Login from './components/Login';
import Day2 from './components/Day2';
import CreateWorkout from './components/CreateWorkout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/React-router",
    element: <Root/>,
  },{
    path: "/",
    element: <CreateWorkout/>,
  },{
    path:"/Login",
    element: <Login/>
  },{
    path:"/Create",
    element: <Create/>
  },{
    path:"/Day2"
    ,element: <Day2/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
