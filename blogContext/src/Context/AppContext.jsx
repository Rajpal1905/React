import { createContext, useState } from "react";
import  {baseUrl}  from "../baseUrl"
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

export default function AppContextProvider ({children}){

    const [loading , setLoading] = useState(false);
    const [page , setPage] = useState(1);
    const [posts , setPosts] = useState([]);
    const [totalPages , setTotalPages] = useState(null);
    const navigate = useNavigate()

    //Data filling

    async function fetchBlogsData(page = 1 , tag = null , category ) {
        setLoading(true)
        let url = `${baseUrl}?page=${page}`

        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }
        try {
            const respoonse = await fetch(url) 
            const data = await respoonse.json();

            console.log("logging Data : " , data )
            
            setPage(data.page);
            setPosts(data.posts)
            setTotalPages(data.totalPages)
        } catch (error) {
            console.log("error in fetching Data")
            setPage(1)
            setPosts([])
            setTotalPages(null)
        }
        setLoading(false)
    }
    function pageChangeHandler (page){
        navigate({search : `page=${page}`})
        setPage(page)
    }

    const value = {
        loading,
        setLoading,
        page,
        setPage,
        posts,
        setPosts,
        totalPages,
        setTotalPages,
        fetchBlogsData,
        pageChangeHandler
    }
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
    
}