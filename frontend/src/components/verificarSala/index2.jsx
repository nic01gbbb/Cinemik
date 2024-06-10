import { FaBackward, FaCrown } from "react-icons/fa";
import React, { useCallback, useContext } from "react";
import { useEffect, useState } from "react";
import "./style.css";
import api from "../ferramentas/Api";
import Appcontext from "../ferramentas/Appcontext";

export const Index2 = () => {
  const { box, setbox } = useContext(Appcontext);

  const { dadosusuarioNome, setdadosusuarioNome } = useContext(Appcontext);
  const { VsparaTabela, setVsparaTabela } = useContext(Appcontext);

  const [celulas, setcelulas] = useState([]);

  const { dadosUsuarioPosição, setdadosUsuarioPosição } =
    useContext(Appcontext);
  const { dadosUsuarioPosiçãoCF, setdadosUsuarioPosiçãoCF } =
    useContext(Appcontext);

  const [posiçãoDoUsuarioCadeira, setposiçãoDoUsuarioCadeira] = useState([]);

  const [posiçãoDoUsuarioFileira, setposiçãoDoUsuarioFileira] = useState([]);

  const numerosAleatorios = () => {
    const numeros = Math.round(Math.random() * 250);
    return numeros;
  };

  const CoresAleatorias = () => {
    const cores = `rgba(
    ${numerosAleatorios()},
    ${numerosAleatorios()},
    ${numerosAleatorios()},
    ${numerosAleatorios()}
    `;

    console.log(cores);
    return cores;
  };

  useEffect(() => {
    CoresAleatorias();
  }, [VsparaTabela]);

  const load = async (nome, fileira, Cadeira) => {
    const dados = await api.get("/Bc");

    let capacidade = fileira * Cadeira;

    if (fileira > 24) {
      return alert("maximo 24 fileiras");
    }

    let cadeirante = (3 / 100) * capacidade;

    let modelacessibilidade = [];

    for (let w = 0; w < cadeirante; w++) {
      for (let b = 1; b < cadeirante; b = b + 1) {
        modelacessibilidade.push(
          String.fromCharCode(97 + b).toUpperCase() + Math.round(b + 4)
        );
      }
    }
    let cadeiras = [];
    let cadeira = "";
    for (let j = 0; j < fileira; j++) {
      for (let i = 0; i < Cadeira; i++) {
        cadeira = String.fromCharCode(97 + j).toUpperCase() + (i + 1);
        if (i < 1) {
          cadeiras.push({
            nome: cadeira[0],
            concluida: "",
            acessibilidade: "",
          });
        }

        cadeiras.push({
          nome: cadeira,
          concluida: dados.data.includes(cadeira) ? true : false,
          acessibilidade: modelacessibilidade.includes(cadeira)
            ? "especial"
            : "normal",
        });
      }
    }
    setcelulas(cadeiras);
  };
  const backVStabela = () => {
    setVsparaTabela(false);
  };

  useEffect(() => {
    load("sala1", 15, 15);
  }, [VsparaTabela]);

  return (
    <div
      style={{
        display: VsparaTabela ? "flex" : "none",
        flexDirection: "column",
        color: "white",
      }}
      className="Tabela2"
    >
      <button
        onClick={backVStabela}
        className="backVStabela"
        style={{
          position: "absolute",
          left: "25px",
          top: "30px",
          borderRadius: "8px",
          padding: "5px",
          backgroundColor: "black",
          color: "white",
          cursor: "pointer",
        }}
      >
        <FaBackward />
      </button>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "100px auto",
        }}
        className="Tabela2"
      >
        <h3
          className="h3Tabela2"
          style={{
            textAlign: "center",
            color: "yellow",
            margin: "0px auto",
          }}
        >{` Olá ${
          dadosusuarioNome ? dadosusuarioNome : ""
        },bem vindo a sala de verificação,
        sua fileira é a da letra     
        ${dadosUsuarioPosiçãoCF[0]} e a cadeira a de número ${
          dadosUsuarioPosiçãoCF.length < 3
            ? dadosUsuarioPosiçãoCF[1]
            : dadosUsuarioPosiçãoCF[1] + dadosUsuarioPosiçãoCF[2]
        } `}</h3>
        <div style={{ margin: "10px auto" }} className="paiP segundaTabela">
          {celulas
            ? celulas.map((itens) => (
                <div className="Ps segundaTabelap">
                  <span style={{ width: "400px", position: "relative" }}>
                    <p
                      style={{
                        backgroundColor:
                          itens.nome.length < 2 &&
                          itens.nome !== dadosUsuarioPosiçãoCF
                            ? "black"
                            : "blue" && itens.nome !== dadosUsuarioPosiçãoCF
                            ? "blue"
                            : CoresAleatorias(),
                        position: "absolute",
                        padding: "10px",
                        width: "50px",
                      }}
                    >
                      {itens.acessibilidade === "especial" &&
                      itens.nome !== dadosUsuarioPosiçãoCF ? (
                        <p style={{}}>♿</p>
                      ) : (
                        itens.nome
                      )}
                    </p>
                  </span>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};
