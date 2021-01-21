import logo from './logo.svg';
import styles from './App.module.scss';
import LightCloud from '../src/Assets/LightCloud.png';
import Hail from '../src/Assets/Hail.png';
import HeavyCloud from '../src/Assets/HeavyCloud.png';
import HeavyRain from '../src/Assets/HeavyRain.png';
import LightRain from '../src/Assets/LightRain.png';
import Shower from '../src/Assets/Shower.png';
import Sleet from '../src/Assets/Sleet.png';
import Snow from '../src/Assets/Snow.png';
import Thunderstorm from '../src/Assets/Thunderstorm.png';
import Clear from '../src/Assets/Clear.png';
import IconButton from '@material-ui/core/IconButton';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import SearchComp from './Search/Search';
import { useState, useEffect } from 'react';
import { weather } from './Assets/weather';

function App() {
  const woeid = 28218;
  const [selLoc, setSelLoc] = useState({ "consolidated_weather": [] });
  const [close, setClose ] = useState(false);

  var map1 = new Map();
  map1.set("sn",Snow);
  map1.set("sl",Sleet);
  map1.set("h",Hail);
  map1.set("t",Thunderstorm);
  map1.set("hr",HeavyRain);
  map1.set("lr",LightRain);
  map1.set("s",Shower);
  map1.set("hc",HeavyCloud);
  map1.set("lc",LightCloud);
  map1.set("c",Clear)

  const fetchSelLoc = (loc) => {
    // fetch(`https://cors-anywhere.herokuapp.com/metaweather.com/api/location/${woeid}`, {
    //   "method": "GET"
    // })
    //   .then(response => response.json())
    //   .then(response => {
    //      setLocations(response);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    setSelLoc(weather);
    setClose(!close);
  }
  const getImage = (abbr) => {
    return map1.get(abbr);
  }
  const toggleSearch = () => {
   setClose(!close);
  }
  return (
    <div className={styles.appContainer}>
      <div className={styles.sidebar}>
        <div className={styles.bg}></div>
        <div className={styles.searchHeader}>
          <div className={styles.searchText} >
            Search for places
           </div>
          <div className={styles.searchAction} onClick={() => toggleSearch()}>
            <IconButton color="primary">
              <MyLocationIcon />
            </IconButton>
          </div>
        </div>
        <div className={styles.imgContainer}>
          {selLoc.consolidated_weather[0] && <img src={getImage(selLoc.consolidated_weather[0].weather_state_abbr)}></img>}
          {selLoc.consolidated_weather[0] && <p>{Math.round(selLoc.consolidated_weather[0].the_temp)} &#8451;</p>}
          {selLoc.consolidated_weather[0] && <p>{selLoc.consolidated_weather[0].weather_state_name}</p>}
          {selLoc.parent && <p>{selLoc.parent.title}</p>}
        </div>
      </div>
      {close && <SearchComp updateSelLoc={fetchSelLoc} />}

      <div className={styles.main}>
        <div className={styles.conversion}>

        </div>
        <div className={styles.days}>
          {
            selLoc.consolidated_weather.slice(1).map((value,key)=>{
              return (
                <div className={styles.today} key={key}>
                 <p>Tomorrow</p>
                 <img src={getImage(value.weather_state_abbr)}></img>
                 <p><span>{Math.round(value.min_temp)} &#8451;</span>
                    <span>{Math.round(value.max_temp)} &#8451;</span></p>
                </div>
              )
            })
          }
        </div>
        <div className={styles.highlight_heading}>
          <span>Today's Highlights</span>
        </div>
        <div className={styles.highlights}>
          <div className={styles.wind}>
            <p>Wind Status</p>
            {selLoc.consolidated_weather[0] && <div> {Math.round(selLoc.consolidated_weather[0].wind_speed)} mph</div>}
          </div>
          <div className={styles.humidity}>
            <p>Humidity</p>
            {selLoc.consolidated_weather[0] && <div> {Math.round(selLoc.consolidated_weather[0].humidity)} &#37; </div>}
          </div>
          <div className={styles.visibility}>
            <p>Visibility</p>
            {selLoc.consolidated_weather[0] && <div> {Math.round(selLoc.consolidated_weather[0].visibility)} miles </div>}
          </div>
          <div className={styles.airPressure}>
            <p>Air Pressure</p>
            {selLoc.consolidated_weather[0] && <div> {Math.round(selLoc.consolidated_weather[0].air_pressure)} mb </div>}
          </div>
        </div>
        <div className={styles.footer}>
          Poornima Natikar @ devchalleges.io
        </div>
      </div>
    </div>
  );
}

export default App;
