import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <main className='md:px-24 min-h-screen'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
