import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [planet, setPlanet] = useState({ planet: '', number: '' });

  return (
    <nav className="flex items-center flex-wrap bg-planet-dark text-planet-lightgray  p-3 px-10 justify-between border-b-2 border-planet-lightgray">
      <Link href="/" alt="home"><h1 className="no-underline font-Antonio uppercase text-head2 text-planet-white">The Planets</h1> </Link>
      <div className="flex gap-4">
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
    </nav>
  );
};

export default Navbar;
