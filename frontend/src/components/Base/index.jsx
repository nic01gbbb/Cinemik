import { RiRemoteControl2Fill } from "react-icons/ri";
import { FaCirclePlay } from "react-icons/fa6";
import React, { useContext } from "react";
import Appcontext from "../ferramentas/Appcontext";
import "./style.css";

function Base() {
  const { usuarios, setusuarios, controle, setcontrole } =
    useContext(Appcontext);
  const { Base, setBase } = useContext(Appcontext);

  const cs = () => {
    setBase(false);
    setcontrole(true);
  };

  return (
    <div className="Base" style={{ display: Base ? "flex" : "none" }}>
      <h1 className="bvc">Bem vindo ao cinemik</h1>
      <h4 className="h4base">
        Aqui você controla a entrada e saida de usuários na sessão
      </h4>
      <img
        className="img"
        src="https://assets.barco.com/transform/cae28ba5-3c2f-4b0c-95bc-20f07fc1adcc/DC-wow-experience-MR"
      />
      <button onClick={cs} className="btnB">
        <RiRemoteControl2Fill />
      </button>
    </div>
  );
}

export default Base;
