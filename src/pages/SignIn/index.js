import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Container } from "./styles";

import Logo from "../../assets/logo.svg";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  handleSignIn = e => {
    e.preventDefault();
    console.log("signIn", this.state);
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar" });
    } else {
      this.props.history.push("/home");
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
          <img src={Logo} alt="QuickLife logo" />
          <h2>Login</h2>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="email"
            placeholder="E-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/registrar">Não tem conta? Registre-se agora!</Link>
        </Form>
      </Container>
    );
  }
}

export default SignIn;
