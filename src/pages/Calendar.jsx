import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import CalendarTables from '../components/Calendars'

export default class Calendar extends Component {
  constructor() {
    super();
    this.state = {  }
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <CalendarTables />
      </div>
    )
  }
}