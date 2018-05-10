import React, { Component } from 'react'

export default class Time extends Component {


    render () {

        return (
<div>

            <tr>
                <td>{ this.props.nome }</td>
                <td>{ this.props.vitorias }</td>
                <td>{ this.props.empates }</td>
                <td>{ this.props.derrotas }</td>
                <td>{ this.props.pontos }</td>
            </tr>

</div>            
        );
    }
}