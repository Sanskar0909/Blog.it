import { Appbar } from "./Appbar"

export const DetailedBlogSkeleton = () => {
    return <div>
    <Appbar />
<div className="flex justify-center">
    <div className="grid grid-cols-12 px-10 mt-10 max-w-screen-2xl w-full">
        <div className="col-span-8">
            <div className="text-5xl font-extrabold">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            </div>
            <div className="text-slate-500 text-sm mt-4">
                <div className="mt-4 h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div className="mt-4 h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div className="mt-4 h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            </div>
            <div className="mt-2 text-justify">
                <div className="mt-5 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="mt-5 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="mt-5 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="mt-5 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="mt-5 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="mt-5 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            
            </div>
        </div>
        <div className="col-span-4 ml-10">
            <div>
                <div className="mt-4 h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div className="mt-4 h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div className="mt-4 h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div className="mt-4 h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            </div>
        </div>
    </div>
</div>
</div>
}

