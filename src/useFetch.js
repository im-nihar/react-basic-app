//Custom Hook

import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        //used when to abort an ongoing request while switching url routes.
        const abortCont = new AbortController();

        // getData()
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal }).then(res => {
                if (!res.ok) {
                    throw Error("could not fetch the data")
                }
                return res.json();
            }).then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
                .catch(err => {
                    //we might not update the data but we are still updating the state and hence updating the home component
                    // so we must recoginze the specific error "AbortError" inside catch block
                    // if AbortError dont update the state. 
                    if (err.name === 'AbortError') {
                        console.log('err', err.name);
                    }
                    else {
                        //other error still catching like network error or server error
                        //then updating the user
                        setError(err.message);
                        setIsPending(false);
                    }
                })
        }, 1000);

        return () => abortCont.abort()
    }, [url]);
    //addition of dependancy array.
    // will watch any value inside it, if that changes, it will fire again(the function)
    return { data, isPending, error };
}

export default useFetch;