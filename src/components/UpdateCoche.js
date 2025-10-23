import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';

export default class UpdateCoche extends Component {

    url = Global.apiCoches

    cajamarca = React.createRef();
    cajamodelo = React.createRef();
    cajaconductor = React.createRef();
    cajaimagen = React.createRef();

    state = {
        coche: [],
        status: false
    }

    updateCoche = (e) => {
        e.preventDefault();
        let coche = {
            idCoche: parseInt(this.props.idcoche),
            marca: this.cajamarca.current.value,
            modelo: this.cajaconductor.current.value,
            conductor: this.cajaconductor.current.value,
            imagen: this.cajaimagen.current.value
        }
        let request = "api/Coches/UpdateCoche";
        axios.put(this.url + request, coche).then(response=>{
            Swal.fire({
                icon: 'success',
                title: '¡Coche modificado correctamente!',
                timer: 3000,
                timerProgressBar: true
            }).then(()=>{
                this.setState({
                    status: true
                })
            })
        })
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
      <div>
        {
            this.state.status &&
            <Navigate to={"/"}/>
        }
        <form onSubmit={this.updateCoche}>
            <label>Marca:</label>
            <input type='text' ref={this.cajamarca} className='form-control' defaultValue={this.state.coche.marca}></input>
            <label>Modelo:</label>
            <input type='text' ref={this.cajamodelo} className='form-control' defaultValue={this.state.coche.modelo}></input>
            <label>Conductor:</label>
            <input type='text' ref={this.cajaconductor} className='form-control' defaultValue={this.state.coche.conductor}></input>
            <label>URL imagen:</label>
            <input type='text' ref={this.cajaimagen} className='form-control' defaultValue={this.state.coche.imagen}></input>
            <button className='btn btn-primary'>Modificar coche</button>
        </form>
      </div>
    )
  }
}
