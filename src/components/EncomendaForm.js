import React from 'react';
import '../css/Encomendas.css';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";


const EncomendaForm = (props)=> {

        return (
             <Form onSubmit={props.getEncomenda}>
                 <FormGroup>
                     <Label for="numero_encomenda">Tamanho</Label>
                     <Input type="number" name="numero_encomenda" id="numero_encomenda"/>
                 </FormGroup>

                    <FormGroup>
                        <Label for="tamanho">Tamanho</Label>
                        <Input type="select" name="tamanho" id="tamanho">
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                        </Input>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="observacoes" sm={2}>Observações</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="observacoes" id="observacoes" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Label for="data_de_entrega_pretendida">Entrega</Label>
                        <Input
                            type="datetime-local"
                            name="data_de_entrega_pretendida"
                            id="data_de_entrega_pretendida"
                            placeholder="Data de Entrega"
                        />
                    </FormGroup>

                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button>Submit</Button>
                        </Col>
                    </FormGroup>

                </Form>
        );
};

export default EncomendaForm;
