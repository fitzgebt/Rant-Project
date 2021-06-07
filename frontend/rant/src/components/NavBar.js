import { Link }from 'react-router-dom'


export default function NavBar() {
    return (
        <nav className="navbar fixed-top navbar-light bg-light" style={{letterSpacing: 3}}>
            <div className="container">
                <Link to="/home">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/posts/new">New Post</Link>
            </div>
        </nav>
    )
}