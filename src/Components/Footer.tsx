import snake from "../assets/snake.png"
import { FaTelegramPlane, FaDiscord, FaTwitter } from "react-icons/fa";


export default function Footer() {
  return (
         <div className="w-full mt-80 my:20 mx-auto relative flex items-center my-8 justify-center">
            <div className="box z-10 bg-[#228B22] md:w-[85%] w-[92%] rounded-2xl border-[#4E342E] border-[12px] md:p-16">
              <div className="flex flex-col gap-8 items-center justify-center py-16 text-center bg-[#FFF9C4] rounded-2xl border-[#4E342E] border-4">
                <h1 className="md:text-6xl text-5xl dark">WingleWorm Community</h1>
                <p className="text-2xl">Influence the future of Wingle worm meme!</p>
                <div className="btn flex md:gap-8 gap-4">
                <button className="bg-[#FFA500] border-black border-t-1 border-b-2 border-r-2 border-l-1  text-white rounded-full py-2 px-8 text-2xl">Get Started</button>
                <div className="flex gap-4 mb- items-center">
            <FaTelegramPlane size={40} className="bg-white p-1 border-black border rounded-full shadow-lg" />
            <FaDiscord size={40} className="bg-white p-1 border-black border rounded-full shadow-lg" />
            <FaTwitter size={40} className="bg-white p-1 border-black border rounded-full shadow-lg" />
          </div>
                </div>
              </div>
            </div>
            <img src={snake} className="absolute w-[210px] md:w-[300px] -top-72 -scale-x-[1] left-40" alt="" />
        </div>
  )
}
