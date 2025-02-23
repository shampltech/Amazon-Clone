 import React,{createContext} from "react";
 import { useReducer } from "react";
import { initialState, reducer } from "../../Utility/reducer";




 export const DataContaxt=createContext()

 export const DataProvider=({children,reducer,initialState})=>{

    return(
        <DataContaxt.Provider value={useReducer(reducer,initialState)}>
            {children}

        </DataContaxt.Provider>
    )
 }
