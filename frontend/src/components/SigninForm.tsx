import { UserSignin } from "@sanskarworks/blog"
import { useState } from "react"
import { Header } from "./Header"
import { LabelledInputBar } from "./LabelledInputBar"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const SigninForm = () => {
    const [signinInputs, setSigninInputs] = useState<UserSignin>({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, signinInputs)
            const jwt = response.data.token
            const user = response.data.name
            localStorage.setItem("token", jwt)
            localStorage.setItem("user", user)
            navigate("/blogs")    
        }catch(e){
            alert("An error occurred while signin")
        }
    }

    return <div className="flex h-screen flex-col justify-center">
    <div className="flex justify-center">
        <div className="w-full px-10 max-w-md">
            <Header type="signin" />
            <LabelledInputBar title="E-mail" placeholder="name@gmail.com" onchange={(e) => {
                setSigninInputs(c => ({
                    ...c,
                    email: e.target.value
                }))
            }} />

            <LabelledInputBar title="Password" type={"password"} placeholder="Enter Password" onchange={(e) => {
                setSigninInputs(c => ({
                    ...c,
                    password: e.target.value
                }))
            }} />

            <button type="button" onClick={sendRequest} className="mt-5 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none 
            focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Signin</button>
        </div>
    </div>
</div>
}