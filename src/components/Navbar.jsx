import React, { Component } from "react";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      links: [
        {
          id: 1,
          name: 'Home',
          icon: 'fas fa-home fa-lg',
          page: '/'
        }, {
          id: 2,
          name: 'Calendar',
          icon: 'far fa-calendar fa-lg',
          page: 'calendar'
        }, {
          id: 3,
          name: 'Manage',
          icon: 'fas fa-cog fa-lg',
          page: 'manage'
        }, {
          id: 4,
          name: 'Log in',
          icon: 'fas fa-right-to-bracket fa-lg',
          page: 'login'
        }
      ]
    }
  }

  render() {
    return (
      <div className="_navbar rounded-4 d-flex justify-content-evenly align-items-center bg-dark">
        {this.state.links.map(link => { 
          return <a href={link.page} title={link.name} key={link.id} className="fa-lg text-light"><i className={link.icon}></i></a>
        })}
      </div>
    )
  }
}