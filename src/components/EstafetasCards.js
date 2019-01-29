import React, { Component } from 'react';
import {Button, Card, CardBody, CardSubtitle, CardTitle} from "reactstrap";


class EstafetasCards extends Component {
    render() {
        return (<Card className='col-md-3'>
            <Card className='card_estafeta'>
                <CardBody>
                    <img className='img_estafeta'  alt={'lol'}
                         src={'https://www.comshalom.org/wp-content/uploads/2018/02/pexels-photo-683381.jpeg'}/>
                    <CardTitle key={this.props.person.key} style={{display:'block'}}> {this.props.person.name}</CardTitle>
                    <CardSubtitle  style={{color:'#999'}}>{this.props.person.name}</CardSubtitle>
                    <Button className='saber_mais_botao'><p style={{textAlign: 'center', margin:'auto' ,color:'black'}}>mais...</p></Button>
                </CardBody>
            </Card>
        </Card>

        );
    }
}

export default EstafetasCards;
