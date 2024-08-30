import { useEffect, useState } from "react";

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleClick = (item) => {
    setSelectedItem(item);
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <nav className={`mt-4 md:mt-4 py-2 duration-200 delay-100 ${isScrolled ? 'bg-dark-gray-2/70 backdrop-blur-sm px-2 rounded-full' : 'bg-transparent'}`}>
        <ul className={`flex md:gap-6 items-center text-sm ${isScrolled ? 'text-terciary' : 'text-light-gray'} `}>

          <a href="#home" className="block">
            <li
              onClick={() => handleClick('home')}
              className={`px-5 py-1 rounded-full cursor-pointer ${selectedItem === 'home' ? 'bg-dark-gray-2' : 'hover:bg-dark-gray-2 '}`}>
              Home
            </li>
          </a>
          <a href="#about" className="block">
            <li
              onClick={() => handleClick('about')}
              className={`px-5 py-1 rounded-full cursor-pointer ${selectedItem === 'about' ? 'bg-dark-gray-2' : 'hover:bg-dark-gray-2 '}`}>
              About
            </li>
          </a>
          <a href="#projects" className="block">
            <li
              onClick={() => handleClick('projects')}
              className={`px-5 py-1 rounded-full cursor-pointer ${selectedItem === 'projects' ? 'bg-dark-gray-2' : 'hover:bg-dark-gray-2 '}`}>
              Projects
            </li>
          </a>
          <a href="#contact" className="block">
            <li
              onClick={() => handleClick('contact')}
              className={`px-5 py-1 rounded-full cursor-pointer ${selectedItem === 'contact' ? 'bg-dark-gray-2' : 'hover:bg-dark-gray-2 '}`}>
              Contact
            </li>
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Header;