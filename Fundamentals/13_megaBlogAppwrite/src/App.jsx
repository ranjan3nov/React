
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from "./store/authSlice"
import { Footer, Header } from './components'

function App() {

  const { loading, setLoading } = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-fill block"></div>
      <Header />
      <main>
        TODO:<Outlet />
      </main>
      <Footer />
      test
    </div>
  ) : null

}

export default App
