import './App.css'
import GameComponent from './components/GameComponent'

function App() {
  return (
    <>
      <h1>We're DUNE it.</h1>
      <div className='card'>
        <GameComponent />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
