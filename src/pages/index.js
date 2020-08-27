import React, { useState } from "react";
import { Link } from "gatsby";
import { Modal } from "react-bootstrap";

import "../assets/scss/mardeurano.scss";

export default function Index() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleOnClick = (e) => {
    e.preventDefault();

    setShow(true);

    console.log(e);
  };

  return (
    <div className="index">
      <div className="link">
        <Link to="/home">
          <img src="images/Shop.png" alt="" />
        </Link>
      </div>

      <div className="DIVGuacamaya">
        <a
          href="/"
          data-toggle="modal"
          data-target="#Guacamaya"
          onClick={handleOnClick}
        >
          <img
            className="Guacamaya"
            src={require("../assets/images/Guacamaya.gif")}
            alt="Guacamaya"
          />
        </a>
      </div>

      <div className="Diamante1">
        <a
          href="/"
          data-toggle="modal"
          data-target="#Diamante1"
          onClick={handleOnClick}
        >
          <img
            className="diamante1"
            src={require("../assets/images/cristaleslluvia01.png")}
            alt=""
          />
        </a>
      </div>

      <div className="Diamante2">
        <a
          href="/"
          data-toggle="modal"
          data-target="#Diamante2"
          onClick={handleOnClick}
        >
          <img
            className="diamante2"
            src={require("../assets/images/cristaleslluvia02.png")}
            alt=""
          />
        </a>
      </div>
      <div className="Diamante3">
        <a
          href="/"
          data-toggle="modal"
          data-target="#Diamante3"
          onClick={handleOnClick}
        >
          <img
            className="diamante3"
            src={require("../assets/images/cristaleslluvia03.png")}
            alt=""
          />
        </a>
      </div>
      <div className="Diamante4">
        <a
          href="/"
          data-toggle="modal"
          data-target="#Diamante4"
          onClick={handleOnClick}
        >
          <img
            className="diamante4"
            src={require("../assets/images/cristaleslluvia04.png")}
            alt=""
          />
        </a>
      </div>

      <div className="Diamante5">
        <a
          href="/"
          data-toggle="modal"
          data-target="#Diamante5"
          onClick={handleOnClick}
        >
          <img
            className="diamante5"
            src={require("../assets/images/cristaleslluvia05.png")}
            alt=""
          />
        </a>
      </div>

      <div className="contentBosque">
        <img
          className="bosque"
          src={require("../assets/images/bosque.png")}
          alt=""
        />
      </div>

      <div className="contentOlas">
        <img className="olas" src="images/olas.gif" alt="" />
      </div>
      <img
        className="splash1"
        src={require("../assets/images/Splash_GIF.gif")}
        alt=""
      />
      <img
        className="splash2"
        src={require("../assets/images/Splash_GIF.gif")}
        alt=""
      />

      <div className="contentTiburcio">
        <img
          className="tiburcio"
          src={require("../assets/images/tiburcio.png")}
          alt=""
        />
      </div>

      <Modal show={show} onHide={handleClose} size="sm">
        <Modal.Header closeButton>
          <div className="title justify-content-center">
            <h5 className="modal-title">Titulo CRISTAL</h5>
          </div>
        </Modal.Header>
        <Modal.Body>Hola Mundo</Modal.Body>
        <div className="modal-footer bg-dark text-white justify-content-center">
          <p>LAS GUACAMAYAS</p>
        </div>
      </Modal>
    </div>
  );
}
