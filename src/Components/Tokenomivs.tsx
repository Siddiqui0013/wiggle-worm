import Snake from "../assets/snake.png"
import Why from "../assets/why.png"

export default function Tokenomics() {
  return (
    <div className="my-20 flex flex-col items-center justify-center gap-20">
        <h1 className="md:text-6xl text-5xl text-center dark">Wiggle Smart, Trade Smarter!</h1>
        <div className="md:text-4xl text-3xl w-full dark flex md:justify-center gap-20">
            <div className="toconomics md:w-[40%] flex flex-col mx-auto text-center md:ml-8 gap-8">
                <div className="toconomic md:w-[680px] w-[350px] px-20 py-4 md:px[40px] md:py-[40px]">Total Supply : 1 Billion</div>
                <div className="toconomic md:w-[680px] w-[350px] px-20 py-4 md:px[40px] md:py-[40px]"> Community Pool : 50%</div>
                <div className="toconomic md:w-[680px] w-[350px] px-20 py-4 md:px[40px] md:py-[40px]"> Transction Fee : 5%</div>
                <div className="toconomic md:w-[680px] w-[350px] px-20 py-4 md:px[40px] md:py-[40px]"> Burn : 5%</div>
            </div>
            <div className="img relative w-[40%] hidden md:block ">
                <img src={Snake} width={300} className="absolute bottom-16 right-60" alt="" />
                <img src={Why} width={500} className="" />
            </div>
        </div>
    </div>
  )
}
