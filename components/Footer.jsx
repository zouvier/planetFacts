const Footer = ({ rotation, revolution, radius, temperature }) => {
  const cssbox = 'border-planet-lightgray border-2 font-Spartan text-center p-4';

  return (
    <div className="flex place-content-center gap-4 pt-4 px-8 mdh:flex-col">
      <div className={cssbox}>
        <p>Rotation time</p>
        <h2 className="text-head2">{rotation}</h2>
      </div>
      <div className={cssbox}>
        <p>revolution time</p>
        <h2 className="text-head2">{revolution}</h2>
      </div>
      <div className={cssbox}>
        <p>radius</p>
        <h2 className="text-head2">{radius}</h2>
      </div>
      <div className={cssbox}>
        <p>Average Temp</p>
        <h2 className="text-head2">{temperature}</h2>
      </div>
    </div>
  );
};

export default Footer;
