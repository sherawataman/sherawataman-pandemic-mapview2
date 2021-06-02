import React, {useState, useEffect} from 'react';
import {Ebolavirus} from '../../data/ebola'
import Maplocal from '../map/map_local';

function Ebola() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        // console.log(Ebolavirus)
        setData(Ebolavirus)
    },[])
    return (
       
        <div>
            <h1>ebola</h1>
            {data.length > 0 && data ? <Maplocal data={data}/> : null}
        </div>
    )
}
export default Ebola;