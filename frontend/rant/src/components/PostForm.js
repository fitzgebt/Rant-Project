import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addPost } from '../actions/posts';

class PostForm extends Component {

    state = {
        text: '',
        author: ''
    }


}

export default connect(null, { addPost })(PostForm);