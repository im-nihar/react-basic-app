import './Popup.css';

const Popup = ({ blog, handleClose }) => {
    return (
        <div className="popup-box">
            <div className="box">
                <div className='button-container'>
                    <button className="closing-button" onClick={handleClose}> X</button>
                </div>
                <article>
                    <h2>{blog.title}</h2>
                    <p>Wirtten by {blog.author}</p>
                    <div className='blog-body'>{blog.body}</div>
                </article>
            </div>
        </div>
    )
}

export default Popup;