import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const deleteHandler = (id) => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
        }).then(() => {
            console.log("Delete blog");
            // history.go(-1); one page back
            history.push('/')
        })
    }

    return (
        <div className="blog-details">
            { isPending && <div> Loading... </div>}
            {error && <div> {error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Wirtten by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={deleteHandler}>Delete Blog</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails;