import React from "react";
import "./App.css";
import CurrencyFormat from "react-currency-format";
import Graph from "./components/Graph";
import PFGData from "./data/PFG_2019.json";
import USFOODSDATA from "./data/US_Foods_2019.json";

export default class App extends React.Component {
  state = {
    labels: [],
    datasets: [
      {
        label: "US Foods Product",
        backgroundColor: "rgba(75,192,192,1)",
        pointBorderColor: "rgba(0,0,0,1)",
        pointBorderWidth: 0.5,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 6,
        pointHitRadius: 10,
        data: [],
      },
      {
        label: "PFG Product",
        backgroundColor: "rgba(255,192,192,1)",
        pointBorderColor: "rgba(0,0,0,1)",
        pointBorderWidth: 0.5,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "rgba(255,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 6,
        pointHitRadius: 10,
        data: [],
      },
    ],
  };

  componentDidMount() {
    // handle US FOODS DATA
    const totalUSDollars = USFOODSDATA.map((data) => {
      return data.Dollars;
    });
    const filteredUSTotalDollars = totalUSDollars.filter((data) => {
      return data !== 0;
    });
    const numUSCases = USFOODSDATA.map((data) => {
      return data.Cases;
    });
    let scatterUSData = [];
    for (let i = 0; i < filteredUSTotalDollars.length; i++) {
      scatterUSData.push({ y: filteredUSTotalDollars[i], x: numUSCases[i] });
    }

    // handle PFG DATA
    const totalPFGDollars = PFGData.map((data) => {
      return +(
        parseFloat(data.CostperCase.replace(/[$]/g, "")) * data.Cases
      ).toFixed(2);
    });
    const numPFGCases = PFGData.map(data => {
      return data.Cases
    })
    let scatterPFGData = []
    for (let i = 0; i < totalPFGDollars.length; i++){
      scatterPFGData.push({
        y: totalPFGDollars[i],
        x: numPFGCases[i]
      })
    }

    this.setState({
      datasets: [
        {
          ...this.state.datasets[0],
          data: scatterUSData,
        },
        {
          ...this.state.datasets[1],
          data: scatterPFGData,
        },
      ],
    });
  }

  render() {
    console.log(this.state.datasets);
    return (
      <div>
        <Graph data={this.state} />
      </div>
    );
  }
}
