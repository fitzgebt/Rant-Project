import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from '../components/PostCard';
import  deletePost  from '../actions/deletePost';
import {Route, Switch} from 'react-router-dom'
import PostForm from '../components/PostForm'
import Home from '../components/Home';
import fetchPosts from '../actions/fetchPosts'

class PostsContainer extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {

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

                        <div className="container" >
                            
                            <div className="row" >
                                <div className="col-md-3" >
                                    {posts.posts && posts.posts.map(post => <PostCard key={post.id} post={post} deletePost={deletePost} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Route>
                
                <Route 
                    exact path="/posts/:id" 
                    render={(routerProps) => {
                        return <PostCard {...routerProps} post={posts.posts.find(post => post.id === parseInt(routerProps.match.params.id))}/>}
                    }
                />

            </Switch>
            </>
        )
    }
}

const mapStateToProps = state => {
    return ({
      posts: state.posts
    })
  }
  
  export default connect(mapStateToProps, { deletePost, fetchPosts })(PostsContainer);