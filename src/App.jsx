import { useState } from "react";
import React from "react";
import "./App.css";
import Usuario from "./components/Usuario";
import Provider from "./components/ferramentas/provider";
import Base from "./components/Base";
import Controle from "./components/Areadecontrole";
import Sessão from "./components/Sessão";
import VerificarSala from "./components/verificarSala";
import { Index2 } from "./components/verificarSala/index2";

function App() {
  return (
    <div className="">
      <Provider>
        <Base />
        <Controle />
        <Usuario />;
        <VerificarSala />
        <Index2 />
        <Sessão />
      </Provider>
    </div>
  );
}

export default App;
