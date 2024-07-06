import { Appbar } from "../components/Appbar"
import { BlogLayout } from "../components/BlogLayout"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {loading, blogs} = useBlogs();
    if(loading){
        return <div>
            <Appbar />
            <div className="flex justify-center mt-10">
                <div className="flex flex-col justify-center">
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }
    
    return <div className="">
        <Appbar />
        <div className="flex flex-col items-center">
            {blogs.map(blog => 
                    <BlogLayout 
                        id={blog.id}
                        title={blog.title} 
                        name={blog.author.name}
                        content={blog.content}
                        date="2nd July 2024"
                    />
            )}
        </div>
        
    </div>
}