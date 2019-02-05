import React from 'react';
import {Label, Input, Button} from 'reactstrap';
import {Link} from "react-router-dom";
import axios from "axios";


export default class Definicoes extends React.Component {


    state = {
        userinfo: []
    };

    componentDidMount() {
        axios.get('http://167.99.202.225/api/users/1')
            .then(response => {
                this.setState({userinfo: response.data.data});
                console.log(this.state.userinfo.tipo.tipo);
            })
            .catch(function (error) {
                console.log(error);
            })
    }





    render() {

        return (
            <main style={{zIndex: '-15555px'}} role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h2">Definições</h1>
                </div>
            <div style={{margin:'0 auto' , height:'auto'}}>
                <div style={{margin:'0 auto 100px auto' , width:'70%'}}>

                </div>
                <div style={{margin:'0 auto 20px auto' , width:'70%'}}>
                    <Label for="nome">Nome Completo</Label>
                    <Input
                        type="nome"
                        name="nome"
                        id="nome"
                        placeholder={this.state.userinfo.nome}
                     />
                </div>
                <div style={{margin:'0 auto 20px auto' , width:'70%'}}>
                    <Label for="email">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder={this.state.userinfo.email}
                        />

                </div>
                <div style={{margin:'0 auto 20px auto' , width:'70%'}}>
                    <Label for="telefone">Telefone</Label>
                    <Input
                        type="telefone"
                        name="telefone"
                        id="telefone"
                        placeholder={this.state.userinfo.telefone}
                        />

                </div>
                <div style={{margin:'0 auto 20px auto' , width:'70%'}}>
                    <Label for="data_nascimento">Data de nascimento</Label>
                    <Input
                        type="data_nascimento"
                        name="data_nascimento"
                        id="data_nascimento"
                        placeholder={this.state.userinfo.data_nascimento}
                        />

                </div>
                <div style={{margin:'0 auto 20px auto' , width:'70%'}}>

                    <form>
                        <Label for="tipo">Password</Label>
                        <div className="form-row">
                            <div className="col" style={{display:'inline' , float:'left'}}>
                                <input disabled style ={{outline:'none' , border:'none'}}type="text" className="form-control" placeholder="***********"></input>
                            </div>
                            <div style={{display:'inline' , float:'right'}} >
                                <Button color="link"> <Link to={{}}

                                >Alterar password</Link>
                                </Button>

                            </div>
                        </div>
                    </form>

                </div>
                <div style={{margin:'0 auto 20px auto' , width:'70%'}}>
                    <div style={{marginBottom: '20px '}}>
                    <Label for="tipo">Função</Label>
                    <Input
                        type="tipo"
                        name="tipo"
                        id="tipo"
                        placeholder={this.state.userinfo.tipo}
                    />
                        </div>
                    <Button style={{padding: '0'}}color="link"> <Link to={{}}

                    >Apagar conta</Link>
                    </Button>

                    <div style={{margin:'0 auto 20px auto'}}>
                    <Button style={{marginRight:'20px'}} className='btn_detalhes' color="link" size="m" ><Link to="/"

                    >Cancelar</Link></Button>


                    <Button className='btn_detalhes' size="m"> <Link to={{}}

                    >Guardar alterações</Link>
                    </Button>
                    </div>
                </div>

            </div>
            </main>
        );
    }
}