import { FaBackward } from "react-icons/fa";
import React, { useContext, useEffect, useState } from "react";
import Appcontext from "../ferramentas/Appcontext";
import "./style.css";
import api from "../ferramentas/Api";

export default function VerificarSala() {
  const [msgSenha, setmsgSenha] = useState("");
  const [msgNome, setmsgNome] = useState("");
  const [msgConfirm, setmsgConfirm] = useState("");

  const [nome, setnome] = useState("");
  const [senha, setsenha] = useState("");
  const [confirm, setconfirm] = useState("");

  const [sala, setsala] = useState([]);
  const { box, setbox } = useContext(Appcontext);
  const { dadosusuarioNome, setdadosusuarioNome } = useContext(Appcontext);
  const { VsparaTabela, setVsparaTabela } = useContext(Appcontext);

  const { Verusuario, setVerusuario, controle, setcontrole } =
    useContext(Appcontext);

  const { dadosUsuarioPosição, setdadosUsuarioPosição } =
    useContext(Appcontext);
  const { dadosUsuarioPosiçãoCF, setdadosUsuarioPosiçãoCF } =
    useContext(Appcontext);

  const voltarVs = () => {
    setVerusuario(false);
    setcontrole(true);
    setnome("");
    setsenha("");
    setconfirm("");
    setmsgConfirm("");
    setmsgNome("");
    setmsgSenha("");
  };

  const Vsfun = async (e) => {
    e.preventDefault();
    if (!nome) {
      setmsgNome("O nome é obrigatório");
    }
    if (!senha) {
      setmsgSenha("A senha é obrigatório");
    }

    if (senha && !confirm) {
      setmsgConfirm("Digite a senha novamente");
    }
    if (confirm && confirm !== senha) {
      setmsgConfirm("As senhas devem ser iguais ");
    }
    if (nome) {
      setmsgNome("");
    }
    if (senha) {
      setmsgSenha("");
    }
    if (confirm && confirm === senha) {
      setmsgConfirm("");
    }

    const verificarasala = await api(`/Vs/${nome}/${senha}/${confirm}`);
    console.log(verificarasala);
    if (verificarasala.data === "Usuário inválido") {
      setmsgNome("Usuário inválido");
      return;
    }
    if (
      verificarasala.data ===
      "Não existe nenhum usuário com este nome registrado em nossa sessão"
    ) {
      setmsgNome("Não existe nenhum usuário com este nome em nossa sessão");
      return;
    }
    if (verificarasala.data === "Senha inválida") {
      setmsgSenha("Senha inválida");
      return;
    }

    setdadosusuarioNome(verificarasala.data.dadosUsuario);
    setdadosUsuarioPosiçãoCF(verificarasala.data.findOnsection.posição);
    if (verificarasala.data.findOnsection.concluida) {
      setVsparaTabela(true);
    }
  };

  return (
    <div
      className="VerificarSala"
      style={{
        display: Verusuario && !VsparaTabela ? "flex" : "none",
      }}
    >
      <button onClick={voltarVs} className="btnVS">
        <FaBackward />
      </button>

      <div className="h1vs">
        <h1 style={{ textAlign: "center", margin: "0 auto" }}>
          Verificar <span className="spanSala">Sala</span>
        </h1>
      </div>
      <form
        className="formVS"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          value={nome}
          onChange={(e) => setnome(e.target.value)}
          type="text"
          placeholder="Digite o nome do usuário"
        />
        <div style={{ display: msgNome ? "flex" : "none" }} className="erro">
          <p>{msgNome}</p>
        </div>
        <input
          value={senha}
          onChange={(e) => setsenha(e.target.value)}
          type="password"
          placeholder="Digite a senha do usuário"
        />
        <div style={{ display: msgSenha ? "flex" : "none" }} className="erro">
          <p>{msgSenha}</p>
        </div>
        <input
          style={{ display: msgConfirm ? "flex" : "none" }}
          value={confirm}
          onChange={(e) => setconfirm(e.target.value)}
          type="password"
          placeholder="Digite novamente a senha do usuário"
        />
        <div style={{ display: msgConfirm ? "flex" : "none" }} className="erro">
          <p>{msgConfirm}</p>
        </div>

        <button onClick={Vsfun} className="btnVSform">
          Concluir
        </button>
      </form>
    </div>
  );
}
