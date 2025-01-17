import React, { useEffect, useState } from 'react'
import { fetchData } from '../App';
export function useData(url) {

    const [data, setData] = useState({});
    useEffect(() => {
        fetchData(url)
            .then(data => setData(data))
            .catch(error => console.error(error))
    }, [url])

    return {
        data
    }
}
