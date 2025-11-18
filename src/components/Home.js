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
      <div className="container" style={{ animation: 'fadeIn 0.6s ease-out' }}>
        <h1 style={{
          color: 'white',
          fontWeight: '800',
          fontSize: '2.5rem',
          marginBottom: '30px',
          textAlign: 'center',
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
        }}>
          🚗 Gestión de Coches
        </h1>
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden'
        }}>
          <table className='table table-hover mb-0'>
            <thead style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white'
            }}>
              <tr>
                <th style={{ padding: '15px', border: 'none', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>MARCA</th>
                <th style={{ padding: '15px', border: 'none', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>MODELO</th>
                <th style={{ padding: '15px', border: 'none', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.coches.map((coche, index)=> {
                  return(
                    <tr key={index} style={{
                      transition: 'all 0.3s ease',
                      borderBottom: '1px solid #f0f0f0'
                    }}>
                      <td style={{ padding: '15px', verticalAlign: 'middle', fontWeight: '500' }}>{coche.marca}</td>
                      <td style={{ padding: '15px', verticalAlign: 'middle', fontWeight: '500' }}>{coche.modelo}</td>
                      <td style={{ padding: '15px', verticalAlign: 'middle' }}>
                        <NavLink 
                          to={"/details/" + coche.idCoche} 
                          className="btn btn-success me-2"
                          style={{
                            borderRadius: '10px',
                            padding: '8px 16px',
                            fontWeight: '600',
                            fontSize: '0.85rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            transition: 'all 0.3s ease',
                            border: 'none',
                            boxShadow: '0 4px 15px rgba(40, 167, 69, 0.2)'
                          }}
                        >
                          👁️ Detalles
                        </NavLink>
                        <NavLink 
                          to={"/update/" + coche.idCoche} 
                          className="btn btn-warning me-2"
                          style={{
                            borderRadius: '10px',
                            padding: '8px 16px',
                            fontWeight: '600',
                            fontSize: '0.85rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            transition: 'all 0.3s ease',
                            border: 'none',
                            boxShadow: '0 4px 15px rgba(255, 193, 7, 0.2)'
                          }}
                        >
                          ✏️ Editar
                        </NavLink>
                        <button 
                          onClick={this.deleteCoche} 
                          value={coche.idCoche} 
                          className='btn btn-danger' 
                          ref={this.botonEliminar}
                          style={{
                            borderRadius: '10px',
                            padding: '8px 16px',
                            fontWeight: '600',
                            fontSize: '0.85rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            transition: 'all 0.3s ease',
                            border: 'none',
                            boxShadow: '0 4px 15px rgba(220, 53, 69, 0.2)'
                          }}
                        >
                          🗑️ Eliminar
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
