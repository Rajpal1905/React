import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { Spinner } from './Spinner'

export const Blogs = () => {

  const { loading , posts } = useContext(AppContext)
  return (
    <div className=' w-11/12 max-w-[650px] h-screen py-8 flex flex-col gap-y-7 mt-[66px] mb-[66px] justify-center items-center'>
      {loading ? 

      (<Spinner/>) : 
      
      ( posts.length === 0 ? (
          <div>
            <h2>No Post Found</h2>
          </div>) : 
           (posts.map( (post ) => (
            <div key={post.id}>
              <p className=' font-bold text-lg'>{post.title}</p>
              <p className=' text-sm'> 
                By <span className=' italic'> {post.author}</span> on <span className="underline font-bold"> {post.category}</span>
              </p>
              <p className=' text-sm mt-[6px] '> Posted on {post.date}</p>
              <p className=' text-md mt-[10px]'> {post.content}</p>

              <div className='flex gap-x-3 '>
                {post.tags.map( (tag,index)=>{
                  return(
                    <span className=' text-xs font-bold underline text-blue-400'
                     key={index}>{`#${tag}`}</span>
                  )
                })}
              </div>
            </div>
           ) 
           ))
        )
      }
    </div>
  )
}
