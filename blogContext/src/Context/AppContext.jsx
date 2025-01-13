import { createContext, useState } from "react";
import  {baseUrl}  from "../baseUrl"


export const AppContext = createContext();

export default function AppContextProvider ({children}){

    const [loading , setLoading] = useState(false);
    const [page , setPage] = useState(1);
    const [posts , setPosts] = useState([]);
    const [totalPages , setTotalPages] = useState(null);

    //Data filling

    async function fetchBlogsData(page = 1) {
        setLoading(true)
        let url = `${baseUrl}?page=${page}`
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
        setPage(page)
        fetchBlogsData(page);
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