import React, {Component, Fragment} from 'react'
import PostCard from './PostCard'
import PostForm from './PostForm'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

// class Posts extends Component {

//     render() {

//         return (
//             <>
//                 <ul>
//                     {this.props.posts && this.props.posts.map((post, index) => <li key={post.id}><Link to={'/posts/${post.id}'}> {post.text} </Link></li>)}
//                 </ul>

//             </>
//         )
//     }
// }

// function mapStateToProps(state) {
//     console.log("mapStateToProps")
//     return {posts: state.posts}
//   }
  
  
//   export default connect(mapStateToProps)(Posts)