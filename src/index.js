import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";

import "./styles.css";

class App extends React.Component {
  render() {
    return <Form />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
