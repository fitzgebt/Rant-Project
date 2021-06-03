import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from '../components/PostCard';
import  deletePost  from '../actions/deletePost';
import {Route, Switch} from 'react-router-dom'
import PostForm from '../components/PostForm'
import Home from '../components/Home';
import fetchPosts from '../actions/fetchPosts'
import { Link } from 'react-router-dom';


class PostsContainer extends Component {

    componentDidMount() {
        console.log("componenDidMount")
        this.props.fetchPosts()
    }

    render() {
        console.log("postContainer render")
        console.log(this.props)
        const { posts, deletePost } = this.props
        
        return (
            <>
            <Switch>
                <Route exact path="/"><Home /> </Route>
                <Route exact path="/home"><Home /> </Route>
                <Route exact path="/posts/new">
                    <PostForm />
                </Route>
                <Route exact path="/posts">
                    <div>
                        <hr />
                        <div className="row justify-content-center">
                            <h2>Posts</h2>
                        </div>
                        <hr />

                        <div className="container" class="overflow-scroll">
                            <div className="row" >
                                <div className="col-md-3" >
                                    {posts.posts && posts.posts.map(post => <PostCard key={post.id} post={post} deletePost={deletePost} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </Route>
                <Route 
                    path="/posts/:id" 
                    render={(routerProps, posts) => {
                        debugger
                        return <PostCard {...routerProps}{...this.props.posts.posts}/>}
                    }
                />
            </Switch>
            </>
        )
    }
}

const mapStateToProps = state => {
    console.log("map state to props", state.posts.posts)
    return ({
      posts: state.posts
    })
  }
  
  export default connect(mapStateToProps, { deletePost, fetchPosts })(PostsContainer);