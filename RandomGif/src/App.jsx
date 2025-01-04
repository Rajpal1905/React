import { Random } from "./components/Random"
import { Tag } from "./components/Tag"

function App() {

  return (
    <div className="w-full min-h-screen flex flex-col items-center background ">
      
      <h1 className=" bg-white rounded-lg w-11/12 py-2 px-10 font-bold text-4xl text-center mt-[40px]">RANDOM GIFS</h1>
      <div className="flex flex-col items-center w-full gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>

    </div>
  )
}

export default App
