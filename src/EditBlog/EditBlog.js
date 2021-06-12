import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";

import "./EditBlog.css";

const EditBlog = (props) => {
    const { id } = useParams();
    const { data: blog, error } = useFetch('http://localhost:8000/blogs/' + id);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const history = useHistory();
    const [isPending, setIsPending] = useState(false);


    useEffect(() => {
        if (blog) {
            const { title, body, author } = blog
            setTitle(title)
            setBody(body)
            setAuthor(author)
        }
    }, [blog])

    const handleSubmit = (e) => {
        e.preventDefault();
        const submitBlog = { title, body, author };
        setIsPending(true)
        setTimeout(() => {
            fetch('http://localhost:8000/blogs/' + id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submitBlog)
            })
                .then(() => {
                    console.log("blog edited added");
                    // setIsPending(false);
                    // history.go(-1); one page back
                    history.push('/')
                })
        }, 1200);
    }


    return (
        <div>
            {error && <div>{error} </div>}
            {blog !== null && <div className="create">
                <h2>Add New Blog</h2>
                <form onSubmit={handleSubmit}>
                    <label>Blog title: </label>
                    <input
                        required
                        name='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Blog Content: </label>
                    <textarea
                        required
                        rows='5'
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                    <label>Blog Author: </label>
                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}>
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </select>
                    {!isPending && <button> Edit Blog  </button>}
                    {isPending && <button disabled> Editing </button>}
                </form>
            </div>}
        </div>
    )
}

export default EditBlog;