import ReactSlider from 'react-slider';
import { useClimate } from '../../context/ClimateContext';
import './Thermometer.css';
import {useEffect, useState} from 'react'

function Thermometer() {
  const { temp, setTemp } = useClimate();
  //when we change slider, number slowly ticks up or down or whatever per second
  //temp should stop changing once we reach targetTemp
  //include cleanup -> clearTimeOut/clearInterval


  //slice of state
  const [targetTemp, setTargetTemp] = useState(temp)

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (temp < targetTemp) {
  //       let newTemp = temp + 1
  //       setTemp(newTemp)
  //     } else if (temp > targetTemp){
  //       let newTemp = temp - 1
  //       setTemp(newTemp)
  //     }
  //   }, 1000)
  //   return clearTimeout()
  // }, [temp, setTemp, targetTemp])



  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temp}°F</div>
      <ReactSlider
        value={targetTemp}
        onAfterChange={(val) => setTargetTemp(val)}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
