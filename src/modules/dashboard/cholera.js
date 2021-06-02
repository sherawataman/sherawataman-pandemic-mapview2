import React, {useState, useEffect} from 'react';
import {cholera} from '../../data/cholera'
import Mapcholera from '../map/map_cholera';

function Cholera() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        console.log(cholera)
        setData(cholera)
    },[])
    return (
       
        <div>
            <h1>Cholera</h1>
            {data.length > 0 && data ? <Mapcholera data={data}/> : null}
        </div>
    )
}
export default Cholera;