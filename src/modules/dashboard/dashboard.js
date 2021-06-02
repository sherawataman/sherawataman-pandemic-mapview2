import React, { useState, useEffect } from 'react';
import { Link as RouterLink, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import Table from "../map/table"
import {countries} from '../../data/country';
import Map from '../map/map'
const __tableText = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};
const __tableText2 = {
  color: "black",
  backgroundColor: "white",
  padding: "10px",
  fontFamily: "Arial"
};

function Dashboard() {
 
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
      // console.log(data)
      
  }

  if (redirectTo.length > 0) {
    return <Redirect to={redirectTo} />;
  }
  // console.log(data)
  // console.log(countryData)
  return (
    <div>
      <h1>We are in Dashboard</h1>
      <button onClick={() => {setRedirectTo("/about")}}>
        Go to about
      </button>
      
      <Table/>
      {countryData.length > 0 ? <div>
        
        { <tr> <td style={__tableText}>Country</td>      <td style={__tableText}> Cases </td> <td style={__tableText}>Deaths</td>      </tr> }
        {countryData.map((item) => {
          return <tr>
                     
            <td style={__tableText2}>{item.country_name}</td>  <td style={__tableText2}>{item.cases}</td> <td style={__tableText2}>{item.deaths}</td>
          </tr>
        })}



      </div>
      :null}
     
    </div>
  );
}

export default Dashboard;
