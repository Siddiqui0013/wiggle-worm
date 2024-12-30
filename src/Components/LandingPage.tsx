import Divider from "./Divider";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Hero from "./Hero";
import HowTo from "./HowTo";
import Tokenomics from "./Tokenomivs";
import Why from "./Why-2nd";

export default function LandingPage() {
  return (
    <div>
        <Hero />
        <Divider />
        <Why />
        <Divider />
        <HowTo />
        <Divider />
        <Tokenomics />
        <Divider />
        <FAQ />
        <Footer />
    </div>
  )
}
