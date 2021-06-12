import { useHistory, useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { withRouter } from 'react-router';

import "./BlogDetails.css"

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
        <div>
            <div className="blog-details">
                {isPending && <div> Loading... </div>}
                {error && <div> {error}</div>}
                {blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>Wirtten by {blog.author}</p>
                        <div>{blog.body}</div>
                        <div className='buttons-container'>
                            <button onClick={() => history.push({ pathname: `/blogs/edit/${blog.id}`, state:blog })}>Edit Blog</button>

                            <button onClick={deleteHandler}>Delete Blog</button>

                            {/* <button onClick={() => setIsEditBlogShow(true)}>Edit the Real Blog</button> */}
                        </div>
                    </article>
                )}
            </div>
        </div>
    )
}

export default withRouter(BlogDetails);