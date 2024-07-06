import { UserSignup } from "@sanskarworks/blog"
import { useState } from "react"
import { LabelledInputBar } from "./LabelledInputBar"
import { Header } from "./Header"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const SignupForm = () => {
    const navigate = useNavigate()
    const [signupInputs, setSignupInputs] = useState<UserSignup>({
        name: "",
        email: "",
        password: ""
    })

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, signupInputs)
            const jwt = response.data.token
            localStorage.setItem("token", jwt)
            navigate("/blogs")    
        }catch(e){
            alert("An error occurred while signup")
        }
    }


    return <div className="flex h-screen flex-col justify-center">
                <div className="flex justify-center">
                    <div className="w-full px-10 max-w-md">
                        <Header type="signup" />
                        <LabelledInputBar title="Name" placeholder="Enter Full Name" onchange={(e) => {
                            setSignupInputs(c => ({
                                ...c,
                                name: e.target.value
                            }))
                        }} />

                        <LabelledInputBar title="E-mail" placeholder="name@gmail.com" onchange={(e) => {
                            setSignupInputs(c => ({
                                ...c,
                                email: e.target.value
                            }))
                        }} />

                        <LabelledInputBar title="Password" type={"password"} placeholder="Enter Password" onchange={(e) => {
                            setSignupInputs(c => ({
                                ...c,
                                password: e.target.value
                            }))
                        }} />

                        <button type="button" onClick={sendRequest} className="mt-5 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none 
                        focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Signup</button>
                    </div>
                </div>
            </div>
}

