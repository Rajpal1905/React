import { useEffect } from "react"
import { useContext } from "react"
import { AppContext } from "./Context/AppContext"
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom"
import { Homes } from "./pages/Homes"
import { BlogPage } from "./pages/BlogPage"
import { TagPage } from "./pages/TagPage"
import { CategoryPage } from "./pages/CategoryPage"


function App() {
  const { fetchBlogsData } = useContext(AppContext)

  const [searchParams,setSearchParam] = useSearchParams()
  const location = useLocation()
  
  useEffect(()=>{
    const page = searchParams.get("page") ?? 1

    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogsData(Number(page), tag);
    }
   else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogsData(Number(page), null , category);
    }
    else {
      fetchBlogsData(Number(page))
    }
  },[location.pathname , location.search])

  return (
   <Routes>
      <Route path="/" element = {<Homes/>}/>
      <Route path="/blog/:blogId" element = {<BlogPage/>}/>
      <Route path="/tags/:tag" element = {<TagPage/>}/>
      <Route path="/categories/:category" element = {<CategoryPage/>}/>
   </Routes>
  )
}

export default App
