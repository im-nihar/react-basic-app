import './Popup.css';

const Popup = ({ blog, handleClose }) => {
    console.log("plese",blog);
    return (
        <div className="popup-box">
            <div className="box">
                <div className='button-container'>
                    <button className="close-button" onClick={handleClose}> Close</button>
                </div>
                <article>
                    <h2>{blog.title}</h2>
                    <p>Wirtten by {blog.author}</p>
                    <div className="blog-body">{blog.body}</div>
                </article>
            </div>
        </div>
    )
}

export default Popup;