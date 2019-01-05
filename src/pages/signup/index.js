import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/react.svg";
import { Form, Container } from "./styles";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, email: "", password: "", error: "" };
  }

  handleSignUp = e => {
    e.preventDefault();
    console.log("signUp", this.state);
  };

  togglePass = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <img src={Logo} alt="Quicklife logo" />
          <h2>Cadastro</h2>
          {this.state.error && <p>{this.state.error}</p>}
          <Input
            type="email"
            placeholder="E-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Input type="text" placeholder="Usuário" />
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
          <button type="submit">Cadastrar</button>
          <hr />
          <Link to={"/entrar"}>Já possui uma conta? Faça login!</Link>
        </Form>
      </Container>
    );
  }
}

export default SignUp;
