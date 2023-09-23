import React, { Component } from "react";
import CalendarTable from './Calendar';
import years from '../json/AppartmentsContributions.json';

export default class CalendarTables extends Component {
  constructor() {
    super();
    this.state = {
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      years,
      loading: true
    }
  }

  updateMonthStatus = (appartment, year, month) => {
    const duplicatedYears = this.state.years;
    const originalMonthStatus = duplicatedYears[year][appartment-1].months[month];
    duplicatedYears[year][appartment-1].months[month] = !Boolean(originalMonthStatus);
    this.setState({years: duplicatedYears})
  }

  setMonthStatusNull = (appartment, year, month) => {
    const duplicatedYears = this.state.years;
    duplicatedYears[year][appartment-1].months[month] = null;
    this.setState({years: duplicatedYears})
  }

  componentDidMount() {
    this.setState({loading: false});
  }

  render() {
    const { months: m, years, loading } = this.state;
    if (!loading) {
      return (
        <div className="calendar rounded-3 table-responsive">
          <table className="table table-striped table-hover table-dark mb-0 text-center">
            <thead>
              <tr className="position-relative">
                <th className="align-middle position-sticky start-0 z-2" scope="col">Year</th>
                <th className="align-middle" scope="col">Number</th>
                {this.state.months.map((month, index) => <th className="align-middle" key={index} scope="col">{month}</th> )}
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {Object.keys(years).sort().reverse().map(year => {
                return (
                  <CalendarTable key={year} year={years[year]} months={m} y={year} updateMonthStatus={this.updateMonthStatus} setMonthStatusNull={this.setMonthStatusNull}/>
                )
              })}
            </tbody>
          </table>
        </div>
      );
    } else { 
      return <div className="calendar align-items-center justify-content-center d-flex"><i class="fa-solid fa-building fa-beat-fade"></i></div>
    }
  }
}