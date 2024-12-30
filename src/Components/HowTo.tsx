import Snake from "../assets/snake.png"

export default function HowTo() {
  return (
    <div className="my-20 relative flex flex-col items-center justify-center gap-20">
        <div className="buy text-center px-4 md:p-0 space-y-8">
            <h1 className="md:text-6xl text-5xl dark"> How To Buy WiggleWorm Coin : </h1>
            <h1 className="md:text-6xl text-5xl dark"> Wiggle into the Action !</h1>
        </div>
        <div className="steps flex flex-col md:flex-row md:gap-16 gap-8 md:my-20 my-4 items-center justify-center">
            <div className="step flex flex-col justify-around py-8 px-16">
                <h1 className="text-[24px] font-bold dark poppins">Set up your wallet</h1>
                <p className="text-[16px] poppins dark">
                Download a Solana-compatible wallet like Phantom or Solflare, and fund it with SOL.
                </p>
            </div>
            <div className="step flex flex-col justify-around py-8 px-16">
                <h1 className="text-[24px] font-bold dark poppins">Visit a DEX</h1>
                <p className="text-[16px] poppins dark">
                Go to a Solana-based DEX like Raydium or Orca, and connect your wallet.                </p>
            </div>
            <div className="step flex flex-col justify-around py-4 px-16">
                <h1 className="text-[24px] font-bold dark poppins">Swap SOL for Wriggly Coin</h1>
                <p className="text-[16px] poppins dark">
                Search for Wriggly Coin using the token address, choose how much SOL to trade, and confirm transaction!
                </p>
            </div>
        </div>
        <img src={Snake} className="absolute w-32 md:w-48 md:bottom-0 -bottom-24 md:right-[1%] right-0 scale-x-[-1]" alt="" />
    </div>
  )
}
