import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class DetailsCoche extends Component {
  url = Global.apiCoches;

  state = {
    coche: [],
  };

  loadCoche = () => {
    let request = "api/Coches/FindCoche/" + this.props.idcoche;
    axios.get(this.url + request).then((response) => {
      this.setState({
        coche: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadCoche();
  };

  render() {
    return (
      <div
        className="container"
        style={{
          animation: "fadeIn 0.6s ease-out",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <div
          className="card"
          style={{
            border: "none",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              height: "300px",
              overflow: "hidden",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              position: "relative",
            }}
          >
            <img
              src={this.state.coche.imagen}
              className="card-img-top"
              alt={this.state.coche.modelo}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div>
          <div className="card-body" style={{ padding: "30px" }}>
            <h5
              className="card-title"
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "20px",
              }}
            >
              {this.state.coche.modelo}
            </h5>
            <p
              className="card-text"
              style={{
                fontSize: "1.1rem",
                marginBottom: "10px",
                color: "#555",
              }}
            >
              <strong style={{ color: "#667eea" }}>🏭 Marca:</strong>{" "}
              {this.state.coche.marca}
            </p>
            <p
              className="card-text"
              style={{
                fontSize: "1.1rem",
                marginBottom: "25px",
                color: "#555",
              }}
            >
              <strong style={{ color: "#667eea" }}>👤 Conductor:</strong>{" "}
              {this.state.coche.conductor}
            </p>
            <NavLink
              to="/"
              className="btn btn-primary"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                border: "none",
                borderRadius: "10px",
                padding: "12px 30px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
                width: "100%",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow =
                  "0 6px 20px rgba(102, 126, 234, 0.4)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow =
                  "0 4px 15px rgba(102, 126, 234, 0.3)";
              }}
            >
              ⬅️ Volver al Inicio
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
