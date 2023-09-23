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
          id: 4,
          name: 'Log in',
          icon: 'fas fa-right-to-bracket fa-lg',
          page: 'login'
        }
      ],
      moneyBox: 2050
    }
  }

  render() {
    return (
      <div className="_navbar rounded-4 d-flex justify-content-evenly align-items-center bg-dark">
        <span className="moneyBox bg-black pt-2 pb-2 px-3 rounded-3 align-items-center d-flex"><i className="fas fa-wallet fa-xl"></i><span className="ps-3 fs-5 fw-bold">{this.state.moneyBox} MAD</span></span>
        {this.state.links.map(link => { 
          return <a href={link.page} title={link.name} key={link.id} className="fa-lg text-light"><i className={link.icon}></i></a>
        })}
      </div>
    )
  }
}