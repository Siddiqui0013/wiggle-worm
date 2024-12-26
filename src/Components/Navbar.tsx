import { useState, useEffect } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "How To Buy", id: "howto" },
    { name: "Tokenomics", id: "tokenomics" },
    { name: "FAQ", id: "faq" },
  ];

  const controlNavbar = () => {
    if (window.scrollY > 0) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const ScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  }

  return (
    <nav className="w-[100%] p-2">
      <div className="px-6 w-[90%] bg-[#FFFDD0] mx-auto rounded-full border-black border-t-1 border-b-2 border-r-2 border-l-1  mt-4 py-4 flex justify-between items-center">
        <h1 className='dark text-3xl kavoon'>WiggleWorm</h1>
        <ul className="hidden md:flex justify-around items-center dark gap-14 mr-12  text-2xl">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => ScrollTo(item.id)}
              className="cursor-pointer">
              {item.name}
            </li>
          ))}
        </ul>

        <div className={`md:hidden absolute top-4 right-4 flex justify-end z-[51] transition-transform duration-300 ${!show && 'transform -translate-y-full'}`}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 fixed hover:text-gray-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <RxCross1 size={32} />
            ) : (
              <RxHamburgerMenu size={32} />
            )}
          </button>
        </div>

        <div 
          className={`md:hidden fixed inset-0 bg-[#FFFDD0] z-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
            isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
          }`}
        >
          <ul className="pt-4 pb-3">
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => ScrollTo(item.id)}
                className="text-2xl py-3 text-center cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="box"></div>
      </div>
    </nav>
  );
}