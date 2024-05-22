import { useContext } from "react";
import { LoginAuthContext } from "../../contexts/loginAuthContext";
import { useNavigate } from "react-router-dom";


export default function LoginButton() {
  const navigate= useNavigate();
  const {loggedUserInfo, handleLoggedUserInfo}= useContext(LoginAuthContext);
  return (
    <button className="px-4 py-1 text-white bg-[#e77300] rounded-md transition-all hover:bg-[#329203] hover:scale-105"
      onClick={()=> {
        if(loggedUserInfo) {
          handleLoggedUserInfo('No');
        }
        navigate('/login');
      }}
    >
        {(loggedUserInfo && loggedUserInfo!='No') ? ('Hi '+ loggedUserInfo) :'Login'}
    </button>
  )
}
