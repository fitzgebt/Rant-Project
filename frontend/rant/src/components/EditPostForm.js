import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import uuid from 'uuid';
import { connect } from 'react-redux';
import editPost from '../actions/editPost';

class editPostForm extends Component {

    state = {
        text: (this.props.post ? this.props.post.text : ""),
        id: (this.props.post ? this.props.post.id : ""),
        author: (this.props.post ? this.props.post.author : "")
    }

    componentDidUpdate(prevProps) {
        if (prevProps.post === undefined) {
            this.setState({...this.props.post})
        }
    }

    handleChange = (post) => {this.setState({...this.state, ...post})}

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form className="form-horizontal" onSubmit={this.handleOnSubmit.bind(this)}>
                                <div className="form-group">
                                    <label htmlFor="text" className="col-md-4 control-label">Text</label>
                                    <div className="col-md-5">
                                    <textarea
                                        className="form-control"
                                        name="text"
                                        value={this.state.text}
                                        onChange={this.handleOnChange}
                                    />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="author" className="col-md-4 control-label">Codename</label>
                                    <div className="col-md-5">
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="author"
                                        value={this.state.author}
                                        onChange={this.handleOnChange}
                                    />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-6 col-md-offset-4">
                                    <button type="submit" className="btn btn-default">Rant About It!</button>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
        )
    }
}