import { useParams } from "react-router-dom"
import { DetailedBlog } from "../components/DetailedBlog"
import { useBlog } from "../hooks"
import { DetailedBlogSkeleton } from "../components/DetailedBlogSkeleton";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({ id: id || "" });
    if(loading || !blog){
        return <div>
            <DetailedBlogSkeleton />
        </div>
        
    }
    return <div>
        <DetailedBlog blog={ blog }/>
    </div>
}