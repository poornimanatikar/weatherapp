import logo from './logo.svg';
import styles from './App.module.scss';
import LightCloud from '../src/Assets/LightCloud.png';
import IconButton from '@material-ui/core/IconButton';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import SearchComp from './Search/Search';
import { useState, useEffect } from 'react';
import { weather } from './Assets/weather';

function App() {
  const woeid = 28218;
  const [selLoc, setSelLoc] = useState({ "consolidated_weather": [] });

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
  }
  return (
    <div className={styles.appContainer}>
      <div className={styles.sidebar}>
        <div className={styles.searchHeader}>
          <div className={styles.searchText}>
            Search for places
           </div>
          <div className={styles.searchAction}>
            <IconButton color="primary">
              <MyLocationIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <SearchComp updateSelLoc={fetchSelLoc} />

      <div className={styles.main}>
        <div className={styles.conversion}>

        </div>
        <div className={styles.days}>
          <div className={styles.today}>
            <p>Tomorrow</p>
            <img src={getWeatherStateImg(selLoc.consolidated_weather)}></img>
            <p>{selLoc.consolidated_weather[1] && <span>{Math.round(selLoc.consolidated_weather[1].min_temp)} &#8451;</span>}
              {selLoc.consolidated_weather[1] && <span>{Math.round(selLoc.consolidated_weather[1].max_temp)} &#8451;</span>}</p>
          </div>
          <div className={styles.sun}>
            <p>Tomorrow</p>
            <img src={LightCloud}></img>
            <p>{selLoc.consolidated_weather[2] && <span>{Math.round(selLoc.consolidated_weather[2].min_temp)} &#8451;</span>}
              {selLoc.consolidated_weather[2] && <span>{Math.round(selLoc.consolidated_weather[2].max_temp)} &#8451;</span>}</p>
          </div>
          <div className={styles.mon}>
            <p>Tomorrow</p>
            <img src={LightCloud}></img>
            <p>{selLoc.consolidated_weather[3] && <span>{Math.round(selLoc.consolidated_weather[3].min_temp)} &#8451;</span>}
              {selLoc.consolidated_weather[3] && <span>{Math.round(selLoc.consolidated_weather[3].max_temp)} &#8451;</span>}</p>
          </div>
          <div className={styles.tue}>
            <p>Tomorrow</p>
            <img src={LightCloud}></img>
            <p>{selLoc.consolidated_weather[4] && <span>{Math.round(selLoc.consolidated_weather[4].min_temp)} &#8451;</span>}
              {selLoc.consolidated_weather[4] && <span>{Math.round(selLoc.consolidated_weather[4].max_temp)} &#8451;</span>}</p>
          </div>
          <div className={styles.wed}>
            <p>Tomorrow</p>
            <img src={LightCloud}></img>
            <p>{selLoc.consolidated_weather[5] && <span>{Math.round(selLoc.consolidated_weather[5].min_temp)} &#8451;</span>}
              {selLoc.consolidated_weather[5] && <span>{Math.round(selLoc.consolidated_weather[5].max_temp)} &#8451;</span>}</p>
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default App;
