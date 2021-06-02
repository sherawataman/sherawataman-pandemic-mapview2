import React, {useState, useEffect} from 'react';
import {hiv} from '../../data/hiv'
import Maphiv from '../map/map_hiv';

function Hiv() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        console.log(hiv)
        setData(hiv)
    },[])
    return (
       
        <div>
            <h1>Hiv</h1>
            {data.length > 0 && data ? <Maphiv data={data}/> : null}
        </div>
    )
}
export default Hiv;