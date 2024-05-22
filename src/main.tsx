import React from 'react'
import './global.css';
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './NotFound.tsx';
import Home from './pages/index.tsx';
import Vote from './pages/vote.tsx';
import Login from './pages/login.tsx';
import LoginContextProvider from './contexts/loginAuthContext.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }, {
    path: '/*',
    element: <NotFound />
  }, {
    path: '/login',
    element: <Login />,
  }, {
    path: '/vote',
    element: <Vote />
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginContextProvider>
        <RouterProvider router={router}/>
    </LoginContextProvider>
  </React.StrictMode>,
)
