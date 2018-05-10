import React, { Component } from 'react'
import Time from './Time'

const times = [
                { nome: 'Flamengo', vitorias: 3, empates: 1, derrotas: 0, pontos: 10 },
                { nome: 'Internacional', vitorias: 1, empates: 1, derrotas: 2, pontos: 4 },
                { nome: 'Parana', vitorias: 0, empates: 1, derrotas: 3, pontos: 1 },
            ]


export default class ListaTimes extends Component {


    comparaTimes (timeA, timeB) {
        var criterio = this.props.ordenarPor;
        if (!timeA.hasOwnProperty(criterio) || !timeB.hasOwnProperty(criterio)) {
            return 0;
        }

        if (timeA[criterio] > timeB[criterio]) {
            return -1;
        }

        if (timeA[criterio] < timeB[criterio]) {
            return 1;
        }

        return 0;
    }

    pegaTimesOrdenados () {

        this.setState({
      //      timesOrdenados : this.state.times.sort(this.comparaTimes).bind(this)
        });
        
    }

    render () {

       //const times = this.pegaTimesOrdenados();
        let timesHTML = times.map((time) => (
                <Time nome={time.nome}
                      vitorias={time.vitorias}
                      empates={time.empates}
                      derrotas={time.derrotas}
                      pontos={time.pontos} />
        ));

        return (
<div>

            <tbody>
                { timesHTML }
            </tbody>

</div>
        );
    }
}