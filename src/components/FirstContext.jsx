import { createContext, useState } from "react"

export const FirstContext = createContext(null);
const FirstContextProvider = (props) =>{
    const[userName, setUserName] = useState("Mickey");
    const[liveIn, setLiveIn] = useState("Yangon")
    return (
        <FirstContextProvider value ={{userName , liveIn}}>
            {props.children}
        </FirstContextProvider>
    )
  
}

export default FirstContextProvider;