

import { Spinner } from './Spinner'
import { useGif } from '../Hooks/useGif'


export const Random = () => {

    
    const {gif , loading , fetchData} = useGif();

    function clickHandler() {
        fetchData()
    }


    return (
        <div className='w-1/2 bg-white rounded-lg border border-gray-300 shadow-md flex flex-col items-center gap-y-5 mt-5'>
        <h1 className='mt-5 text-2xl uppercase underline font-bold text-gray-800'>A Random Gif</h1>
        {loading ? <Spinner /> : <img src={gif} width='400' />}
        <button className='w-10/12 bg-[#F2F2F2] text-lg text-gray-800 rounded-lg py-2 mb-6 hover:bg-[#D4D4D4]' onClick={clickHandler}>
            Generate
        </button>
    </div>
    
    )
}
