import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        (async () => {
            try {                
                const response = await axios.get(url);
                const data = await response?.data;
                setData(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        )()
    }, [url])

    return [loading,error,data]
}
