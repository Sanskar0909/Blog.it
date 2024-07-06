export const BlogSkeleton = () => {
    return <div className="flex flex-col justify-center w-screen max-w-xl px-4 cursor-pointer">
                <div className="">
                    <div className="flex items-center">
                        <div className="flex flex-col justify-center">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        </div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                        <div></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                        </div>

                    <div className="font-bold text-2xl mt-2">
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    </div>
                    <div className="my-2 font-light">
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                    </div>
                    <div className="text-slate-500 text-sm">
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                        <hr className="h-px my-8 bg-slate-200 border-0"></hr>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
}

