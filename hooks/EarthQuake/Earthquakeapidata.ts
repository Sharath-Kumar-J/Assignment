import React,{useEffect, useReducer} from "react";
import axios from "axios";
import { reducer, initialstate} from './EarthquakeReducer'

function EarthquakeAPIdata(){
    const[state, dispatch ] = useReducer(reducer, initialstate)

    useEffect(()=> {
        axios
        .get('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=100&starttime=2021-06-14&endtime=2021-07-14')
        .then (response => {
            dispatch({ type:'FETCH_SUCCESS',payload:response.data})
        })

        .catch (error => {
            dispatch({ type:'FETCH_ERROR',payload:error})
        })
    },[])

        return{ state }
}

export default EarthquakeAPIdata;