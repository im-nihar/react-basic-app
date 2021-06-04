import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

    // url='http://localhost:8000/blogs'

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     // setBlogs(blogs)
    // }

    return (
        <div className="home">
            {error && <div>{error} </div>}
            {isPending && <div > <p className="loading-message">Loading...</p> </div>}
            {/* null is false, initially we are setting blogs is null.  */}
            {/* blogs && <BlogList.../> is basically true now. */}
            {blogs && <BlogList blogs={blogs} title='All blogs!' ></BlogList>}
            {/* handleDelete={handleDelete} */}
        </div>
    );
}

export default Home;