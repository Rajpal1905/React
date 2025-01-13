import { useEffect } from "react"
import { Blogs } from "./components/Blogs"
import { Headers } from "./components/Headers"
import { Pagination } from "./components/Pagination"
import { useContext } from "react"
import { AppContext } from "./Context/AppContext"


function App() {
  const { fetchBlogsData } = useContext(AppContext)

  
  useEffect(()=>{
    fetchBlogsData()
  },[])
  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center '>
      <Headers />
      <Blogs />
      <Pagination />
    </div>
  )
}

export default App
