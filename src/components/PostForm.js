import React, { Component } from 'react';
import axios from 'axios';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit      = this.handleSubmit.bind(this);
    this.state             = {
      username: '',
      title:    '',
      body:     '',
    };
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        Username: <input type='text' name='username'
                         onChange={ this.handleInputChange }
                         value={ this.state.username }/><br/>
        Title: <input type='text' name='title'
                      onChange={ this.handleInputChange }
                      value={ this.state.title }/><br/>
        Body: <input type='text' name='body' onChange={ this.handleInputChange }
                     value={ this.state.body }/><br/>
        <button type='submit'>Submit</button>
      </form>
    );
  };

  handleInputChange(event) {
    let name  = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit() {
    axios({
      method: 'post',
      url:    process.env.API_URL + '/posts',
      data:   {
        username: this.state.username,
        title:    this.state.title,
        body:     this.state.body,
      },
    });
  };
};
