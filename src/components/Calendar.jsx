import React, { Component } from "react";

export default class CalendarTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: props.year,
      months: props.months,
      y: props.y
    }
  }

  render() {
    return (
      <div className="calendar rounded-3 table-responsive">
        <table className="table table-striped table-hover table-dark mb-0 text-center">
          <thead>
            <tr>
              <th className="align-middle">Year</th>
              <th className="align-middle">Number</th>
              {this.state.months.map((month, index) => <th className="align-middle" key={index} scope="col">{month}</th> )}
            </tr>
          </thead>
          <tbody>
            {this.state.year.map((appartment, index) => {
              return (
                <tr key={appartment.number}>
                  {index === 0 ? <th rowSpan={3} style={{writingMode: "vertical-lr"}}>{this.state.y}</th> : null}
                  <td className="align-middle">#{appartment.number}</td>
                  {Object.values(appartment.months).map((month, index) => {
                    let icon;
                    if (month === true) { icon = "fas fa-check text-success"; }
                    else if (month === false) { icon = "fas fa-xmark text-danger"; }
                    else if (month === null) { icon = ""; }
                    return <td key={index} className="align-middle"><i className={icon}></i></td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}