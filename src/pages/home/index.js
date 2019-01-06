import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeBanner from './homebanner';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeBanner />
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
