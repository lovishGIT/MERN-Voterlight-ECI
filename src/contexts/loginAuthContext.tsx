import React, { createContext, useState } from "react";


export interface LoginContextValue {
    loggedUserInfo?: string;
    handleLoggedUserInfo: (name:string)=>void;
}

interface ProviderProps {
    children: React.ReactNode;
}
  
export const LoginAuthContext = createContext<LoginContextValue>({
    loggedUserInfo: '', 
    handleLoggedUserInfo: (name)=> (console.log(name))
});

const LoginContextProvider:unknown= ({children}:ProviderProps)=> {
    const [loggedUserInfo, setLoggedUserInfo]= useState<string>('No');
    const handleLoggedUserInfo= (name: string)=> {
        setLoggedUserInfo(name);
    }
    return <>
        <LoginAuthContext.Provider value={{ loggedUserInfo, handleLoggedUserInfo }}>
            {children}
        </LoginAuthContext.Provider>
    </>
}
export default LoginContextProvider;