import React, { useContext, createContext, useReducer } from "react";
import { useFetch } from "../hooks/useFetch";
import AppReducer from "../reducer/AppReducer";

const AppContext = createContext();

export const Context = ({ children }) => {  
  const addonsUrl = '/addons';
  const quoteUrl = '/quote';
  const [addOnLoading, addOnError, addOndata] = useFetch(addonsUrl);
  const [quoteLoading, quoteError, quoteData] = useFetch(quoteUrl);

  const intialState = { addOns: [], totalPrice: 0, togglePayment: false };
  const [reducerState, dispatch] = useReducer(AppReducer, intialState);

  return (
    <AppContext.Provider value={{ addOnLoading, addOnError, addOndata, quoteLoading, quoteError, quoteData ,reducerState, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}
export const useContextData = () => {
  return useContext(AppContext);
};