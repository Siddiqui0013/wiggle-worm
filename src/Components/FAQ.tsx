import { useState } from "react"

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(-1);
   
    const faqs = [
        {
            question: "What is WiggleWorm Coin?",
            answer: "WiggleWorm Coin is a meme token that's small but mighty. It's a fun and engaging way to trade crypto, with a cheerful mascot and a playful community.",
        },
        {
            question: "How can I buy WiggleWorm Coin?",
            answer: "You can buy WiggleWorm Coin on popular exchanges like Coinbase, Kraken, and Binance. You can also trade WiggleWorm Coin on DEXs like Raydium and Orca.",
        },
        {
            question: "Is WiggleWorm Coin safe?",
            answer: "Yes, WiggleWorm Coin is safe and secure. It has been audited by a reputable auditor and is compliant with industry standards.",
        }
    ]
    
  return (
    <div className="my-20 flex flex-col items-center justify-center md:gap-20 gap-10 relative">
        <h1 className="md:text-6xl text-5xl dark">FAQ</h1>
        {
            faqs.map((faq, index) => (
                <div key={index} className="md:w-[70%] w-[90%] bg-[#F4F5DC] md:p-12 p-6 border-[#228B22] border-4 md:rounded-full rounded-3xl">
                    <div className="flex items-center text-center w-full justify-between cursor-pointer" onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}>    
                        <h1 className="md:text-4xl text-2xl dark poppins  text-start w-[90%]">{faq.question}</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="md:w-12 w-6 rounded-full bg-[#228B22] h-6 md:h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    {
                        activeIndex === index && (
                            <p className="poppins md:text-2xl text-xl mt-8 dark">{faq.answer}</p>
                        )
                    }
                </div>
                    )
                )
            }
        </div>

  )
}
