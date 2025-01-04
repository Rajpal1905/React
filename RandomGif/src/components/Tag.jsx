import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from './Spinner'
import { useGif } from '../Hooks/useGif'




export const Tag = () => {

  const [tag,setTag] = useState('laptop')

  const {gif , loading , fetchData} = useGif(tag);

  function clickHandler() {
      fetchData()
  }


  return (
   <div className='w-1/2 bg-white rounded-lg border border-gray-300 shadow-md flex flex-col items-center gap-y-5 mt-5'>
    <h1 className='mt-5 text-2xl uppercase underline font-bold text-gray-800'>Random {tag} Gif</h1>
    {loading ? <Spinner /> : <img src={gif} width='400' />}
    <input
        className='w-10/12 bg-[#F2F2F2] text-lg text-center rounded-lg py-2 mb-2'
        placeholder='Enter any Tag'
        onChange={(e) => setTag(e.target.value)}
        value={tag}
    />
    <button className='w-10/12 bg-[#F2F2F2] text-lg text-gray-800 rounded-lg py-2 mb-6 hover:bg-[#D4D4D4]' onClick={clickHandler}>
        Generate
    </button>
</div>

)
}
