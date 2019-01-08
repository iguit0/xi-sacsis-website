import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

export default class Footer extends Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="bottom">
                <Navbar.Brand><i className="fa fa-globe"></i> Rota atual: <Navbar.Text>{window.location.pathname}</Navbar.Text></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end text-center">
                    <Navbar.Text>
                        <i className="fa fa-code"></i> Desenvolvido por: <a href="https://github.com/iguit0" target="_blank" rel='noreferrer noopener'>Igor Alves</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}
