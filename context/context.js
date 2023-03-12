import { createContext, useState, useContext, useEffect, useCallback} from 'react'
import axios from 'axios'

export const Message_data = createContext("");

export function Message_Value() {
	return useContext(Message_data);
}



function Context({children}){
    const [message, setMessage] = useState("Himal Majumder");
    const [apiData, setApiData] = useState({});

    const fetchWebsiteInfo = useCallback(async () => {
		try {
			await axios
			.get("https://api.coindesk.com/v1/bpi/currentprice.json")
			.then((response) => {
                setApiData(response.data);
                // console.log(response.data.chartName);
			})
			.catch((err) => {
                setApiData({});
                // console.log(err);
			});
		}
		catch (error) {
            setApiData({});
            // console.log(error);
		}
    }, []);

    
    useEffect(() => {
        fetchWebsiteInfo();
    }, []);
    return (
        <Message_data.Provider value={{ message, setMessage, apiData, setApiData}} >
            {children}
        </Message_data.Provider>
    )
}

export default Context;