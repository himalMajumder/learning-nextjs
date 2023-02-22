import { createContext, useState, useContext} from 'react'

export const Message_data = createContext("");

export function Message_Value() {
	return useContext(Message_data);
}

function Context({children}){
    const [message, setMessage] = useState();

    return (
        <Message_data.Provider value={{ message, setMessage}} >
            {children}
        </Message_data.Provider>
    )
}

export default Context;