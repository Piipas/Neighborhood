import React, { Component } from 'react';
import parse from 'html-react-parser';
import background from '../assets/pictures/Home.jpg';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      title: "Neighborhood",
      description: "The best way to stay <mark>organized</mark><b>!",
      background,
    }
  }

  render() {
    const { title, description: desc, background: bg } = this.state;
    return (
      <div className="home vh-100 modal-dialog-centered flex-wrap" style={{backgroundImage: `url(${bg})`}}>
        <div className="text-center w-100">
          <h1 className="w-100 text-capitalize">{title}</h1>
          <p className="w-100">{parse(desc)}</p>
          <a href="calendar" className="mx-auto">
            <button className="btn btn-light fw-semibold rounded-3" type="button">Calendar</button>
          </a>
        </div>
      </div>
    );
  }
}