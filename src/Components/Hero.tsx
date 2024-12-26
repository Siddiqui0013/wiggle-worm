import Navbar from "./Navbar";
import snake from "../assets/snake.png"

export default function Hero() {
    return (
      <div className="hero relative w-full">
        <div className="img absolute rotate-45 top-32 right-32">
          <img src={snake} alt="" width={70} />
        </div>
        <div className="img absolute bottom-96 left-32">
          <img src={snake} alt="" width={70} />
        </div>
        <div className="img absolute -rotate-3">
          <img src={snake} alt="" width={70} />
        </div>
        <div className="z-0 relative">
          <img src="/src/assets/top.png" className="absolute top-0 right-0" alt="" />
        </div>
        <div className="z-10 relative mx-auto">
          <Navbar />
        </div>
        <div className="welcome w-[50%] mx-auto mt-20 flex flex-col items-center gap-12">
            <h1 className="text-6xl dark">A Meme Coin That’s Small but Mighty!</h1>
            <p className="poppins text-xl w-[80%] text-center text-bold">
            Introducing  WiggleWorm Coin—the perfect token for small traders with big dreams. Whether you're just starting your crypto journey or looking for a fun way to grow, Wriggly Coin is here to add a splash of humor and profit to your portfolio.
            </p>
            <button className="bg-[#FFA500] border-black border-t-1 border-b-2 border-r-2 border-l-1  text-white rounded-full py-2 px-4 text-xl">Get WiggleWorm Now</button>

        </div>
        <div className="relative h-[300px]">
        <div className="twosnakes absolute -bottom-8 left-[50%] translate-x-[-40%]  w-[40%] flex gap-0 mx-auto">
          <img src={snake} width={200} className="" alt="" />
          <img src={snake} width={200} className="scale-x-[-1]" alt="" />
        </div>
        </div>
      </div>
    )
  }