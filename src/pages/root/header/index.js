import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../../../assets/react.svg';

export default class Header extends Component {

    render() {
        const navDropdownTitle = (<span><i className="fa fa-th-list"></i> Categorias</span>);
        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Nav.Link href="/" to="/" active={window.location.pathname === '/'}>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {' Quick Life'}
                    </Navbar.Brand>
                </Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" to="/" active={window.location.pathname === '/'}><i className="fa fa-home"></i> Home</Nav.Link>
                        <Nav.Link href="/fornecedor" to="/fornecedor" active={window.location.pathname === '/fornecedor'}><i className="fa fa-truck"></i> Fornecedor</Nav.Link>
                        <NavDropdown title={navDropdownTitle} id="collasible-nav-dropdown">
                            <NavDropdown.Item>Action</NavDropdown.Item>
                            <NavDropdown.Item>Another action</NavDropdown.Item>
                            <NavDropdown.Item>Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/entrar" to="/entrar" active={window.location.pathname === '/entrar'}><i className="fa fa-sign-in"></i> Login</Nav.Link>
                        <Nav.Link href="/registrar" to="/registrar" active={window.location.pathname === '/registrar'}><i className="fa fa-user-plus"></i> Registrar</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
