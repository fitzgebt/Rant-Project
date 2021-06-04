import { Link }from 'react-router-dom'


export default function NavBar() {
// debugger
    return (
        <nav class="navbar navbar-light">
        {/* // <nav class="navbar fixed-top navbar-light bg-light"> */}
            <div class="container-fluid">
                <Link to="/home">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/posts/new">New Post</Link>
            </div>
        </nav>
    )
}