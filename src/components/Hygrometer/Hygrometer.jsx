import ReactSlider from 'react-slider';
import './Hygrometer.css';
import { useClimate } from '../../context/ClimateContext';
import { useState, useEffect } from 'react';

function Hygrometer() {
  const {humid, setHumid} = useClimate()
  const [targetHumid, setTargetHumid] = useState(humid)


  // useEffect(() => {

  //   setTimeout(() => {

  //     if (humid < targetHumid) {
  //       let newHum = humid + 2
  //       setHumid(newHum)
  //       clearTimeout()
  //     } else if (humid > targetHumid){
  //       let newHum = humid - 2
  //       setHumid(newHum)
  //       clearTimeout()
  // //     }

  //   }, 1000)
  //   return clearTimeout()
  // }, [humid, setHumid, targetHumid])

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humid}%</div>
      <ReactSlider
        value={targetHumid}
        onAfterChange={(val) => setTargetHumid(val)}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;
