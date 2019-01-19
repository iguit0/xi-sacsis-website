import React, { Component } from 'react'
import { Form, FormControl, Container, Col, InputGroup, Button } from 'react-bootstrap'

export default class Provider extends Component {
    constructor(...args) {
        super(...args);

        this.state = { validated: false };
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: true });
    }

    render() {
        const { validated } = this.state;
        return (
            <Container>
                <h2 className="text-center">Cadastro de Fornecedor</h2>
                <Form
                    className="mt-4"
                    noValidate
                    validated={validated}
                    onSubmit={e => this.handleSubmit(e)}
                >
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>CNPJ</Form.Label>
                            <Form.Control
                                required
                                type="text"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Razão Social</Form.Label>
                            <Form.Control
                                required
                                type="text"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomNomeFantasia">
                            <Form.Label>Nome Fantasia</Form.Label>
                            <Form.Control
                                required
                                type="text"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomInscricaoMunicipal">
                            <Form.Label>Inscrição Municipal</Form.Label>
                            <InputGroup>
                                <FormControl aria-label="Text input with checkbox" />
                                <InputGroup.Append>
                                    <InputGroup.Checkbox />
                                </InputGroup.Append>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomInscricaoEstadual">
                            <Form.Label>Inscrição Estadual</Form.Label>
                            <Form.Control
                                required
                                type="text"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Ramo de Atividade</Form.Label>
                            <Form.Control
                                required
                                as="select"
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Site</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon3">
                                        https://www.
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl id="basic-url" aria-describedby="basic-addon3" />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Instagram</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon3">
                                        @
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl id="basic-url" aria-describedby="basic-addon3" />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                required
                                type="text"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Button block type="submit" size="lg">Enviar</Button>
                </Form>
            </Container>
        )
    }
}
