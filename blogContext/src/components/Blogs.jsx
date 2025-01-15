import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { Spinner } from './Spinner'
import { BlogDetails } from './BlogDetails'

export const Blogs = () => {

  const { loading, posts } = useContext(AppContext)
  return (
    <div className='flex flex-col gap-y-10 max-w-2xl mx-auto'>
      {loading ?

        (
          <div className="min-h-[80vh] w-full flex justify-center items-center">

            <Spinner />
          </div>
        ) :


        (posts.length === 0 ? (
          <div className="min-h-[80vh] w-full flex justify-center items-center">
            <h2  className="text-center font-bold text-3xl">No Post Found</h2>
          </div>) :
          (posts.map((post) => (
            <BlogDetails key={post.id} post={post} />
          )
          ))
        )
      }
    </div>
  )
}
