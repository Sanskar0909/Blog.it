import { blogType } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogLayout"

export const DetailedBlog = ({ blog }: { blog: blogType }) => {
    return <div>
            <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 mt-10 max-w-screen-2xl">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 text-sm mt-4">
                        Posted on July 24, 2023
                    </div>
                    <div className="mt-2 text-justify">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 ml-10">
                    <div>
                        Author
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col justify-center">
                            <Avatar name={"Sanskar"} size="w-8 h-8" fontSize="text-sm"/>
                        </div>
                        <div className="ml-4">
                            <div className="text-xl font-extrabold mt-5 ">
                                {blog.author.name}
                            </div>
                            <div className="text-slate-500">
                                Random catchphrase which we can add a column for in the DB
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}