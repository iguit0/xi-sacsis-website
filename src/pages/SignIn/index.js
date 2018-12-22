import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  signIn() {
    console.log("signIn", this.state);
  }

  render() {
    return (
      <div className="form-inline" style={{ margin: "5%" }}>
        <h2>Login</h2>
        <div className="form-group">
          <input
            style={{ marginRight: "5px" }}
            className="form-control"
            type="text"
            placeholder="E-mail"
            onChange={event => this.setState({ email: event.target.value })}
          />
          <input
            style={{ marginRight: "5px" }}
            className="form-control"
            type="password"
            placeholder="Senha"
            onChange={event => this.setState({ password: event.target.value })}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.signIn()}
          >
            Entrar
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div style={{ marginTop: "15px" }}>
          <Link to={"/registrar"}>Não tem conta? Cadastre-se agora mesmo!</Link>
        </div>
      </div>
    );
  }
}

export default SignIn;
