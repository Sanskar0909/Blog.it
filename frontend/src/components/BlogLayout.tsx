import clsx from "clsx"
import { Link } from "react-router-dom"

interface BlogLayoutProps{
    name: string,
    title: string,
    content: string,
    time: Date,
    id: string
}
export const BlogLayout = ({
    id,
    name,
    title,
    content,
    time
}: BlogLayoutProps) => {
    let formattedTime = "Not Date";
    if (time) {
        const date = new Date(time);
        if (!isNaN(date.getTime())) {
            formattedTime = date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
        else{
            console.error("Invalid", time)
        }
    }
    return <Link to={`/blog/${id}`}>
        <div className="flex flex-col justify-center w-screen max-w-xl px-4 cursor-pointer">
            <div className="">
                <div className="flex items-center">
                    <div className="flex flex-col justify-center">
                        <Avatar name={name} size="w-5 h-5" fontSize="text-sm"/>
                    </div>
                    <div className="mx-2"> {name} </div>
                    <div></div>
                    <div className="text-slate-500 text-sm font-light">&#183; {formattedTime}</div>
                </div>

                <div className="font-bold text-2xl mt-2">
                    {title}
                </div>
                <div className="my-2 font-light">
                    {content.length < 200 ? content : content.slice(0, 200) + "..."}
                </div>
                <div className="text-slate-500 text-sm">
                    {`${Math.ceil(content.length / 200)} minute read`}
                    <hr className="h-px my-8 bg-slate-200 border-0"></hr>
                </div>
            </div>

        </div>
    </Link>
    
}

export function Avatar({name, size, fontSize}: {name: string, size: string, fontSize: string}){
    const baseClass = clsx("relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full", size)
    const spanClass = clsx("font-medium text-gray-600", fontSize)
    return <div className={baseClass}>
        <span className={spanClass}>{name[0]}</span>
    </div>
}