import Navbar from "./Navbar";
import snake from "../assets/snake.png"

export default function Hero() {
    return (
      <div className="hero relative overflow-hidden md:overflow-visible w-full">
        <div className="img absolute md:rotate-45 top-20 left-4 md:top-32 md:right-32">
          <img src={snake} alt="" width={70} />
        </div>
        <div className="img absolute md:bottom-96 bottom-80 md:left-32 right-8 -scale-x-[1] -rotate-12 ">
          <img src={snake} alt="" width={70} />
        </div>
        <div className="img absolute hidden md:block -rotate-3">
          <img src={snake} alt="" width={70} />
        </div>
        <div className="z-0 relative">
          <img src="/src/assets/top.png" className="absolute top-0 right-0" alt="" />
        </div>
        <div className="z-10 relative mx-auto">
          <Navbar />
        </div>
        <div className="welcome md:w-[50%] mx-auto text-center mt-20 flex flex-col items-center gap-12">
            <h1 className="md:text-6xl text-5xl dark">A Meme Coin That’s Small but Mighty!</h1>
            <p className="poppins text-xl md:w-[80%] w-[90%] text-center text-bold">
            Introducing  WiggleWorm Coin, the perfect token for small traders with big dreams. Whether you're just starting your crypto journey or looking for a fun way to grow, Wriggly Coin is here to add a splash of humor and profit to your portfolio.
            </p>
            <button className="bg-[#FFA500] border-black border-t-1 border-b-2 border-r-2 border-l-1  text-white rounded-full md:py-2 py-3 md:px-4 px-12 text-xl">Get WiggleWorm Now</button>

        </div>
        <div className="relative h-[300px]">
        <div className="twosnakes absolute -bottom-8 md:left-[50%] md:translate-x-[-40%] md:w-[40%] flex gap-0 mx-auto">
          <img src={snake} width={200} className="" alt="" />
          <img src={snake} width={200} className="scale-x-[-1]" alt="" />
        </div>
        </div>
      </div>
    )
  }