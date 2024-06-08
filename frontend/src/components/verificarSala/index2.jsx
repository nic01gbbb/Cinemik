import { FaBackward } from "react-icons/fa";
import React, { useCallback, useContext } from "react";
import { useEffect, useState } from "react";
import "./style.css";
import api from "../ferramentas/Api";
import Appcontext from "../ferramentas/Appcontext";

export const Index2 = () => {
  const [celulas, setcelulas] = useState([
    {
      item: "",
      modelctz: "A",
    },
  ]);

  const { box, setbox } = useContext(Appcontext);
  const [dadosUsuarioF, setdadosUsuarioF] = useState("");
  const [dadosUsuarioC, setdadosUsuarioC] = useState("");
  const [dadosUsuarioC2, setdadosUsuarioC2] = useState("");
  const [dadosUsuario, setdadosUsuario] = useState("");
  const [dadosUsuarioNome, setdadosUsuarioNome] = useState("");

  const { VsparaTabela, setVsparaTabela } = useContext(Appcontext);
  const { dadosusuarioNome, setdadosusuarioNome } = useContext(Appcontext);

  const load = async () => {
    for (let i = 0; i < 221; i = i + 1) {
      let ctz = "";
      let modelctz = "";

      if (celulas.length < 221) {
        if (i == 16) {
          setcelulas([
            ...celulas,
            celulas.push({
              item: "",
              modelctz: "B",
            }),
          ]);
        }
        if (i == 16 * 2) {
          setcelulas([
            ...celulas,
            celulas.push({
              item: "",
              modelctz: "C",
            }),
          ]);
        }
        if (i == 16 * 3) {
          setcelulas([
            ...celulas,
            celulas.push({
              item: "",
              modelctz: "D",
            }),
          ]);
        }
        if (i == 16 * 4) {
          setcelulas([
            ...celulas,
            celulas.push({
              item: "",
              modelctz: "E",
            }),
          ]);
        }
        if (i == 16 * 5) {
          setcelulas([
            ...celulas,
            celulas.push({
              item: "",
              modelctz: "F",
            }),
          ]);
        }
        if (i == 16 * 6) {
          setcelulas([
            ...celulas,
            celulas.push({
              item: "",
              modelctz: "G",
            }),
          ]);
        }
        if (i == 16 * 7) {
          setcelulas([
            ...celulas,
            celulas.push({
              item: "",
              modelctz: "H",
            }),
          ]);
        }
        if (i == 16 * 8) {
          setcelulas([
            ...celulas,
            celulas.push({
              item: "",
              modelctz: "I",
            }),
          ]);
        }
        if (i == 16 * 9) {
          setcelulas([
            ...celulas,
            celulas.push({
              item: "",
              modelctz: "J",
            }),
          ]);
        }
        if (i == 16 * 10) {
          setcelulas([
            ...celulas,
            celulas.push({
              item: "",
              modelctz: "K",
            }),
          ]);
        }
        if (i == 16 * 11) {
          setcelulas([
            ...celulas,
            celulas.push({
              item: "",
              modelctz: "L",
            }),
          ]);
        }
        if (i == 16 * 12) {
          setcelulas([
            ...celulas,
            celulas.push({
              item: "",
              modelctz: "M",
            }),
          ]);
        }
        if (i == 16 * 13) {
          setcelulas([
            ...celulas,
            celulas.push({
              item: "",
              modelctz: "N",
            }),
          ]);
        }

        if (i >= 0) {
          ctz = i;
          modelctz = `A${ctz}`;
        }
        if (i >= 16) {
          ctz = i - 16;
          modelctz = `B${ctz}`;
        }
        if (i >= 16 * 2) {
          ctz = i - 32;
          modelctz = `C${ctz}`;
        }
        if (i >= 16 * 3) {
          ctz = i - 16 * 3;
          modelctz = `D${ctz}`;
        }

        if (i >= 16 * 4) {
          ctz = i - 16 * 4;
          modelctz = `E${ctz}`;
        }
        if (i >= 16 * 5) {
          ctz = i - 16 * 5;
          modelctz = `F${ctz}`;
        }

        if (i >= 16 * 6) {
          ctz = i - 16 * 6;
          modelctz = `G${ctz}`;
        }

        if (i >= 16 * 7) {
          ctz = i - 16 * 7;
          modelctz = `H${ctz}`;
        }

        if (i >= 16 * 8) {
          ctz = i - 16 * 8;
          modelctz = `I${ctz}`;
        }
        if (i >= 16 * 9) {
          ctz = i - 16 * 9;
          modelctz = `J${ctz}`;
        }
        if (i >= 16 * 10) {
          ctz = i - 16 * 10;
          modelctz = `K${ctz}`;
        }
        if (i >= 16 * 11) {
          ctz = i - 16 * 11;
          modelctz = `L${ctz}`;
        }
        if (i >= 16 * 12) {
          ctz = i - 16 * 12;
          modelctz = `M${ctz}`;
        }
        if (i >= 16 * 13) {
          ctz = i - 16 * 13;
          modelctz = `N${ctz}`;
        }

        setcelulas([
          ...celulas,
          celulas.push({
            item: i,
            modelctz: modelctz,
          }),
        ]);
      }
    }
    setcelulas([...celulas]);
    setdadosUsuarioF(box.map((itens) => itens.findOnsection.posição[0]));
    setdadosUsuarioC(box.map((itens) => itens.findOnsection.posição[1]));
    setdadosUsuarioC2(box.map((itens) => itens.findOnsection.posição[2]));
    setdadosUsuarioNome(box.map((itens) => itens.dadosUsuario));
  };

  useEffect(() => {
    load();
  }, [VsparaTabela]);
  const teste = (id) => {
    alert(id);
  };

  const backVStabela = () => {
    setVsparaTabela(false);
  };

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
        className=""
      >
        <h3
          className="h3Tabela2"
          style={{
            textAlign: "center",
            color: "yellow",
            maxWidth: "400px",
            margin: "0px auto",
          }}
        >{` Olá ${dadosUsuarioNome},bem vindo a sala de verificação,
        sua fileira é a da letra     
        ${dadosUsuarioF} e a cadeira a de número ${
          dadosUsuarioC2 ? dadosUsuarioC + dadosUsuarioC2 : dadosUsuarioC
        } `}</h3>
        <div className="ConteudoTabela2">
          {celulas.map((itens) => (
            <div style={{ display: "flex" }} className="">
              <p
                onClick={() => teste(itens.modelctz)}
                style={{
                  color: "white",
                  cursor: "pointer",
                  backgroundColor: box.map((maps) =>
                    itens.modelctz === "A" ||
                    itens.modelctz === "B" ||
                    itens.modelctz === "C" ||
                    itens.modelctz === "D" ||
                    itens.modelctz === "E" ||
                    itens.modelctz === "F" ||
                    itens.modelctz === "G" ||
                    itens.modelctz === "H" ||
                    itens.modelctz === "I" ||
                    itens.modelctz === "J" ||
                    itens.modelctz === "K" ||
                    itens.modelctz === "L" ||
                    itens.modelctz === "M" ||
                    itens.modelctz === "N"
                      ? "black"
                      : maps.findOnsection.posição === itens.modelctz
                      ? "red"
                      : "blue"
                  ),
                }}
              >
                {itens.modelctz}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
