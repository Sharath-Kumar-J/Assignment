import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import { initialState, reducer} from './Museum1reducer'

function fetchDatafromAPI_1() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const URL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects?metadatadate=2021-06-22&&departmentids=3&hasimages=true'

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

export default fetchDatafromAPI_1;