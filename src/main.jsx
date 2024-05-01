import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import About from './About'
import App from './App'
import ErrorPage from './ErrorPage'
import Header from './Header'
import Footer from './Footer'
import Todo from './Todo'
import EditTeam from './EditTeam'

function Layout() {
  return (
      <>
        <Header />
        <div id='page-content'>
          <Outlet />
        </div>
        <Footer />
      </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/Todo',
        element: <Todo />
      },
      {
        path: '/EditTeam',
        element: <EditTeam />
      },
    ]
  }
])

export const NewPlayerContext = createContext()

export const NewplayerProvider = ({ children }) => {
  const [newPlayerArray, setNewPlayerArray] = useState([])

  return(
    <NewPlayerContext.Provider value={{ newPlayerArray, setNewPlayerArray}}>
      {children}
    </NewPlayerContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)