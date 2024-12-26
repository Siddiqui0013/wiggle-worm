import WhyImg from '../assets/why.png'

export default function Why() {
  return (
    <div className='w-full relative my-20'>
        {/* <div className="box border-[#4E342E] border-8 w-[70%] rounded-3xl mx-auto mt-20 p-8 flex flex-col items-center gap-12">
            <h1 className='text-6xl dark'>Why WiggleWorm Coin</h1>
            <div className="para w-[80%] text-center space-y-4">
            <p className='text-[20px] poppins'> <strong className='poppins'>Built for Growth: </strong> Just like worms enrich the soil, Wriggly Coin helps small traders enrich their portfolios. </p>
<p className='text-[20px] poppins'> <strong className='poppins'>On Solana: </strong> Leveraging Solana's speed and low fees for maximum wiggle room.</p> 
<p className='text-[20px] poppins'> <strong className='poppins'>Fun & Engaging: </strong> With our cheerful mascot and playful community, crypto trading has never been this entertaining.</p>
            </div>
        </div> */}

<div className="relative w-4/5 max-w-4xl mx-auto mt-20">
      {/* Corner Lines */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-8 border-t-8 border-[#4E342E]"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-r-8 border-t-8 border-[#4E342E]"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-8 border-b-8 border-[#4E342E]"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-8 border-b-8 border-[#4E342E]"></div>
      
      {/* Main Content */}
      <div className="px-12 py-8 flex flex-col items-center gap-12">
        <h1 className="text-6xl font-bold">Why WiggleWorm Coin?</h1>
        
        <div className="w-4/5 text-center space-y-4">
          <p className="text-xl">
            <strong>Built for Growth: </strong>
            Just like worms enrich the soil, Wriggly Coin helps small traders enrich their portfolios.
          </p>
          <p className="text-xl">
            <strong>On Solana: </strong>
            Leveraging Solana's speed and low fees for maximum wiggle room.
          </p>
          <p className="text-xl">
            <strong>Fun & Engaging: </strong>
            With our cheerful mascot and playful community, crypto trading has never been this entertaining.
          </p>
        </div>
      </div>
    </div>

    </div>
  )
}
