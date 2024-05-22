import { Link } from "react-router-dom";
import LoginButton from "../Login/loginButton";
import { useContext } from "react";
import { LoginAuthContext } from "../../contexts/loginAuthContext";
import { ToastContainer, toast } from "react-toastify";

interface navLinkType {
    text: string;
    link?: string;
    anchor?: boolean; 
    logged?: boolean;
}


const navLinks: navLinkType[]= [
    {
        text: 'Vote Now',
        link: '/vote',
        logged: true,
    },
    {
        text: 'Information',
        link: '/#Information',
        anchor: true,
    }, 
    {
        text: 'Helpdesk',
        link: '/help'
    },
]


export default function Navbar() {
    const {loggedUserInfo}= useContext(LoginAuthContext);
    return (
        <>
            <div className="flex justify-center h-6 bg-gray-200 border-b-2 border-black">
                Election Comission of India
                <span className="w-[2px] h-full bg-black mx-2"></span> 
                This website is made for project work for an educational institute. For Real Website, go to
                <a className="mx-2 animate-pulse text-blue-700 hover:text-red-500" href="https://www.eci.gov.in/" target="_blank">https://www.eci.gov.in/</a>
            </div>

            <div className="px-[5%] flex gap-[2%] items-center justify-between">
                <div className="w-[10%] flex items-center">
                    <img className="w-[75px]" src="https://www.eci.gov.in/newimg/eci-logo-white.svg" alt="Election Commission of India" />
                    <div className="flex flex-col justify-center items-start whitespace-nowrap">
                        <span>भारत निर्वाचन आयोग</span>
                        <span className="font-semibold">Election Commission of India</span>
                    </div>
                </div>
                <div className="w-[50%] flex items-center justify-end gap-[5%]">
                    {navLinks.map((nav:navLinkType, index:number)=> {
                        if(nav?.anchor) {
                            return <a href={nav?.link || ""} className="hover:scale-105" key={index}>{nav.text}</a>
                        }
                        else {
                            return (nav?.logged && (!loggedUserInfo || loggedUserInfo=='No')) ? 
                                <p className="text-gray-500" key={index} onClick={()=> toast('Please Login.')}>{nav.text}</p>
                                :<Link to={nav?.link || ''} className="hover:scale-105" key={index}>{nav.text}</Link>
                        }
                    })}
                    <LoginButton />
                </div>
            </div>
            <ToastContainer 
                position="bottom-right"
                theme="dark"
            />
        </>
    );
}
