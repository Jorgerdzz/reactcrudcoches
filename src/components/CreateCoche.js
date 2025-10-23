import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';

export default class CreateCoche extends Component {

    url = Global.apiCoches

    cajamarca = React.createRef();
    cajamodelo = React.createRef();
    cajaconductor = React.createRef();
    cajaimagen = React.createRef();

    state = {
        status: false
    }

    insertCoche = (e) =>{
        e.preventDefault();
        let request = "api/Coches/InsertCoche";
        let coche = {
            marca: this.cajamarca.current.value,
            modelo: this.cajaconductor.current.value,
            conductor: this.cajaconductor.current.value,
            imagen: this.cajaimagen.current.value
        }
        axios.post(this.url + request, coche).then(response=>{
            Swal.fire({
                icon:'success',
                title: 'Coche insertado correctamente',
                timer: 3000,
                timerProgressBar: true,
            }).then(() => {
                this.setState({
                    status: true
                })
            })
        })
    }

  render() {
    return (
      <div>
        {
            this.state.status &&
            <Navigate to={"/"}/>
        }
        <h1>Create Coche</h1>
            <form onSubmit={this.insertCoche}>
            <label>Marca:</label>
            <input type='text' ref={this.cajamarca} className='form-control'></input>
            <label>Modelo:</label>
            <input type='text' ref={this.cajamodelo} className='form-control'></input>
            <label>Conductor:</label>
            <input type='text' ref={this.cajaconductor} className='form-control'></input>
            <label>URL imagen:</label>
            <input type='text' ref={this.cajaimagen} className='form-control'></input>
            <button className='btn btn-primary'>Insertar coche</button>
        </form>
      </div>
    )
  }
}
