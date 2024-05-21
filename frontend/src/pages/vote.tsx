import { useContext, useEffect, useState } from "react";
import Warning from "../Components/Vote/warning";
import SecureVotingPortal from "../Components/Vote/secureVotingPortal";
import TermsConditions from "../Components/Vote/termsConditions";
import { Link, useNavigate } from "react-router-dom";
import { LoginAuthContext } from "../contexts/loginAuthContext";

export default function Vote() {
    const navigate= useNavigate();
    const {loggedUserInfo}= useContext(LoginAuthContext);
    useEffect(()=> {
        if(!loggedUserInfo || loggedUserInfo=='No') {
            // console.log('vote phase');
            navigate('/');
        }
    })
    const [votingPhase, setVotingPhase]= useState(0); 
    if(votingPhase == 0) {
        return (<Warning setVotingPhase={setVotingPhase}/>);
    } else if(votingPhase == 1) {
        return (<TermsConditions setVotingPhase={setVotingPhase}/>);
    } else if(votingPhase == 2) {
        return (<SecureVotingPortal setVotingPhase={setVotingPhase}/>);
    } else {
        // console.log(voted);
        return (
            <>
                <div className="w-full h-screen flex flex-col justify-center items-center bg-black text-white">
                    <h2 className="text-4xl font-black mb-2">Thank You! Your Vote has been counted.</h2>
                    {/* <p className="text-2xl mb-8">You Voted for {voted}</p> */}
                    <Link to='/' className="px-4 py-2 bg-white text-black hover:bg-black hover:text-white rounded-lg text-2xl">Go to Home Page.</Link>
                </div>
            </>
        )
    }
}
