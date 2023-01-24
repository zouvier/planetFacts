
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Home = () => {
  const router = useRouter();
  const { query } = router;
  const { planet } = query;
  const { number } = query;
  const [planetinfo, setPlanetinfo] = useState([]);
  const [displaylayers, setDisplaylayers] = useState({ content: '', source: '' });
  const [layerimages, setLayerimages] = useState({ image: '', geo: false });
  const colors = ['focus:bg-planet-aquablue focus:border-planet-aquablue', 'focus:bg-planet-gold focus:border-planet-gold', 'focus:bg-planet-purple focus:border-planet-purple', 'focus:bg-planet-orange1 focus:border-planet-orange1', 'focus:bg-planet-orange2 focus:border-planet-orange2', 'focus:bg-planet-orange3 focus:border-planet-orange3', 'focus:bg-planet-aquagreen focus:border-planet-aquagreen', 'focus:bg-planet-blue focus:border-planet-blue'];
  const possiblelayers = { overview: [planetinfo?.overview?.content, planetinfo?.overview?.source], structure: [planetinfo?.structure?.content, planetinfo?.structure?.source], geology: [planetinfo?.geology?.content, planetinfo?.geology?.source] };

  useEffect(() => {
    (async () => {
      const res = await fetch('./api/hello');
      const data = await res.json();
      setPlanetinfo(data[number]);
    })();

    return () => {
    };
  }, [planet]);

  useEffect(() => {
    setDisplaylayers({ content: planetinfo?.overview?.content, source: planetinfo?.overview?.source });
    setLayerimages({ image: planetinfo?.images?.planet, geo: false });

    return () => {
    };
  }, [planetinfo]);

  const changeContent = (content) => {
    if (content === 'overview') {
      setDisplaylayers({ content: possiblelayers.overview[0], source: possiblelayers.overview[1] });
      setLayerimages({ image: planetinfo?.images?.planet, geo: false });
    }
    if (content === 'structure') {
      setDisplaylayers({ content: possiblelayers.structure[0], source: possiblelayers.structure[1] });
      setLayerimages({ image: planetinfo?.images?.internal, geo: false });
    }

    if (content === 'geology') {
      setDisplaylayers({ content: possiblelayers.geology[0], source: possiblelayers.geology[1] });
      setLayerimages({ image: planetinfo?.images?.planet, geo: true });
    }
  };

  return (
    <>
      <div className="flex place-content-center items-center w-[100%] h-[70vh] justify-evenly">

        <div className="col-start-1 col-end-1 relative">
          <Image src={layerimages.image} className="relative" width="400" height="400" alt="planet" />
          {layerimages.geo ? <Image src={planetinfo?.images?.geology} className="absolute top-[70%] left-[20%]" width={163} height={199} /> : ''}
        </div>

        <div className="col-start-2 col-end-2 w-[21.875rem]">
          <h2 className="text-head1 ">{planetinfo?.name}</h2>
          <p>{displaylayers.content}</p>
          <p className="text-planet-lightgray flex gap-1 items-center p-4">source:
            <Link href="https://en.wikipedia.org/wiki/Neptune#Atmosphere" className="underline flex h-4 items-center gap-2">
              wikipedia
              <Image src="./icon-source.svg" width={12} height={12} alt="" />
            </Link>
          </p>
          <div className="flex flex-col text-left gap-y-4 mt-4">
            <button type="button" className={`w-[21.875rem] border-planet-lightgray border-2 flex gap-4 p-4 font-Spartan uppercase ${colors[number]} hover:bg-planet-lightgray`} onClick={() => (changeContent('overview'))}><span className="text-planet-darkgray font-bold">01</span> overview </button>
            <button type="button" className={`w-[21.875rem] border-planet-lightgray border-2 flex gap-4 p-4 font-Spartan uppercase ${colors[number]} hover:bg-planet-lightgray`} onClick={() => (changeContent('structure'))}><span className="text-planet-darkgray font-bold">02</span> Internal Structure </button>
            <button type="button" className={`w-[21.875rem] border-planet-lightgray border-2 flex gap-4 p-4 font-Spartan uppercase ${colors[number]} hover:bg-planet-lightgray`} onClick={() => (changeContent('geology'))}><span className="text-planet-darkgray font-bold">03</span> Surface Geology </button>
          </div>
        </div>
      </div>

      <div className="flex place-content-center gap-4">
        <div className="border-planet-lightgray w-[15.938rem] h-[8rem] border-2 font-Spartan text-center">
          <p>Rotation time</p>
          <h2 className="text-head2">{planetinfo?.rotation}</h2>
        </div>
        <div className="border-planet-lightgray w-[15.938rem] h-[8rem] border-2 font-Spartan text-center">
          <p>revolution time</p>
          <h2 className="text-head2">{planetinfo?.revolution}</h2>
        </div>
        <div className="border-planet-lightgray w-[15.938rem] h-[8rem] border-2 font-Spartan text-center">
          <p>radius</p>
          <h2 className="text-head2">{planetinfo?.radius}</h2>
        </div>
        <div className="border-planet-lightgray w-[15.938rem] h-[8rem] border-2 font-Spartan text-center">
          <p>Average Temp</p>
          <h2 className="text-head2">{planetinfo?.temperature}</h2>
        </div>
      </div>
    </>

  );
};

export default Home;
