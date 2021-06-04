import './Popup.css';

const Popup = ({ selectedBlog, handleClose }) => {
    console.log("plese",selectedBlog);
    return (
        <div className="popup-box">
            <div className="box">
                <div className='button-container'>
                    <button className="close-button" onClick={handleClose}> Close</button>
                </div>
                <h2>asd</h2>
                {/* <article>
                    <h2>{blog.title}</h2>
                    <p>Wirtten by {blog.author}</p>
                    <div>{blog.body}</div>
                </article> */}
            </div>
        </div>
    )
}

export default Popup;