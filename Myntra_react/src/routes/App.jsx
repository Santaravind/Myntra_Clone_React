import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Fetchitems from "../components/Fetchitems"
import { useSelector } from "react-redux"
import Loading from "../components/Loading"


function App() {
  
    const fetchStatus= useSelector((store)=>store.fetchStatus)

  return (
    <>
     <Header/>
     <Fetchitems/>
     {fetchStatus.currenctlyFetching?<Loading/>:<Outlet/> }
   
    <Footer/>
    </>
  )
}

export default App
