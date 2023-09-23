import React, { Component } from "react";
import CalendarTable from './Calendar';
import ap from '../json/AppartmentsContributions.json';

export default class CalendarTables extends Component {
  constructor() {
    super();
    this.state = {
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      ap,
      loading: true
    }
  }

  render() {
    const { months: m, ap } = this.state;
    return (
      <>
        {Object.keys(ap.years).sort().reverse().map(year => {
          return (
            <CalendarTable key={year} year={ap.years[year]} months={m} y={year} />
          )
        })}
      </>
    );
  }
}