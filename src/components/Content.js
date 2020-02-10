import React, { Component } from 'react';

class Content extends Component {
  render() {
    console.log('Content render');
    return (
      <div id="article">
          <h2>{this.props.title}</h2>
          <img src={this.props.poster} width="300px"/>
          <p>{this.props.desc}</p>
          <p>{this.props.desc2}</p>
          <p>{this.props.desc3}</p>
          <p>{this.props.desc4}</p>
      </div>
    );
  }
}

export default Content;
