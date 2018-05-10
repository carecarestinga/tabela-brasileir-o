import React, { Component } from 'react'

export default class TabelaCabecalho extends Component {

    alteraOrdenacao(event) {
        var colunaSelecionada = event.target.id;
        this.props.mudaOrdenacao(colunaSelecionada);
    }

    render() {

        return (
<div>

            <thead>
                <tr>
                    <th id="nome" onClick={this.alteraOrdenacao}>Time</th>
                    <th id="vitorias" onClick={this.alteraOrdenacao}>Vitórias</th>
                    <th id="empates" onClick={this.alteraOrdenacao}>Empates</th>
                    <th id="derrotas" onClick={this.alteraOrdenacao}>Derrotas</th>
                    <th id="pontos" onClick={this.alteraOrdenacao}>Pontos</th>
                </tr>
            </thead>

</div>     
        );
    }
}
