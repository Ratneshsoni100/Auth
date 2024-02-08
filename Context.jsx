import { createContext, useContext,useState } from "react";


let Userauth=createContext()


export let UserAuthprovider=({children})=>{
    let [data,setData] = useState( {isLoggedIn:false,userData:null} )

    let logout =() =>{
        setData(
            {isLoggedIn:false,userData:null}
        )
    }
    return <Userauth.Provider value={{data,setData,logout}}>
        {children}
    </Userauth.Provider>
}

export const userauth=()=> useContext(Userauth)