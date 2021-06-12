import { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../Popup/Popup";

import './BlogList.css';

const BlogList = (props) => {
    const { blogs, title } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState({});
    const [newBlogList, setNewBlogList] = useState(blogs);
    // const [newDisplayList, setNewDisplayList] = useState([]);

    const togglePopup = (blog) => {
        setIsOpen(!isOpen);
        setSelectedBlog(blog);
    }

    const filterList = (e) => {
        let str = e.target.value.toLowerCase();
        let newList = [];
        blogs.filter(blog =>
            blog.title.toLowerCase().includes(str)).map(name => {
                // console.log(name);
                return newList.push(name)
            })
        setNewBlogList(newList)
        console.log(newList, blogs);
    }


    return (
        <div className="blog-list">
            <div className='header-container'>
                <div className='header'>
                    <h2>{title}</h2>
                </div>
                <div className='search-field'>
                    {/* <div className='button-container'> */}
                        {/* <button className="close-button" onClick={resetHandler}> X</button> */}
                    {/* </div> */}
                    <input placeholder="Search title" className='input-feild' type="text" onChange={filterList} />
                </div>
            </div>
            {newBlogList.map(blog => (
                <div className='container' key={blog.id}>
                    <div className="blog-preview"  >
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>Written by {blog.author}</p>
                        </Link>
                    </div>
                    <div className="popup-button">
                        <button className="button-popup" onClick={() => togglePopup(blog)}>Open
                        </button>
                    </div>
                </div>
            ))}
            {
                newBlogList.length === 0 && <div className='no-search-data-found'> No Data Found </div>
            }
            {
                isOpen && <Popup blog={selectedBlog} handleClose={togglePopup}></Popup>
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