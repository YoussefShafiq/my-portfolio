import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from './Layout/Layout'
import Notfound from './Pages/Notfound'
import 'aos/dist/aos.css';

function App() {

  const router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: '*', element: <Notfound /> },
      ]
    }
  ])

  let query = new QueryClient()

  return (
    <>
      <QueryClientProvider client={query}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  )
}

export default App