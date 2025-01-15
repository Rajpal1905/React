import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { Headers } from '../components/Headers';
import { Spinner } from '../components/Spinner';
import { BlogDetails } from '../components/BlogDetails';
import { baseUrl } from '../baseUrl';

export const BlogPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedBlog, setRelatedBlog] = useState([]);
  const navigation = useNavigate();
  const location = useLocation();

  const { loading, setLoading } = useContext(AppContext)
  const blogId = location.pathname.split('/').at(-1)


  async function fetchRelatedBlogs() {
    setLoading(true)
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`
    try {
      const res = await fetch(url)
      const data = await res.json()

      setBlog(data.blog)
      setRelatedBlog(data.relatedBlogs)
    } catch (error) {
      console.log("error in BlogPage")
      setBlog(null)
      setRelatedBlog([])
    }
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname])
  return (
    <div className='py-24 max-w-2xl mx-auto'>
      <Headers />
      <div className='max-w-[720px] px-[25px] '>
        <button className='mb-6 border-2 rounded-md border-[#dfdfdf] py-1 px-4 hover:bg-[#efefef] transition-all'
          onClick={() => navigation(-1)}>
          Back
        </button>
      </div>
      {
        loading ?
          (
            <div className="min-h-[80vh] w-full flex justify-center items-center">

              <Spinner />
            </div>
          ) :
          blog ? 
          <div className='flex flex-col gap-y-10'>
          <BlogDetails post={blog} />
            <h2 className='text-3xl font-bold'> Related Blogs </h2>
            {
              relatedBlog.map((post) => (
                <div key={post.id}>
                  <BlogDetails post={post} />
                </div>
              ))
            }
          </div>
            : <p> No Blog Found</p>
      }

    </div>
  )
}
