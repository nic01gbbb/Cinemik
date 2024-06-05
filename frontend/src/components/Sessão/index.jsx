import { MdOutlineHideSource } from "react-icons/md";
import { FaFastBackward } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import "./style.css";
import Appcontext from "../ferramentas/Appcontext";

import api from "../ferramentas/Api";

export default function Sessão() {
  const { sessao, setsessao, controle, setcontrole } = useContext(Appcontext);
  const { vizualsessao, setvizualsessao } = useContext(Appcontext);

  const { caixaF, setcaixaF } = useContext(Appcontext);
  const { caixaCo, setcaixaCo } = useContext(Appcontext);
  const { caixaCa, setcaixaCa } = useContext(Appcontext);

  const { caixaS, setcaixaS } = useContext(Appcontext);

  const [nome, setnome] = useState("");
  const [senha, setsenha] = useState("");
  const [confirm, setconfirm] = useState("");

  const [nomemsg, setnomemsg] = useState("");
  const [senhamsg, setsenhamsg] = useState("");
  const [confirmmsg, setconfirmmsg] = useState("");

  const [segundaR, setsegundaR] = useState(false);
  const [msgsegundaR, setmsgsegundaR] = useState("");
  const [msg, setmsg] = useState(false);
  const [msgP, setmsgP] = useState("");
  const [ligmsg, setligmsg] = useState(false);
  const [paraP, setparaP] = useState(false);

  const [start, setstart] = useState(false);

  const teste = ["1", "57", "68", "105", "7878"];
  const [boxA, setboxA] = useState([]);

  const [concluidas, setconcluidas] = useState(false);
  const [oculardados, setocultardados] = useState(true);

  const [celulas, setcelulas] = useState([
    {
      item: 0,
      modelctz: "A",
      paragrafo: "",
      concluido: false,
    },
  ]);

  const [carregaColor, setcarregaColor] = useState("");
  const [carregaColorS, setcarregaColorS] = useState(true);

  useEffect(() => {
    if (carregaColor !== "") {
      setocultardados(true);
      setcarregaColorS(true);
    }
  }, [carregaColor]);

  const ocultardados = () => {
    setocultardados(!oculardados);
    if (carregaColor && carregaColorS) {
      setcarregaColorS(false);
    } else if (carregaColor && !carregaColorS) {
      setcarregaColorS(true);
    }
  };

  const load = async () => {
    let ctz = "";
    let modelctz = "";
    const econcuidas = await api.get("/Bc");
    if (econcuidas.data) {
      console.log(econcuidas.data);
      const teste = ["A3", "A0", "B5"];

      for (let i = 0; i < 224; i++) {
        ctz = i;

        if (i >= 0) {
          ctz = i;
          modelctz = `A${ctz}`;
        }

        if (i >= 16) {
          ctz = i - 16;
          modelctz = `B${ctz}`;
        }
        if (i >= 32) {
          ctz = i - 32;
          modelctz = `C${ctz}`;
        }

        if (i >= 48) {
          ctz = i - 48;
          modelctz = `D${ctz}`;
        }
        if (i >= 64) {
          ctz = i - 64;
          modelctz = `E${ctz}`;
        }
        if (i >= 80) {
          ctz = i - 80;
          modelctz = `F${ctz}`;
        }
        if (i >= 96) {
          ctz = i - 96;
          modelctz = `G${ctz}`;
        }
        if (i >= 112) {
          ctz = i - 112;
          modelctz = `H${ctz}`;
        }
        if (i >= 128) {
          ctz = i - 128;
          modelctz = `I${ctz}`;
        }
        if (i >= 144) {
          ctz = i - 144;
          modelctz = `J${ctz}`;
        }
        if (i >= 160) {
          ctz = i - 160;
          modelctz = `K${ctz}`;
        }
        if (i >= 176) {
          ctz = i - 176;
          modelctz = `L${ctz}`;
        }
        if (i >= 192) {
          ctz = i - 192;
          modelctz = `M${ctz}`;
        }

        if (celulas.length < 221 && i < 221) {
          if (i == 16) {
            setcelulas([
              ...celulas,
              celulas.push({
                item: "",
                modelctz: "B",
                concluido: false,
                paragrafo: "",
              }),
            ]);
          }
          if (i == 16 * 2) {
            setcelulas([
              ...celulas,
              celulas.push({
                item: "",
                modelctz: "C",
                concluido: false,
                paragrafo: "",
              }),
            ]);
          }
          if (i == 16 * 3) {
            setcelulas([
              ...celulas,
              celulas.push({
                item: "",
                modelctz: "D",
                concluido: false,
                paragrafo: "",
              }),
            ]);
          }
          if (i == 16 * 4) {
            setcelulas([
              ...celulas,
              celulas.push({
                item: "",
                modelctz: "E",
                concluido: false,
                paragrafo: "",
              }),
            ]);
          }
          if (i == 16 * 5) {
            setcelulas([
              ...celulas,
              celulas.push({
                item: "",
                modelctz: "F",
                concluido: false,
                paragrafo: "",
              }),
            ]);
          }
          if (i == 16 * 6) {
            setcelulas([
              ...celulas,
              celulas.push({
                item: "",
                modelctz: "G",
                concluido: false,
                paragrafo: "",
              }),
            ]);
          }
          if (i == 16 * 7) {
            setcelulas([
              ...celulas,
              celulas.push({
                item: "",
                modelctz: "H",
                concluido: false,
                paragrafo: "",
              }),
            ]);
          }
          if (i == 16 * 8) {
            setcelulas([
              ...celulas,
              celulas.push({
                item: "",
                modelctz: "I",
                concluido: false,
                paragrafo: "",
              }),
            ]);
          }
          if (i == 16 * 9) {
            setcelulas([
              ...celulas,
              celulas.push({
                item: "",
                modelctz: "J",
                concluido: false,
                paragrafo: "",
              }),
            ]);
          }
          if (i == 16 * 10) {
            setcelulas([
              ...celulas,
              celulas.push({
                item: "",
                modelctz: "K",
                concluido: false,
                paragrafo: "",
              }),
            ]);
          }
          if (i == 16 * 11) {
            setcelulas([
              ...celulas,
              celulas.push({
                item: "",
                modelctz: "L",
                concluido: false,
                paragrafo: "",
              }),
            ]);
          }
          if (i == 16 * 12) {
            setcelulas([
              ...celulas,
              celulas.push({
                item: "",
                modelctz: "M",
                concluido: false,
                paragrafo: "",
              }),
            ]);
          }

          setcelulas([
            ...celulas,
            celulas.push({
              item: i,
              modelctz: modelctz,
              paragrafo: ctz,
              concluido: econcuidas.data.includes(modelctz) ? true : false,
            }),
          ]);
        } else {
          celulas.map((con) =>
            econcuidas.data.includes(con.modelctz)
              ? (con.concluido = true)
              : false
          );

          if (
            msgsegundaR &&
            msgsegundaR === "Cadastro concluido com sucesso!"
          ) {
            setconcluidas(true);
            console.log("ok");
            celulas.map((itens) =>
              caixaCa && itens.modelctz == caixaCa
                ? (itens.concluido = true)
                : ""
            );
          }
        }
      }
    }

    setcelulas([...celulas]);
    setboxA([...celulas.filter((itens) => (itens.item < 16 ? itens : null))]);
    console.log(boxA);
  };

  useEffect(() => {
    load();
  }, [sessao, concluidas]);

  const concluircadastro = (e) => {
    e.preventDefault();
    setcaixaCa("");
    setconfirm("");
    setmsgsegundaR("");
    setnome("");
    setsenha("");
    setconcluidas(false);
    setstart(false);
    setcarregaColor("");
    load();
  };

  const escolherpoltrona = async (id, index) => {
    const listsessaoo = await api.get(`/Listsessaoid/${id}`);
    if (
      nome &&
      senha &&
      confirm &&
      listsessaoo.data.msg === "Sessão inválida"
    ) {
      setsegundaR(true);
      setmsgsegundaR("Sessão inválida");
      setTimeout(() => {
        setmsgsegundaR("");
        setsegundaR(false);
      }, 2000);
    } else if (listsessaoo.data == 1) {
      setcarregaColor(id);
      setcaixaCa(id);
    }
  };

  const irparaP = async (e) => {
    e.preventDefault();
    if (!nome) {
      setnomemsg("O nome é obrigatório");
    }
    if (!senha) {
      setsenhamsg("A senha é obrigatório");
    }
    if (senha && !confirm) {
      setconfirmmsg("Digite a senha novamente");
    }
    if (confirm && confirm !== senha) {
      setconfirmmsg("As senhas devem ser iguais");
    }

    if (nome) {
      setnomemsg("");
    }
    if (senha) {
      setsenhamsg("");
    }
    if (confirm && confirm === senha) {
      setconfirmmsg("");
    }

    const login = await api.get(`/LoginUser/${nome}/${senha}/${confirm}`);

    console.log(login.data);
    if (login.data === "ui") {
      setnomemsg("usuario inválido,verifique o nome");
      setstart(false);
    } else if (login.data === "senha incorreta") {
      setsenhamsg("senha inválida,verifique a senha");
      setstart(false);
    } else if (login.data === "Ujá") {
      setnomemsg("Este usuario já esta cadastrado em uma das poltronas");
      setstart(false);
    } else if (login.data === "free") {
      setnomemsg("");
      setsenhamsg("");
      setconfirmmsg("");
      setstart(true);
      setcaixaCa("");
    }
  };

  const cadastrarS = () => {
    setligmsg(!ligmsg);
  };

  const criarsessao = async (e) => {
    e.preventDefault();

    const criarsessao = await api.post("/createsecao/", {
      nomeusuario: nome,
      senhausuario: senha,
      confirm: confirm,
      posição: carregaColor,
    });
    console.log(criarsessao.data);
    if (
      criarsessao.data.msg ===
      "este usuario já esta cadastrado em uma das poltronas"
    ) {
      setmsgsegundaR("Este usuário já esta cadastrado em uma das poltronas");
    }
    if (criarsessao.data === "sessao inválida") {
      setmsgsegundaR("Sessão inválida!");
    }
    if (criarsessao.data === "O nome do usuario é obrigatório") {
      setmsgsegundaR("O nome do usuário é obrigatório!");
    }

    if (criarsessao.data.msg === "Sessão cadastrada com sucesso") {
      setmsgsegundaR("Cadastro concluido com sucesso!");
      load();
    }
  };

  const backsessao = () => {
    setsessao(false);
    setcontrole(true);
    setcarregaColor("");
    setcarregaColorS(false);
    setocultardados(true);
  };

  const vizualsessaoclick = () => {
    setvizualsessao(!vizualsessao);
  };

  useEffect(() => {
    setnome("");
    setsenha("");
    setconfirm("");
  }, [sessao]);

  return (
    <div className="sessão" style={{ display: sessao ? "flex" : "none" }}>
      <h1 style={{ marginBottom: "-260px" }} className="h1sessao">
        Bem vindo a sua sessão
      </h1>
      <button onClick={backsessao} className="backsessao">
        <FaFastBackward />
      </button>
      <section className="coluna1">
        <div className="btnsessao">
          <button onClick={vizualsessaoclick} className="vizusessaobtn">
            {!vizualsessao ? "Visualizar a sessao" : "Fechar visual"}
          </button>
          <button onClick={cadastrarS} className="cadastrarsessaobtn">
            Cadastrar na sessão
          </button>
        </div>
        <form
          style={{ display: ligmsg && msgsegundaR === "" ? "flex" : "none" }}
          className="formsessao"
        >
          <input
            type="text"
            placeholder="Digite seu nome "
            value={nome}
            onChange={(e) => setnome(e.target.value)}
          />
          <div style={{ display: nomemsg ? "flex" : "none" }} className="erro">
            <p>{nomemsg}</p>
          </div>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setsenha(e.target.value)}
          />
          <div style={{ display: senhamsg ? "flex" : "none" }} className="erro">
            <p>{senhamsg}</p>
          </div>
          <input
            type="password"
            placeholder="Digite sua senha novamente"
            value={confirm}
            onChange={(e) => setconfirm(e.target.value)}
          />
          <div
            style={{ display: confirmmsg ? "flex" : "none" }}
            className="erro"
          >
            <p>{confirmmsg}</p>
          </div>

          <button
            className="btn"
            onClick={irparaP}
            style={{
              marginTop: "10px",
              width: "200px",
              margin: "10px auto",
              cursor: "pointer",
              marginBottom: "-20px",
            }}
          >
            ok
          </button>

          <div
            style={{
              display: start && msgsegundaR === "" ? "flex" : "none",
              gap: "1rem",
              marginBottom: "10px",
              marginTop: "30px",
              margin: "30px auto",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="spanonsection"
          >
            <h3
              style={{
                textAlign: "center",
                display: start ? "flex" : "none",
                color: "blue",
              }}
            >
              Clique em uma poltrona vazia de sua escolha
            </h3>

            <span
              style={{
                backgroundColor: "green",
                padding: "10px",
                display: "flex",
                width: "120px",
              }}
            >
              Poltrona:
              <p style={{ textAlign: "center", maxWidth: "500px" }}>
                {" "}
                {carregaColor}
              </p>
            </span>

            <button
              className="finalizarSessao"
              onClick={criarsessao}
              style={{
                margin: "10px auto",
                height: "20px",
                width: "200px",
                padding: "5px",
                cursor: "pointer",
                justifyContent: "center",
                display: start ? "flex" : "none",
                alignItems: "center",
                marginBottom: "-40px",
              }}
            >
              Finalizar
            </button>
          </div>
        </form>
        <div
          style={{
            position: "relative",
            margin: "15px auto",
            width: "100%",
            display: msgsegundaR !== "" ? "flex" : "none",
            border:
              msgsegundaR === "Cadastro concluido com sucesso!"
                ? "2px solid blue"
                : "2px solid red",
          }}
          className="segundaR"
        >
          <button
            onClick={concluircadastro}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: "10px",
              left: "10px",
              display: msgsegundaR !== "" ? "flex" : "none",
            }}
          >
            ok
          </button>
          <p
            style={{
              color:
                msgsegundaR === "Cadastro concluido com sucesso!"
                  ? "blue"
                  : "red",
            }}
          >
            {msgsegundaR}
          </p>
        </div>

        <div
          style={{ display: msgP ? "flex" : "none" }}
          className="campodeerro"
        >
          <p>{msgP}</p>
        </div>

        <div
          style={{
            display: vizualsessao ? "flex" : "none",
            flexDirection: "column",
          }}
          className="vizualsessao"
        >
          <div style={{ display: "flex", gap: "2rem" }} className="Ps">
            <div style={{ display: "flex", gap: "1rem", marginBottom: "5px" }}>
              <button
                style={{
                  padding: "5px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "20px",
                  height: "20px",
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "55px",
                  cursor: "pointer",
                }}
                onClick={ocultardados}
              >
                <MdOutlineHideSource />
              </button>
              <p
                style={{
                  marginBottom: "20px",
                  opacity: !oculardados ? "0" : "1",
                }}
              >{`${celulas.length} Poltronas`}</p>
              <p
                style={{
                  display: caixaCa ? "flex" : "none",
                  marginBottom: "20px",
                  opacity: !carregaColorS ? "0" : "1",
                }}
              >
                {caixaCa.length === 2
                  ? `Fileira: ${caixaCa[0]} Cadeira: ${caixaCa[1]}`
                  : `Fileira: ${caixaCa[0]} Cadeira: ${caixaCa[1]}${caixaCa[2]}`}
              </p>
            </div>
          </div>

          <div className="paiP" style={{ paddingBottom: "50px" }}>
            {celulas.map((itens, index) => (
              <div
                key={index}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(16,50px)",
                }}
                className="Ps"
              >
                <span
                  style={{
                    marginTop: "2px",
                    backgroundColor:
                      itens.concluido && carregaColor !== itens.modelctz
                        ? "red"
                        : carregaColor == itens.modelctz
                        ? "yellow"
                        : "blue" && itens.modelctz.length == 1
                        ? "black"
                        : "blue",
                  }}
                  onClick={() => escolherpoltrona(itens.modelctz)}
                  className="p"
                >
                  <p
                    style={{
                      display: itens.modelctz[0] === "A" ? "flex" : "none",
                    }}
                  >
                    A
                  </p>

                  <p
                    style={{
                      display: itens.modelctz[0] === "B" ? "flex" : "none",
                    }}
                  >
                    B
                  </p>
                  <p
                    style={{
                      display: itens.modelctz[0] === "C" ? "flex" : "none",
                    }}
                  >
                    C
                  </p>
                  <p
                    style={{
                      display: itens.modelctz[0] === "D" ? "flex" : "none",
                    }}
                  >
                    D
                  </p>

                  <p
                    style={{
                      display: itens.modelctz[0] === "E" ? "flex" : "none",
                    }}
                  >
                    E
                  </p>

                  <p
                    style={{
                      display: itens.modelctz[0] === "F" ? "flex" : "none",
                    }}
                  >
                    F
                  </p>
                  <p
                    style={{
                      display: itens.modelctz[0] === "G" ? "flex" : "none",
                    }}
                  >
                    G
                  </p>
                  <p
                    style={{
                      display: itens.modelctz[0] === "H" ? "flex" : "none",
                    }}
                  >
                    H
                  </p>

                  <p
                    style={{
                      display: itens.modelctz[0] === "I" ? "flex" : "none",
                    }}
                  >
                    I
                  </p>
                  <p
                    style={{
                      display: itens.modelctz[0] === "J" ? "flex" : "none",
                    }}
                  >
                    J
                  </p>
                  <p
                    style={{
                      display: itens.modelctz[0] === "K" ? "flex" : "none",
                    }}
                  >
                    k
                  </p>

                  <p
                    style={{
                      display: itens.modelctz[0] === "L" ? "flex" : "none",
                    }}
                  >
                    L
                  </p>

                  <p
                    style={{
                      display: itens.modelctz[0] === "M" ? "flex" : "none",
                    }}
                  >
                    M
                  </p>
                  <p
                    style={{
                      display: itens.modelctz[0] === "N" ? "flex" : "none",
                    }}
                  >
                    N
                  </p>

                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {itens.paragrafo}
                  </p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
