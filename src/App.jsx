import {useState} from 'react'
import Layout from './components/layouts/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Page404 from './pages/Page404'
import Login from '../src/components/LoginForm'


function App() {

  const [token,setToken] = useState();

  if(!token) {
    return <Login setToken={setToken}/>
  }
  const router = createBrowserRouter([
    {
      element: <Layout/>,
      errorElement: <Page404/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contact",
          element: <Contact/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
