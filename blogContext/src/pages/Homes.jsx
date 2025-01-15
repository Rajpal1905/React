import React from 'react'
import { Headers } from '../components/Headers'
import { Blogs } from '../components/Blogs'
import { Pagination } from '../components/Pagination'

export const Homes = () => {
  return (
    <div>
        <Headers/>
        <div className='py-24 mx-auto max-w-[720px] px-[25px]'>
            <Blogs/>
        </div>
          <Pagination/>
    </div>
  )
}
