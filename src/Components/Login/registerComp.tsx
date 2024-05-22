import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

interface PhoneNumberDetails {
    name: string,
    aadharNumber: string,
    contactNumber: string, 
    password: string,
    confirmPassword: string,
}

interface PhoneNumberProps{
    handleSubmit: ({name, aadharNumber, contactNumber, password, confirmPassword}: PhoneNumberDetails)=> void;
}

export function RegisterComp({handleSubmit}: PhoneNumberProps) {
    const [details, setdetails]= useState<PhoneNumberDetails>({
        name: '',
        aadharNumber: '',
        contactNumber: '',
        password: '',
        confirmPassword: ''
    })
    const handleChange= (event: { preventDefault: () => void; target: { name: string; value: string; }; })=> {
        event.preventDefault();
        const name= event.target.name;
        const value= event.target.value;
        setdetails({
            ...details, 
            [name]: value
        })
    }
    return (
        <>
            <form className="space-y-4" onSubmit={(event)=> {
                event.preventDefault();
                if(details.password !== details.confirmPassword ) {
                    toast("Password & Confirmation doesn't match ")
                } else {
                    handleSubmit(details)
                }
            }}>
                <div>
                    <label
                        htmlFor="name"
                        className="text-sm text-gray-700 block mb-1"
                    >
                        <span className="text-red-500">*</span>Name:
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={details.name}
                        onChange={handleChange}
                        required

                    />
                </div>
                <div>
                    <label
                        htmlFor="aadharNumber"
                        className="text-sm text-gray-700 block mb-1"
                    >
                        <span className="text-red-500">*</span>Aadhar Number:
                    </label>
                    <input
                        id="aadharNumber"
                        name="aadharNumber"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={details.aadharNumber}
                        onChange={handleChange}
                        required

                    />
                </div>
                <div>
                    <label
                        htmlFor="contactNumber"
                        className="text-sm text-gray-700 block mb-1"
                    >
                        <span className="text-red-500">*</span>Contact Number:
                    </label>
                    <input
                        id="contactNumber"
                        name="contactNumber"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={details.contactNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="text-sm text-gray-700 block mb-1"
                    >
                        <span className="text-red-500">*</span>Set Password:
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={details.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="confirmPassword"
                        className="text-sm text-gray-700 block mb-1"
                    >
                        <span className="text-red-500">*</span>Confirm Password:
                    </label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={details.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                >
                    Register
                </button>
            </form>
            <ToastContainer 
                position="bottom-right"
                theme="dark"
            />
        </>
    );
}
