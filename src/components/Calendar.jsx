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
      <>
        {this.state.year.map((appartment, index) => {
          return (
            <tr key={appartment.number} className="position-relative">
              {index === 0 ? <th rowSpan={3} className="position-sticky start-0 z-2" style={{writingMode: "vertical-lr"}}>{this.state.y}</th> : null}
              <td className="align-middle">#{appartment.number}</td>
              {Object.keys(appartment.months).map((month, index) => {
                let icon;
                if (appartment.months[month] === true) { icon = "fas fa-check text-success"; }
                else if (appartment.months[month] === false) { icon = "fas fa-xmark text-danger"; }
                else if (appartment.months[month] === null) { icon = ""; }
                return <td key={index} className="align-middle" onDoubleClick={_ => this.props.setMonthStatusNull(appartment.number, this.state.y, month)} onClick={_ => this.props.updateMonthStatus(appartment.number, this.state.y, month)}><i className={icon}></i></td>
              })}
            </tr>
          )
        })}
      </>
    )
  }
}