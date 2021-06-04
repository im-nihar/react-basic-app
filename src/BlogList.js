import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>

                </div>
            ))}
            {/* {     //to display when no more blogs
                blogs && blogs.length === 0 &&
                ( <div className="blog-preview"  >
                    <h2>No more Blogs!</h2>
                </div>
                )
            } */}
        </div>
    )
}

export default BlogList;