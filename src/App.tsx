import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'
import Header from './components/Header'



function App() {


  return (
    <>
      <Header/>
      <Outlet/>
      <Toaster/>
    </>
  )
}

export default App
