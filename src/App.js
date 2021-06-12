import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create/Create';
import BlogDetails from './BlogDetails/BlogDetails';
import NotFound from './NotFound/NotFound';
import EditBlog from './EditBlog/EditBlog';


function App() {

  return (
    // before addition of router
    // <div className="App">
    //   <Navbar></Navbar>
    //   <div className="content">
    //     <Home></Home>
    //   </div>
    // </div>
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home ></Home>
            </Route>
            <Route path='/create'>
              <Create></Create>
            </Route>
            {/* <Route path='/blogs/edit/:id'>
              <EditBlog></EditBlog>
            </Route> */}
            <Route path='/blogs/edit/:id' component={EditBlog} />  
            {/* will automatically pass route props(dev tool props) */}
            <Route path='/blogs/:id'>
              <BlogDetails></BlogDetails>
            </Route>

            {/* '*' will catch any other route */}
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// complete match propety on route 

export default App;
