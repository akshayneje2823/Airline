import React, { useEffect } from 'react';
import axios from 'axios'

function AirlineList() {
    const getAllData = async () => {
        const res = await axios.get('https://api.instantwebtools.net/v1/airlines')
        console.log(res.data)
    }
    useEffect(() => {
        getAllData()
    }, [])
    return (
        <div>Table</div>
    )
}

export default AirlineList