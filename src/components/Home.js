import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

export default class Home extends Component {

  url = Global.apiCoches;
  botonEliminar = React.createRef();

  state = {
    coches: []
  }

  loadCoches = () => {
    let request = "api/Coches";
    axios.get(this.url + request).then(response=>{
      this.setState({
        coches: response.data
      })
    })
  }

  componentDidMount = () => {
    this.loadCoches();
  }

  deleteCoche = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'question',
      title: '¿Estás seguro que desea eliminar el coche?',
      timer: 3000,
      timerProgressBar: true,
      showCancelButton: true
    }).then((result)=>{
      if(result.isConfirmed){
        let id = this.botonEliminar.current.value;
        console.log(id)
      let request = "api/Coches/DeleteCoche/" + id;
      axios.delete(this.url + request).then(response=>{
        console.log("eliminado")
        Swal.fire({
          icon: 'success',
          title: '¡Coche eliminadoooooo!!',
          timer: 3000,
          timerProgressBar: true
        }).then(()=>{
          this.loadCoches();
        })
      })
      }
    })
    
  }

  render() {
    return (
      <div>
        <h1>Coches</h1>
        <table className='table table-primary table-striped'>
          <thead>
            <tr>
              <th>MARCA</th>
              <th>MODELO</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.coches.map((coche, index)=> {
                return(
                  <tr key={index}>
                    <td>{coche.marca}</td>
                    <td>{coche.modelo}</td>
                    <td>
                      <NavLink to={"/details/" + coche.idCoche} className="btn btn-success me-2">Detalles</NavLink>
                      <NavLink to={"/update/" + coche.idCoche} className="btn btn-warning me-2">Update</NavLink>
                      <button onClick={this.deleteCoche} value={coche.idCoche} className='btn btn-danger' ref={this.botonEliminar}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
