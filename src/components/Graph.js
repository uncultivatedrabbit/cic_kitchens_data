import React, { Component } from "react";
import { Scatter } from "react-chartjs-2";

export default class Graph extends Component {
  render() {
    return (
      <>
        <Scatter
          data={this.props.data}
          options={{
            title: {
              display: true,
              text: "Total Cost vs Number of Cases Ordered",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
            scaleShowValues: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    autoSkip: false,
                  },
                },
              ],
            },
          }}
        />
      </>
    );
  }
}
