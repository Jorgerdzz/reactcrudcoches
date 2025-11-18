import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg"
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          marginBottom: "30px",
        }}
      >
        <div className="container-fluid">
          <NavLink
            className="navbar-brand"
            to="/"
            style={{
              fontSize: "1.5rem",
              fontWeight: "800",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            🚗 CochesApp
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link fw-bold" : "nav-link"
                  }
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "#667eea" : "#333",
                    fontWeight: isActive ? "700" : "500",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    transition: "all 0.3s ease",
                  })}
                >
                  🏠 Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link fw-bold" : "nav-link"
                  }
                  to="/createcoche"
                  style={({ isActive }) => ({
                    color: isActive ? "#667eea" : "#333",
                    fontWeight: isActive ? "700" : "500",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    transition: "all 0.3s ease",
                  })}
                >
                  ➕ Nuevo Coche
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
