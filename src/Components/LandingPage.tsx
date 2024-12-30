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
        <div id="home">
        <Hero />
        </div>
        <Divider />
        <div id="about">
        <Why />
        </div>
        <Divider />
        <div id="howto">
        <HowTo />
        </div>
        <Divider />
        <div id="tokenomics">
        <Tokenomics />
        </div>
        <Divider />
        <div id="faq">
        <FAQ />
        </div>
        <Footer />
    </div>
  )
}
