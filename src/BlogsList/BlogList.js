import { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../Popup/Popup";

import './BlogList.css';

const BlogList = ({ blogs, title }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState({});


    const togglePopup = (blog) => {
        setIsOpen(!isOpen);
        setSelectedBlog(blog)
    }

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className='container' key={blog.id}>
                    <div className="blog-preview"  >
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>Written by {blog.author}</p>
                        </Link>
                    </div>
                    <div className="popup-button">
                        <button className="button-popup"   onClick={()=>togglePopup(blog)}>Open Blog
                        </button>
                    </div>
                </div>
            ))}
            {
                isOpen && <Popup blog={selectedBlog}  handleClose={togglePopup}></Popup>
            }
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