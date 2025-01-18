import Carousal from './components/Carousal'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <div className='w-[60%] m-auto'>
        <Carousal />
      </div>
    </div>
  )
}

export default App
