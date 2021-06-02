import React, { useState, useEffect } from 'react';
import Map from '../map/map'

function Corona() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const [countryData, setCountryData] = useState([])

  


  const [redirectTo, setRedirectTo] = useState('');
  useEffect(() => {
   fetchData();

   
  }, [])



  const fetchData = () => {
    fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "06b8485201msh79443c5ede2d0ecp11e9ffjsn9df9b599a464",
        "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"
      }
    })
    .then(response => response.json())
    .then(data => {setData(data)
      fetchCountryData(data);
    })
    .catch(err => {
      console.error(err);
    });
  }
  const fetchCountryData = (data) => {
    setCountryData(data.countries_stat)
      if (data === null || data === undefined) {
        return
      } 
      setCountryData(data.countries_stat)
      // console.log(data)
      // data.countries_stat.map((item) => {
      //     // console.log(item.country_name)
      //     // getLatlng(item.country_name)
      // })
  }

  return(
    <div>
      <h1>We are in Corona</h1>
      {countryData.length > 0 ? <Map data={countryData}/> : null}
    </div>
  );
}

export default Corona;
