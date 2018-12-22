import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { Form, Container } from "./styles";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  handleSignUp = e => {
    e.preventDefault();
    alert("Eu vou te registrar");
  };

  signUp() {
    console.log("signUp", this.state);
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <img src={Logo} alt="Quicklife logo" />
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
          <button type="submit">Cadastrar</button>
          <hr />
          <div style={{ marginTop: "15px" }}>
            <Link to={"/entrar"}>Já possui uma conta? Faça login!</Link>
          </div>
        </Form>
      </Container>
    );
  }
}

export default SignUp;
