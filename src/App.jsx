import './App.css'
import Sidebar from './assets/components/sidebar'
import './assets/components/styles/index.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

export default App
