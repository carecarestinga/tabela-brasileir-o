import React, { Component } from 'react'
import TabelaCabecalho from './TabelaCabecalho'
import ListaTimes from './ListaTimes'

export default class Tabela extends Component {

    constructor() {
            super();
            this.state = { ordenarPor:'pontos'  };
    }

    mudaOrdenacao(novaOrdenacao) {
        this.setState({ ordenarPor: novaOrdenacao });
    }

    render() {

        return (
<div className="container">

            <table className="table">
                <TabelaCabecalho mudaOrdenacao={this.mudaOrdenacao} />
                <ListaTimes ordenarPor={this.state.ordenarPor} />
            </table>

</div>
        );
    }
}