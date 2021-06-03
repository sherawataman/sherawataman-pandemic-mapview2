import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import ReactMapGL, {Marker} from 'react-map-gl';
import {countries} from '../../data/country';
import logo from "../../data/cholera.png"
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import mapboxgl from 'mapbox-gl'
// // eslint-disable-next-line import/no-webpack-loader-syntax
// mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

function Mapcholera({data: data}) {
    let [viewport, setViewport] = useState({

        longitude: -122.45,
        latitude: 37.78,
        zoom: 2,
        width: "100vw",
        height: "100vh",
        position: "absolute",
        margin: "auto",
      
        
    });
    useEffect(() => {
        // console.log(countries)
        // console.log("<=========", data )
        data?.map((item) => {
            // console.log(item.Country)
            var foo = getLatlng(item.Country)
            // console.log(foo)
        })
        countries.map((country) => {
            // console.log(country)
        })
    }, [])
    const getLatlng = (Country) => {
        let lat
        let lng
        countries.map((country) => {
          if (country.name.toLowerCase() === Country.toLowerCase()) {
            // console.log(country.latlng)
            lat = country.latlng[0]
            lng = country.latlng[1]
            console.log(Country, "latitude : ", lat, "longitude:", lng)
        }
    })
    var obj = {"lat":lat, "lng":lng}
      return obj
      }
    return (
        <div>

<ReactMapGL 
            {...viewport}
            mapboxApiAccessToken={
                "pk.eyJ1IjoiYWh5YWFuamFhdCIsImEiOiJja3A1NGhxOXYwMDV1MzFsc3R1YXhobzZtIn0.CJxA1Zlja5Ocsh1vscUSGQ"
            }
            mapStyle="mapbox://styles/mapbox/dark-v10"
            onViewportChange={setViewport}
            >


            {data?.map((item) => {
            // console.log(item.Country)
            var foo = getLatlng(item.Country)
            // console.log(foo.lat)
            if (foo.lat != undefined) {

                        return <Marker latitude={foo.lat} longitude={foo.lng} offsetLeft={-20} offsetTop={-10}>
                    {/* <h1>You are here</h1> */}
                    <img src={logo} style={{height:25, width:25}}/>
                  </Marker>
            }
        })}




               {/* <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
        <h1>You are here</h1>
        <img src={logo}/>
      </Marker> */}
            </ReactMapGL>
        </div>
    )
}

export default Mapcholera;