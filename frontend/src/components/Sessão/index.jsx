import { MdVerifiedUser } from "react-icons/md";
import { MdOutlineHideSource } from "react-icons/md";
import { FaFastBackward } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import "./style.css";
import Appcontext from "../ferramentas/Appcontext";

import api from "../ferramentas/Api";

export default function Sessão() {
  const { sessao, setsessao, controle, setcontrole } = useContext(Appcontext);
  const { vizualsessao, setvizualsessao } = useContext(Appcontext);

  const { caixaCa, setcaixaCa } = useContext(Appcontext);

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

  const [oculardados, setocultardados] = useState(true);

  const [deficiente, setdeficiente] = useState("");
  const [celulas, setcelulas] = useState([
    {
      nome: "",
      concluida: "",
    },
  ]);

  const [carregaColor, setcarregaColor] = useState("");
  const [carregaColorS, setcarregaColorS] = useState(true);

  const ocultardados = () => {
    setocultardados(!oculardados);
    if (carregaColor && carregaColorS) {
      setcarregaColorS(false);
    } else if (carregaColor && !carregaColorS) {
      setcarregaColorS(true);
    }
  };
  const [estadoF, setestadoF] = useState("");
  const { estadoC, setestadoC } = useContext(Appcontext);

  const load = async (nome, fileira, Cadeira) => {
    const dadosconcluidas = await api.get("/Bc");

    let capacidade = fileira * Cadeira;

    if (fileira > 24) {
      return alert("maximo 24 fileiras");
    }

    let cadeirante = (3 / 100) * capacidade;

    console.log(cadeirante);
    let modelacessibilidade = [];
    const adiantador = 2;

    for (let w = 0; w < cadeirante; w++) {
      for (let b = 1; b < cadeirante; b = b + 1) {
        modelacessibilidade.push(
          String.fromCharCode(97 + b).toUpperCase() + Math.round(b + 4)
        );
      }
    }
    let cadeiras = [];

    for (let j = 1; j < fileira; j++) {
      for (let i = 0; i < Cadeira; i++) {
        let cadeira = String.fromCharCode(96 + j).toUpperCase() + (i + 1);

        if (i < 1) {
          cadeiras.push({
            nome: cadeira[0],
            concluida: "",
            acessibilidade: "",
          });
        }

        cadeiras.push({
          nome: cadeira,
          concluida: dadosconcluidas.data.includes(cadeira) ? true : false,
          acessibilidade: modelacessibilidade.includes(cadeira)
            ? "especial"
            : "normal",
        });
      }
    }

    setcelulas(cadeiras);
    setestadoC(Cadeira);
    setestadoF(fileira);
  };

  useEffect(() => {
    load("sala1", 15, 15);
  }, [sessao, carregaColor]);

  const concluircadastro = (e) => {
    e.preventDefault();
    if (msgsegundaR === "Cadastro concluido com sucesso!") {
      setcaixaCa("");
      setconfirm("");
      setmsgsegundaR("");
      setnome("");
      setsenha("");
      setstart(false);
      setcarregaColor("");
      load();
    } else if (msgsegundaR !== "Cadastro concluido com sucesso!")
      setmsgsegundaR("");
    {
    }
  };

  const escolherpoltrona = async (id, x) => {
    if (!ligmsg) {
      setmsgsegundaR(
        "Clique no botão de cadastrar na sessão e preencha o formulário primeiramente"
      );

      return;
    }
    if (!start) {
      setmsgsegundaR("Conclua a fase de cadastro primeiramente");

      return;
    }

    const listsessaoo = await api.get(`/Listsessaoid/${id}`);
    const acessivel = x;

    if (listsessaoo.data.msg === "Sessão inválida") {
      setsegundaR(true);
      setmsgsegundaR("acento ocupado");
    } else if (x === "especial" && !deficiente) {
      setsegundaR(true);
      setmsgsegundaR("Este acento é somente para pessoas especiais");
    } else if (x !== "especial" && deficiente) {
      setsegundaR(true);
      setmsgsegundaR(
        "Por gentileza,escolhe um acento que seja somente para pessoas com algum tipo de deficiência"
      );
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
      if (confirm || confirmmsg) {
        setconfirm("");
        setconfirmmsg("");
      }
      return setsenhamsg("A senha é obrigatório");
    } else {
      setsenhamsg("");
    }
    if (senha && !confirm) {
      return setconfirmmsg("Digite a senha novamente");
    } else {
      setconfirmmsg("");
    }
    if (confirm && confirm !== senha) {
      return setconfirmmsg("As senhas devem ser iguais");
    } else {
      setconfirmmsg("");
    }

    const login = await api.get(`/LoginUser/${nome}/${senha}/${confirm}`);
    console.log(login.data);

    const todasosacentosespecias = celulas.filter(
      (itens) => itens.acessibilidade === "especial"
    );
    const todososusuariosespecias = login.data.Allspecial.length;

    const todososacentosespeciasQuantidade = todasosacentosespecias.length;
    console.log({ todososacentosespeciasQuantidade, todososusuariosespecias });

    if (todososacentosespeciasQuantidade < todososusuariosespecias) {
      setmsgsegundaR(true);
      setmsgsegundaR(
        "Lamentamos,o limite de poltronas para pessoas especias desta sessão foi esgotado"
      );
      return;
    }

    if (login.data === "nome e senha são obrigatórios") {
      setnomemsg("O nome é obrigatório");
      setsenhamsg("A senha é obrigatório");
    } else if (login.data === "ui") {
      setnomemsg("usuario inválido,verifique o nome");
      setstart(false);
    } else if (login.data === "senha incorreta") {
      setsenhamsg("senha inválida,verifique a senha");
      setstart(false);
    } else if (login.data === "Ujá") {
      setnomemsg("Este usuario já esta cadastrado em uma das poltronas");
      setstart(false);
    } else if (login.data.msg === "free") {
      setnomemsg("");
      setsenhamsg("");
      setconfirmmsg("");
      setstart(true);
      setcaixaCa("");
      setdeficiente(login.data.seDeficiente);
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
    setnome("");
    setsenha("");
    setconfirm("");
    setsessao(false);
    setcontrole(true);
    setcarregaColor("");
    setcarregaColorS(false);
    setocultardados(true);
    setsenhamsg("");
    setnomemsg("");
    setconfirmmsg("");
    setstart(false);
    setligmsg(false);
    setvizualsessao(false);
  };

  const vizualsessaoclick = () => {
    setvizualsessao(!vizualsessao);
  };

  return (
    <div
      className="sessão"
      style={{
        display: sessao ? "flex" : "none",
        justifyContent: "center",
        margin: "0px auto",
        flexDirection: "column",
        width: "100vw",
      }}
    >
      <h1 style={{ marginBottom: "-260px" }} className="h1sessao">
        Bem vindo a sua sessão
      </h1>
      <button onClick={backsessao} className="backsessao">
        <FaFastBackward />
      </button>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="coluna1"
      >
        <div className="btnsessao">
          <button onClick={vizualsessaoclick} className="vizusessaobtn">
            {!vizualsessao ? "Visualizar a sessao" : "Fechar visual"}
          </button>
          <button onClick={cadastrarS} className="cadastrarsessaobtn">
            Cadastrar na sessão
          </button>
        </div>
        <form
          style={{
            display: ligmsg && msgsegundaR === "" ? "flex" : "none",
            margin: "10px auto",
          }}
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

          <div
            style={{
              display: confirmmsg ? "flex" : "none",
              flexDirection: "column",
            }}
            className=""
          >
            <input
              type="password"
              placeholder="Confirmação de senha"
              value={confirm}
              onChange={(e) => setconfirm(e.target.value)}
            />
            <div
              style={{
                display: confirmmsg !== "" ? "flex" : "none",
              }}
              className="erro"
            >
              <p>{confirmmsg}</p>
            </div>
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
              background: "0",
              color: "white",
            }}
          >
            <MdVerifiedUser />
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

        <div style={{ display: "flex", gap: "2rem" }} className="Ps">
          <div
            style={{ display: "flex", gap: "1rem", marginBottom: "5px" }}
          ></div>
        </div>
        <div
          style={{
            margin: "10px auto",
            justifyContent: "center",
            alignItems: "center",
            display: vizualsessao ? "flex" : "none",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              gap: "1rem",
              display: "flex",
              margin: "50px auto -20px",
              justifyContent: "center",
            }}
            className="informações"
          >
            <button
              style={{
                padding: "5px",
                borderRadius: "50%",
                display: vizualsessao ? "flex" : "none",
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
                opacity: !oculardados ? "0" : "1" && vizualsessao ? "1" : "0",
              }}
            >{`${celulas.length} Poltronas`}</p>
            <p
              style={{
                display: caixaCa && vizualsessao ? "flex" : "none",
                marginBottom: "20px",
                opacity: !carregaColorS ? "0" : "1",
              }}
            >
              {caixaCa.length === 2
                ? `Fileira: ${caixaCa[0]} Cadeira: ${caixaCa[1]}`
                : `Fileira: ${caixaCa[0]} Cadeira: ${caixaCa[1]}${caixaCa[2]}`}
            </p>
          </div>

          <div
            style={{
              display: vizualsessao ? "grid" : "none",
            }}
            className="paiP"
          >
            {celulas.map((itens) => (
              <div className="Ps">
                <span
                  style={{
                    width: "400px",
                    position: "relative",
                  }}
                  className=""
                >
                  <p
                    onClick={() =>
                      escolherpoltrona(itens.nome, itens.acessibilidade)
                    }
                    style={{
                      backgroundColor:
                        carregaColor == itens.nome
                          ? "yellow"
                          : "blue" && itens.nome.length == 1
                          ? "black"
                          : "blue" &&
                            itens.acessibilidade !== "normal" &&
                            !itens.concluida
                          ? "black"
                          : "blue" && itens.concluida
                          ? "red"
                          : "blue",
                      position: "absolute",
                      padding: "10px",
                      width: "50px",
                    }}
                  >
                    {itens.acessibilidade &&
                    itens.acessibilidade !== "normal" ? (
                      <p>♿</p>
                    ) : (
                      itens.nome
                    )}
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
