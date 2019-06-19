import React from "react";
import axios from "axios";

export default class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      city: "",
      country: "",
      temparature: "",
      humidity: "",
      description: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit(event) {
    event.preventDefault();

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${
          this.state.country
        }&appid=429a441e0a1df154f45459840141bae7`
      )

      .then(res => {
        console.log(res.data);
        this.setState({
          temparature: res.data.main.temp,
          city: res.data.name,
          country: res.data.sys.country,
          humidity: res.data.main.humidity,
          description: res.data.weather[0].description
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={this.state.city}
            onChange={this.onChange}
          />

          <input
            type="text"
            placeholder="Country"
            name="country"
            value={this.state.country}
            onChange={this.onChange}
          />
          <br />
          <button>Submit</button>
        </form>

        <h2>Humidity; {this.state.humidity}</h2>
        <h2>Des: {this.state.description}</h2>
        <h2>Temp: {this.state.temparature}</h2>
      </div>
    );
  }
}
