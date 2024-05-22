import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import IndiaStateMap from "../assets/IndiaStateMap.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { LoginComp } from "../Components/Login/loginSignUpComps";
import { RegisterComp } from "../Components/Login/registerComp";
import { LoginContextValue, LoginAuthContext } from "../contexts/loginAuthContext";

interface PhoneNumberDetails {
    name?: string;
    aadharNumber: string;
    contactNumber: string, 
    password: string;
    confirmPassword?: string;
}

export default function Login() {
    const navigate= useNavigate();
    const {handleLoggedUserInfo} = useContext<LoginContextValue>(LoginAuthContext);
    const [loginPage, setLoginPage]= useState<boolean>(true);

    const handleLoginSubmit = async (details: PhoneNumberDetails) => {
        console.log(details);
        const response = await fetch('http://localhost:4000/api/vote/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details),
        })
        if(!response.ok) {
            toast("Login Failed! Wrong Entries.");
        } else {
            toast("Login Succesful!!");
            //set Context (PENDING)
            setTimeout(()=> {
                navigate('/');
            }, 1000);
        }
    };
    const handleRegisterSubmit= async (details: PhoneNumberDetails) => {
        console.log(details);
        const response = await fetch('http://localhost:4000/api/vote/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details),
        })
        if(!response.ok) {
            toast("Failed to Register.");
        } else {
            toast("Successfull Registration!");
            //set Context (PENDING)
            handleLoggedUserInfo(details.name || '');
            setTimeout(()=> {
                navigate('/');
            }, 1000);
        }
    }

    return (
        <>
            <section className="h-screen bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
                <div className="w-[60%] flex justify-between items-center px-10">
                    <div className="w-[10%] flex">
                        <img className="w-[75px]" src="https://www.eci.gov.in/newimg/eci-logo-white.svg" alt="Election Commission of India" />
                        <div className="flex flex-col justify-center items-start whitespace-nowrap">
                            <span>भारत निर्वाचन आयोग</span>
                            <span className="font-semibold">Election Commission of India</span>
                        </div>
                    </div>
                    <div className="w-[40%]">
                        You can Login/Register to make an account on Voter Light to stay updated with ECI updates.
                    </div>
                </div>
                <div className="flex items-center justify-between w-[60%] shadow-xl rounded-xl p-10">
                    <div className="w-[40%]">
                        <img src={IndiaStateMap} alt="" />
                    </div>
                    <div className="max-w-sm w-[50%] flex flex-col space-y-6">
                        <div className="flex gap-[2%] justify-center items-center">
                            <h2 className={loginPage ? "text-2xl font-bold mb-2" : ''} onClick={()=> setLoginPage(true)}>Login</h2>
                            <span className="text-xl self-start">/</span>
                            <h2 className={loginPage ? '':"text-2xl font-bold"} onClick={()=> setLoginPage(false)}>Register</h2>
                        </div>
                        {loginPage ?
                            <LoginComp handleSubmit={handleLoginSubmit}/>
                            :<RegisterComp handleSubmit={handleRegisterSubmit}/>
                        }
                    </div>
                </div>
            </section>
            <ToastContainer 
                position="bottom-right"
                theme="dark"
            />
        </>
    );
}
