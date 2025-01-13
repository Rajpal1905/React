import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

export const Pagination = () => {
  const {page,pageChangeHandler ,totalPages} = useContext(AppContext)
  return (
    <div className=' w-full flex items-center fixed justify-center border-2 bottom-0 '>
      <div className=' w-11/12 max-w-[650px] flex justify-between  bg-white py-2 '>
      <div className=' flex gap-x-2'>
      {
        page>1 && (
          <button  className=' border-2 rounded-md  py-1 px-4'
           onClick={()=>pageChangeHandler(page-1)}>
            Previous
          </button>
        )
      }
      {
        page < totalPages && 
        (
          <button className='border-2 rounded-md py-1 px-4'
          onClick={()=>{pageChangeHandler(page+1)}}>
            Next
          </button> 
        )
      }
      </div>
      <p>
        Page {page} of {totalPages}
      </p>
      </div>
    </div>
  )
}
