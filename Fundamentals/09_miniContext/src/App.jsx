
import './App.css'
import Login from './component/Login'
import UserContextProvider from './context/UserContextProvider'
import Welcome from './component/Welcome'

function App() {

  return (
    <UserContextProvider>
      <h2>Hello React</h2>
      <Login />
      <Welcome />
    </ UserContextProvider>
  )
}

export default App
