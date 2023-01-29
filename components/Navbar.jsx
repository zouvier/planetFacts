import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [planet, setPlanet] = useState({ planet: '', number: '' });
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex items-center flex-wrap bg-planet-dark text-planet-lightgray z-10 relative  p-3 px-10 justify-between border-b-2 border-planet-lightgray">
      <Link href="/" alt="home"><h1 className="no-underline font-Antonio uppercase text-head2 text-planet-white">The Planets</h1> </Link>
      <div className="flex gap-4 mdh:hidden">
        <Link href={{ pathname: '/', query: planet }} alt="" className="hover:text-planet-white focus:text-planet-white border-t-4 border-transparent hover:border-planet-aquablue focus:border-planet-aquablue">
          <h2 onMouseEnter={() => setPlanet({ planet: 'mercury', number: 0 })}>Mercury</h2>
        </Link>
        <Link href={{ pathname: '/', query: planet }} alt="" className="hover:text-planet-white focus:text-planet-white border-t-4 border-transparent  hover:border-planet-gold focus:border-planet-gold">
          <h2 onMouseEnter={() => setPlanet({ planet: 'venus', number: 1 })}>Venus</h2>
        </Link>
        <Link href={{ pathname: '/', query: planet }} alt="" className="hover:text-planet-white focus:text-planet-white border-t-4 border-transparent hover:border-planet-purple focus:border-planet-purple">
          <h2 onMouseEnter={() => setPlanet({ planet: 'earth', number: 2 })}>Earth</h2>
        </Link>
        <Link href={{ pathname: '/', query: planet }} alt="" className="hover:text-planet-white focus:text-planet-white border-t-4 border-transparent hover:border-planet-orange1 focus:border-planet-orange1">
          <h2 onMouseEnter={() => setPlanet({ planet: 'mars', number: 3 })}>Mars</h2>
        </Link>
        <Link href={{ pathname: '/', query: planet }} alt="" className="hover:text-planet-white focus:text-planet-white border-t-4 border-transparent hover:border-planet-orange2 focus:border-planet-orange2">
          <h2 onMouseEnter={() => setPlanet({ planet: 'jupiter', number: 4 })}>Jupiter</h2>
        </Link>
        <Link href={{ pathname: '/', query: planet }} alt="" className="hover:text-planet-white focus:text-planet-white border-t-4 border-transparent hover:border-planet-orange3 focus:border-planet-orange3">
          <h2 onMouseEnter={() => setPlanet({ planet: 'saturn', number: 5 })}>Saturn</h2>
        </Link>
        <Link href={{ pathname: '/', query: planet }} alt="" className="hover:text-planet-white focus:text-planet-white border-t-4 border-transparent hover:border-planet-aquagreen focus:border-planet-aquagreen">
          <h2 onMouseEnter={() => setPlanet({ planet: 'uranus', number: 6 })}>Uranus</h2>
        </Link>
        <Link href={{ pathname: '/', query: planet }} alt="" className="hover:text-planet-white focus:text-planet-white border-t-4 border-transparent hover:border-planet-blue focus:border-planet-blue">
          <h2 onMouseEnter={() => setPlanet({ planet: 'neptune', number: 7 })}>neptune</h2>
        </Link>

      </div>
      <button
        type="button"
        className=" inline-flex p-3 rounded md:hidden text-white ml-auto hover:text-white outline-none"
        onClick={handleClick}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`${
          active ? '' : 'hidden'
        }   w-full h-full relative`}
      >
        <div className="md:hidden bg-planet-dark w-[100vw] h-[100vh] items-start flex flex-col -left-10 absolute justify-evenly pl-10 pr-10 pb-16">

          <Link href={{ pathname: '/', query: planet }} onTouchStart={() => setPlanet({ planet: 'mercury', number: 0 })} className="w-full pl-4 border-b-planet-darkgray border-b-2 pb-8 hover:text-planet-white focus:text-planet-white border-l-4 border-transparent hover:border-planet-aquablue focus:border-planet-aquablue flex justify-between">
            <h2 onMouseEnter={() => setPlanet({ planet: 'mercury', number: 0 })}>Mercury</h2>
            <Image src="icon-chevron.svg" alt="chevron" width="12" height="12" />
          </Link>
          <Link href={{ pathname: '/', query: planet }} onTouchStart={() => setPlanet({ planet: 'venus', number: 1 })} alt="" className="w-full pl-4 border-b-planet-darkgray border-b-2 pb-8 hover:text-planet-white focus:text-planet-white border-l-4 border-transparent  hover:border-planet-gold focus:border-planet-gold flex justify-between">
            <h2 onMouseEnter={() => setPlanet({ planet: 'venus', number: 1 })}>Venus</h2>
            <Image src="icon-chevron.svg" alt="chevron" width="12" height="12" />
          </Link>
          <Link href={{ pathname: '/', query: planet }} onTouchStart={() => setPlanet({ planet: 'earth', number: 2 })} alt="" className="w-full pl-4 border-b-planet-darkgray border-b-2 pb-8 hover:text-planet-white focus:text-planet-white border-l-4 border-transparent hover:border-planet-purple focus:border-planet-purple flex justify-between">
            <h2 onMouseEnter={() => setPlanet({ planet: 'earth', number: 2 })}>Earth</h2>
            <Image src="icon-chevron.svg" alt="chevron" width="12" height="12" />
          </Link>
          <Link href={{ pathname: '/', query: planet }} onTouchStart={() => setPlanet({ planet: 'mars', number: 3 })} alt="" className="w-full pl-4 border-b-planet-darkgray border-b-2 pb-8 hover:text-planet-white focus:text-planet-white border-l-4 border-transparent hover:border-planet-orange1 focus:border-planet-orange1 flex justify-between">
            <h2 onMouseEnter={() => setPlanet({ planet: 'mars', number: 3 })}>Mars</h2>
            <Image src="icon-chevron.svg" alt="chevron" width="12" height="12" />
          </Link>
          <Link href={{ pathname: '/', query: planet }} onTouchStart={() => setPlanet({ planet: 'jupiter', number: 4 })} alt="" className="w-full pl-4 border-b-planet-darkgray border-b-2 pb-8 hover:text-planet-white focus:text-planet-white border-l-4 border-transparent hover:border-planet-orange2 focus:border-planet-orange2 flex justify-between">
            <h2 onMouseEnter={() => setPlanet({ planet: 'jupiter', number: 4 })}>Jupiter</h2>
            <Image src="icon-chevron.svg" alt="chevron" width="12" height="12" />
          </Link>
          <Link href={{ pathname: '/', query: planet }} onTouchStart={() => setPlanet({ planet: 'saturn', number: 5 })} alt="" className="w-full pl-4 border-b-planet-darkgray border-b-2 pb-8 hover:text-planet-white focus:text-planet-white border-l-4 border-transparent hover:border-planet-orange3 focus:border-planet-orange3 flex justify-between">
            <h2 onMouseEnter={() => setPlanet({ planet: 'saturn', number: 5 })}>Saturn</h2>
            <Image src="icon-chevron.svg" alt="chevron" width="12" height="12" />
          </Link>
          <Link href={{ pathname: '/', query: planet }} onTouchStart={() => setPlanet({ planet: 'uranus', number: 6 })} alt="" className="w-full pl-4 border-b-planet-darkgray border-b-2 pb-8 hover:text-planet-white focus:text-planet-white border-l-4 border-transparent hover:border-planet-aquagreen focus:border-planet-aquagreen flex justify-between">
            <h2 onMouseEnter={() => setPlanet({ planet: 'uranus', number: 6 })}>Uranus</h2>
            <Image src="icon-chevron.svg" alt="chevron" width="12" height="12" />
          </Link>
          <Link href={{ pathname: '/', query: planet }} onTouchStart={() => setPlanet({ planet: 'neptune', number: 7 })} alt="" className="w-full pl-4 border-b-planet-darkgray border-b-2 pb-8 hover:text-planet-white focus:text-planet-white border-l-4 border-transparent hover:border-planet-blue focus:border-planet-blue flex justify-between ">
            <h2 onMouseEnter={() => setPlanet({ planet: 'neptune', number: 7 })}>neptune</h2>
            <Image src="icon-chevron.svg" alt="chevron" width="12" height="12" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
