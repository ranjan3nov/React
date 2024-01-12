import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency])
                setLoading(false)
            })
            .catch((err) => {
                console.error("Error fetching data", err);
                setLoading(false);
            });
        // console.log(data);
    }, [currency])
    // console.log(data);
    return { data, loading };
}

export default useCurrencyInfo;