import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="title text-center">Home</h1>
        <h4 className="subtitle text-center">
          <Link to="/entrar">Entrar</Link>
        </h4>
        <h4 className="subtitle text-center">
          <Link to="/registrar">Cadastrar</Link>
        </h4>
      </div>
    );
  }
}

export default Home;
