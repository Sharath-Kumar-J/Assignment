import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import { reducer, initialState } from './Museum2Reducer'

function fetchDatafromAPI_2(Items) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const URL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${Items}`
    console.log(URL)
    useEffect(() => {
        axios
            .get(URL)
            .then(response => {
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERRROR', payload: error })
            })
    }, [])

    return { state }
}

export default fetchDatafromAPI_2;