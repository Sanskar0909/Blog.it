import { Link } from "react-router-dom"
import { Avatar } from "./BlogLayout"

export const Appbar = () => {
    const user = localStorage.getItem("user") || "User"
    return <div className="border-b flex justify-between mx-10 mb-4">
        <div className="flex flex-col justify-center m-4">
            <Link to={'/blogs'}>
                Blog.it
            </Link>
            
        </div>
        <div className="flex flex-col justify-center">
            <div>
                <Link to={'/publish'}>
                    <button type="button" className="text-white bg-lime-700 hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-2">Create</button>
                </Link>
                <Avatar name={user} size="w-10 h-10" fontSize="text-md"/>
            </div>
        </div>
    </div>
}