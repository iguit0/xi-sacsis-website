import React, { Component } from 'react';
import { Link } from 'react-router';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signUp() {
    console.log('signUp', this.state);
  }

  render() {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Cadastrar</h2>
        <div className="form-group">
          <input className="form-control" style={{marginRight: '5px'}} type="text" placeholder="E-mail" onChange={event => this.setState({email: event.target.value})}/>
          <input className="form-control" style={{marginRight: '5px'}} type="password" placeholder="Senha" onChange={event => this.setState({password: event.target.value})}/>
          <button className="btn btn-primary" type="button" onClick={() => this.signUp()}>Cadastrar</button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to={'/entrar'}>Já possui uma conta? Faça login!</Link></div>
      </div>
    );
  }
}

export default SignUp;
