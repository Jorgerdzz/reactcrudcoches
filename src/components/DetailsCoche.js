import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class DetailsCoche extends Component {

    url = Global.apiCoches;

    state = {
        coche: []
    }

    loadCoche = () => {
        let request = "api/Coches/FindCoche/" + this.props.idcoche;
        axios.get(this.url + request).then(response=>{
            this.setState({
                coche: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadCoche();
    }

  render() {
    return (
        <div className='row justify-content-center'>
            <div className="card" style={{width: "auto"}}>
                <img src={this.state.coche.imagen} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{this.state.coche.modelo}</h5>
                    <p className="card-text">Marca: {this.state.coche.marca}</p>
                    <p className="card-text">Conductor: {this.state.coche.conductor}</p>
                    <NavLink to={"/"} className="btn btn-primary">Volver</NavLink>
                </div>
            </div>
        </div>
      
    )
  }
}
