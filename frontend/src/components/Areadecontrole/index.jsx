import { FaHouseDamage } from "react-icons/fa";
import React, { useContext } from "react";
import "./style.css";
import Appcontext from "../ferramentas/Appcontext";

export default function Controle() {
  const { Base, setBase, controle, setcontrole } = useContext(Appcontext);
  const { usuarios, setusuarios, sessao, setsessao } = useContext(Appcontext);
  const { Verusuario, setVerusuario } = useContext(Appcontext);

  const verificarusuario = () => {
    setVerusuario(true);
    setcontrole(false);
  };

  const cadastrarusuarios = () => {
    setcontrole(false);
    setusuarios(true);
  };

  const parasessao = () => {
    setcontrole(false);
    setsessao(true);
  };

  const backcontrole = () => {
    setBase(true);
    setcontrole(false);
  };

  return (
    <div
      className="area-controle"
      style={{ display: controle ? "flex" : "none" }}
    >
      <h1 className="h1areacontrole">Area de controle</h1>

      <button onClick={backcontrole} className="backcontrole">
        <FaHouseDamage />
      </button>

      <div className="btns">
        <div className="Ausuario">
          <button
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
            className="btnCadastrarusuarios"
            onClick={cadastrarusuarios}
          >
            <span className="spancode" style={{}}>
              Cadastrar usuários
            </span>

            <p>ou</p>
            <span className="spancode spancodeC" style={{ bottom: "40px" }}>
              Deletar usuários
            </span>
          </button>
        </div>
        <div className="VerificarUsuario">
          <button
            onClick={verificarusuario}
            style={{ backgroundColor: "#ff4500" }}
          >
            Verificar usuário
          </button>
        </div>

        <div className="Asessão">
          <button style={{ backgroundColor: "#483d8b" }} onClick={parasessao}>
            Sessão
          </button>
        </div>
      </div>
    </div>
  );
}
