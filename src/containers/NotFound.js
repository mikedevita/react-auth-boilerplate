import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NotFound extends Component {
  render() {
    return (<div className="container">
      <div className="text-center NotFound">
        <h1>Page Not Found</h1>
        <p>Whoa there, looks like you tried visiting a page which doesn't exist yet. Sorry about that.</p>
        <p>Lets get you back on track, head <Link to="/">home</Link> instead.</p>
      </div>
    </div>);
  }
}
