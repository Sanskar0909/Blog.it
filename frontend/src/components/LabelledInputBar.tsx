import { ChangeEvent } from "react"

interface label{
    title: string,
    placeholder: string,
    onchange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}

export function LabelledInputBar({title, placeholder, onchange, type}: label){
    return <div className="mt-5">
    <label className="mb-2 text-sm font-semibold">{title}</label>
    <input onChange={onchange}type={type || "text"} id="first_name" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
</div>
}