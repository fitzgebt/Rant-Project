import { Link }from 'react-router-dom'


export default function NavBar(props) {
// debugger
    return (
        <>
            <Link to="/posts">Posts</Link>
            <Link to="/posts/new">New Post</Link>

        </>
    )
}