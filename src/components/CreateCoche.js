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
            modelo: this.cajamodelo.current.value,
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
      <div className="container" style={{ 
        animation: 'fadeIn 0.6s ease-out',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        {
            this.state.status &&
            <Navigate to={"/"}/>
        }
        <h1 style={{
          color: 'white',
          fontWeight: '800',
          fontSize: '2.5rem',
          marginBottom: '30px',
          textAlign: 'center',
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
        }}>
          ➕ Crear Nuevo Coche
        </h1>
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          padding: '40px'
        }}>
          <form onSubmit={this.insertCoche}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                fontWeight: '600', 
                color: '#667eea',
                marginBottom: '8px',
                display: 'block'
              }}>
                🏭 Marca:
              </label>
              <input 
                type='text' 
                ref={this.cajamarca} 
                className='form-control'
                style={{
                  borderRadius: '10px',
                  border: '2px solid #e0e0e0',
                  padding: '12px 15px',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#667eea';
                  e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                fontWeight: '600', 
                color: '#667eea',
                marginBottom: '8px',
                display: 'block'
              }}>
                🚗 Modelo:
              </label>
              <input 
                type='text' 
                ref={this.cajamodelo} 
                className='form-control'
                style={{
                  borderRadius: '10px',
                  border: '2px solid #e0e0e0',
                  padding: '12px 15px',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#667eea';
                  e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                fontWeight: '600', 
                color: '#667eea',
                marginBottom: '8px',
                display: 'block'
              }}>
                👤 Conductor:
              </label>
              <input 
                type='text' 
                ref={this.cajaconductor} 
                className='form-control'
                style={{
                  borderRadius: '10px',
                  border: '2px solid #e0e0e0',
                  padding: '12px 15px',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#667eea';
                  e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            <div style={{ marginBottom: '30px' }}>
              <label style={{ 
                fontWeight: '600', 
                color: '#667eea',
                marginBottom: '8px',
                display: 'block'
              }}>
                🖼️ URL imagen:
              </label>
              <input 
                type='text' 
                ref={this.cajaimagen} 
                className='form-control'
                style={{
                  borderRadius: '10px',
                  border: '2px solid #e0e0e0',
                  padding: '12px 15px',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#667eea';
                  e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            <button 
              className='btn btn-primary'
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                borderRadius: '10px',
                padding: '12px 30px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                width: '100%'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
              }}
            >
              ✅ Crear Coche
            </button>
          </form>
        </div>
      </div>
    )
  }
}
