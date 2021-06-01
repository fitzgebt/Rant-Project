import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addPost } from '../actions/posts';

class PostForm extends Component {

    state = {
        text: '',
        author: ''
    }

    handleOnChange = event => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
      }
    
      handleOnSubmit = event => {
        event.preventDefault();
        const post = {...this.state, id: uuid() };
        this.props.addPost(post);
        this.setState({
          text: '',
          author: ''
        });
      }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
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
                                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
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
                                    <button type="submit" className="btn btn-default">Rant About It</button>
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

export default connect(null, { addPost })(PostForm);