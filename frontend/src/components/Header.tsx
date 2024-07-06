import { Link } from "react-router-dom"
export const Header = ({type} : {type: "signin" | "signup"}) => {
return <div>
        <div className="text-3xl text-center font-extrabold">
            {type === "signin" ? "Welcome Back":"Create an account"}
        </div>
        <div className="mt-2 text-slate-500 text-center">
            {type === "signup" ? "Already have an account?" : "Don't have an account?"} 
            <Link className="ml-2 underline" to={(type === "signin")?"/signup":"/signin"}>
                {type === "signin"?"Sign up":"Sign in"}
            </Link>
        </div>
    </div>
}