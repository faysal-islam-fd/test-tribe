
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/common/Navbar"
import HomaPage from "./pages/HomaPage"



function App() {

  return (
     <>
      <Navbar />
      <div className=" font-Comfortaa min-h-screen  ">        
        <Routes>
          <Route path="/" element={<HomaPage />} />
        </Routes>
      </div>
     </>
  )
}

export default App
