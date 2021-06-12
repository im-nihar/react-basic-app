// with props history



import { useHistory, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";

const EditBlog = (props) => {
    console.log("props:::", props);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const history = useHistory();
    const [isPending, setIsPending] = useState(false);


    useEffect(() => {
        if (props.location.state) {
            const { title, body, author } = props.location.state;
            setTitle(title)
            setBody(body)
            setAuthor(author)
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const submitBlog = { title, body, author };

        console.log("submitBlog", submitBlog);
        setIsPending(true)
        // setTimeout(() => {
        //     fetch('http://localhost:8000/blogs/' + id, {
        //         method: 'PUT',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(submitBlog)
        //     })
        //         .then(() => {
        //             console.log("blog edited added");
        //             // setIsPending(false);
        //             // history.go(-1); one page back
        //             history.push('/')
        //         })
        // }, 2000);
    }


    return (
        <div>
            {props.location.state !== null && <div className="create">
                <h2>Add New Blog</h2>
                <form onSubmit={handleSubmit}>
                    <label>Blog title: </label>
                    <input
                        // defaultValue={blog.title}
                        // type="text"
                        required
                        name='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Blog Content: </label>
                    <textarea
                        // defaultValue={blog.body}
                        required
                        rows='5'
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                    <label>Blog Author: </label>
                    <select
                        // defaultValue={blog.author}
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}>
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </select>
                    <button>adddd</button>
                    {/* {!isPending && <button> Add Blog  </button>}
                    {isPending && <button disabled> Uploading </button>} */}
                </form>
            </div>}
        </div>
        //     <div>
        //         <h2>EDit blog here!!</h2>
        //     </div>
    )
}

export default EditBlog;