import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  };

  componentDidMount() {
    axios.get(process.env.API_URL + '/posts')
      .then(res => {
        this.setState({
          posts: res.data,
        });
      })
      .catch(ex => {
        console.log(ex);
      });
  }

  render() {
    return (
      <div>
        { this.state.posts.map((item, index) =>
          <p key={ index }>{ item.id }. { item.title }
            <br/>
            { item.body }
            <br/>
            By { item.username }</p>,
        ) }
      </div>
    );
  }
};