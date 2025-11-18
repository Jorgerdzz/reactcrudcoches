import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import DetailsCoche from "./DetailsCoche";
import { useParams } from "react-router-dom";
import UpdateCoche from "./UpdateCoche";
import CreateCoche from "./CreateCoche";
import "./CochesStyles.css";

export default class Router extends Component {
  render() {
    function DetailsCocheElement() {
      let { idcoche } = useParams();
      return <DetailsCoche idcoche={idcoche} />;
    }

    function UpdateCocheElement() {
      let { idcoche } = useParams();
      return <UpdateCoche idcoche={idcoche} />;
    }

    return (
      <BrowserRouter>
        <Menu />
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:idcoche" element={<DetailsCocheElement />} />
            <Route path="/update/:idcoche" element={<UpdateCocheElement />} />
            <Route path="/createcoche" element={<CreateCoche />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
