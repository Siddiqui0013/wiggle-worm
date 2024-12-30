import WhyImg from '../assets/why.png'

export default function Why() {
  return (
    <div className='w-full relative my-32 md:min-w-[70vh]'>
        <div className="tilted border-[#4E342E] transform skew-y-3 border-8 md:w-[70%] w-[90%] rounded-3xl mx-auto mt-20 md:p-8 p-6 text-center flex flex-col items-center gap-12">
            <h1 className='md:text-6xl text-5xl mt-4 dark'>Why WiggleWorm Coin</h1>
            <div className="para md:w-[80%] w-full text-center space-y-8">
            <p className='md:text-[20px] text-[16px] poppins'> <strong className='poppins'>Built for Growth: </strong> Just like worms enrich the soil, Wriggly Coin helps small traders enrich their portfolios. </p>
<p className='md:text-[20px] text-[16px] poppins'> <strong className='poppins'>On Solana: </strong> Leveraging Solana's speed and low fees for maximum wiggle room.</p> 
<p className='md:text-[20px] text-[16px] poppins'> <strong className='poppins'>Fun & Engaging: </strong> With our cheerful mascot and playful community, crypto trading has never been this entertaining.</p>
            </div>
        </div>
        <img src={WhyImg} alt="" className='absolute w-40 md:w-80 md:-bottom-48 -bottom-40 md:right-20 right-0 ' />
    </div>
  )
}
