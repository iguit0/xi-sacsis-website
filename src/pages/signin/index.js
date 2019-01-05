import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Container } from "./styles";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import Logo from "../../assets/react.svg";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
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

  togglePass = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
          <img src={Logo} alt="QuickLife logo" />
          <h2>Login</h2>
          {this.state.error && <p>{this.state.error}</p>}
          <Input
            type="email"
            placeholder="E-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <InputGroup className="mb-3">
            {this.state.show ? (
              <Input
                type="text"
                placeholder="Senha"
                onChange={e => this.setState({ password: e.target.value })}
              />
            ) : (
              <Input
                type="password"
                placeholder="Senha"
                onChange={e => this.setState({ password: e.target.value })}
              />
            )}
            <InputGroupAddon
              addonType="append"
              onClick={() => this.togglePass()}
            >
              <InputGroupText>
                {this.state.show ? (
                  <i className="fa fa-eye" />
                ) : (
                  <i className="fa fa-eye-slash" />
                )}
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/registrar">Não tem conta? Registre-se agora!</Link>
        </Form>
      </Container>
    );
  }
}

export default SignIn;
