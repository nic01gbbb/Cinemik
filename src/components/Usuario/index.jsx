import { IoPlayBackSharp } from "react-icons/io5";
import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import Appcontext from "../ferramentas/Appcontext";
import api from "../ferramentas/Api";

function Usuario() {
  const { usuarios, setusuarios, setcontrole } = useContext(Appcontext);
  const [nome, setnome] = useState("");
  const [email, setemail] = useState("");
  const [senha, setsenha] = useState("");
  const [cpf, setcpf] = useState("");
  const [endereço, setendereço] = useState("");
  const [numero, setnumero] = useState("");
  const [cidade, setcidade] = useState("");
  const [confirm, setconfirm] = useState("");

  const [msgnome, setmsgnome] = useState("");
  const [msgemail, setmsgemail] = useState("");
  const [msgsenha, setmsgsenha] = useState("");
  const [msgcpf, setmsgcpf] = useState("");
  const [msgendereço, setmsgendereço] = useState("");
  const [msgnumero, setmsgnumero] = useState("");
  const [msgcidade, setmsgcidade] = useState("");
  const [msgconfirm, setmsgconfirm] = useState("");

  const [ligaconfirm, setligaconfirm] = useState(false);
  const [ligamsg, setligamsg] = useState(false);
  const [msg, setmsg] = useState("");

  const { estadoDelete, setestadodelete } = useContext(Appcontext);

  const [msgSenhaDELETE, setmsgSenhaDELETE] = useState("");
  const [msgNomeDELETE, setmsgNomeDELETE] = useState("");
  const [msgConfirmDELETE, setmsgConfirmDELETE] = useState("");

  const [nomeDELETE, setnomeDELETE] = useState("");
  const [senhaDELETE, setsenhaDELETE] = useState("");
  const [confirmDELETE, setconfirmDELETE] = useState("");

  const [ligaform, setligaform] = useState(false);

  const Vsfun = async (e) => {
    e.preventDefault();
    setligaconfirm(true);
    if (!nomeDELETE) {
      setmsgNomeDELETE("O nome é obrigatório");
    } else {
      setmsgNomeDELETE("");
    }
    if (!senhaDELETE) {
      setmsgSenhaDELETE("A senha é obrigatório");
    } else if (senhaDELETE) {
      setmsgSenhaDELETE("");
    }
    if (senhaDELETE && !confirmDELETE) {
      setmsgConfirmDELETE("Digite sua senha novamente");
    }
    if (confirmDELETE && confirmDELETE !== senhaDELETE) {
      setmsgConfirmDELETE("As senhas devem ser iguais");
    } else if (confirmDELETE && confirmDELETE === senhaDELETE) {
      setmsgConfirmDELETE("");
    }

    const Deleteusuario = await api.delete(
      `/DeleteUsers/${nomeDELETE}/${senhaDELETE}/${confirmDELETE}`
    );
    console.log(Deleteusuario.data);
    if (Deleteusuario.data === "Usuário inválido") {
      setmsgNomeDELETE("Usuário inválido");
    }
    if (
      Deleteusuario.data ===
      "Não existe nenhum usuário com este nome registrado em nossa sessão"
    ) {
      setmsgNomeDELETE(
        "Não existe nenhum usuário com este nome em nossa sessão"
      );
    }
    if (Deleteusuario.data === "Senha inválida") {
      setmsgSenhaDELETE("Senha inválida");
    } else if (Deleteusuario.data === "Usuario excluido com sucesso!") {
      setligamsg(true);
      setmsg("Usuario excluido com sucesso!");
      {
      }
    }
    setligaform(false);
  };

  const backcontrole = () => {
    setcontrole(true);
    setusuarios(false);
    setnome("");
    setcidade("");
    setconfirm("");
    setsenha("");
    setemail("");
    setcpf("");
    setendereço("");
    setnumero("");
    setsenhaDELETE("");
    setnomeDELETE("");
    setconfirmDELETE("");
    setmsgnumero("");
    setmsgnome("");
    setmsgsenha("");
    setmsgemail("");
    setmsgcidade("");
    setmsgendereço("");
    setmsgcpf("");
    setmsgconfirm("");
    setmsgNomeDELETE("");
    setmsgSenhaDELETE("");
    setmsgConfirmDELETE("");
  };

  const fecharconcluido = () => {
    setligamsg(false);
    setmsg("");
    setnome("");
    setemail("");
    setcpf("");
    setnumero("");
    setcidade("");
    setendereço("");
    setcidade("");
    setsenha("");
    setconfirm("");
    setconfirmDELETE("");
    setnomeDELETE("");
    setsenhaDELETE("");
    setmsgSenhaDELETE("");
    setmsgConfirmDELETE("");
    setmsgNomeDELETE("");
  };

  const cadastrarusuarios = async (e) => {
    e.preventDefault();
    if (!nome) {
      setmsgnome("O nome é orbigatório");
    }
    if (nome && nome.length < 8) {
      setmsgnome("Em nome requer 8 caractéres");
    }
    if (!email) {
      setmsgemail("O email é orbigatório");
    }
    if (
      email &&
      !email.includes("@gmail.com") &&
      !email.includes("@hotmail.com")
    ) {
      setmsgemail("Use caractéres de email,como:@gmail.com ou @hotmail.com");
    }
    if (email && email.length < 15) {
      setmsgemail("Em email requer 15 caractéres");
    }

    if (!senha) {
      setmsgsenha("A senha é obigatório");
    }
    if (senha && senha.length < 5) {
      setmsgsenha("Em senha requer 5 caractéres");
    }
    if (senha && senha.length >= 5 && !confirm) {
      setmsgconfirm("Digite sua senha novamente");
    }
    if (confirm && confirm !== senha) {
      setmsgconfirm("As senhas devem ser iguais");
    }

    if (!cpf) {
      setmsgcpf("O cpf é obigatório");
    }
    if (cpf && cpf.length !== 11) {
      setmsgcpf("Em cpf requer exatos 11 caractéres");
    }

    if (!cidade) {
      setmsgcidade("A cidade é obigatório");
    }

    if (!endereço) {
      setmsgendereço("O endereço é obigatório");
    }
    if (endereço && endereço.length < 15) {
      setmsgendereço("Em endereço requer 15 caractéres");
    }

    if (!numero) {
      setmsgnumero("O numero é obigatório");
    }
    if (nome && nome.length >= 8) {
      setmsgnome("");
    }
    if (
      (email && email.length >= 15 && email.includes("@gmail.com")) ||
      email.includes("@hotmail.com")
    ) {
      setmsgemail("");
    }
    if (cpf && cpf.length === 11) {
      setmsgcpf("");
    }
    if (cidade) {
      setmsgcidade("");
    }
    if (endereço && endereço.length >= 15) {
      setmsgendereço("");
    }
    if (numero) {
      setmsgnumero("");
    }
    if (senha && senha.length >= 5) {
      setmsgsenha("");
      setligaconfirm(true);
    }
    if (confirm && confirm === senha) {
      setmsgconfirm("");
    }

    if (
      !msgnome &&
      !msgemail &&
      !msgcidade &&
      !msgendereço &&
      !msgconfirm &&
      !msgsenha &&
      !msgcpf
    ) {
      const create = await api.post("/createUsers", {
        nome: nome,
        email: email,
        cpf: cpf,
        endereço: endereço,
        numero: numero,
        confirm: confirm,
        senha: senha,
        cidade: cidade,
      });

      if (create.data.msg === "Usuario cadastrado com sucesso!") {
        setligamsg(true);
        setmsg("Cadastro concluido com sucesso!");
      } else if (create.data.msg === "Nome inválido") {
        setligamsg(true);
        setmsg("Nome inválido!");
      } else if (create.data.msg === "Email inválido") {
        setligamsg(true);
        setmsg("Email inválido!");
      } else if (create.data.msg === "Cpf inválido") {
        setligamsg(true);
        setmsg("Cpf inválido!");
      } else if (
        create.data.msg === "Já existe este usuario registrado em nosso sistema"
      ) {
        setligamsg(true);
        setmsg("Já existe este usuario cadastrado em nosso sistema!");
      }

      console.log(create.data);
    }
  };
  const ativaEstadoDelete = () => {
    setestadodelete(!estadoDelete);
  };

  useEffect(() => {
    setnumero("");
    setsenha("");
    setconfirm("");
    setnomeDELETE("");
    setsenhaDELETE("");
    setconfirmDELETE("");
  }, [usuarios]);

  return (
    <div
      className="Usuario"
      style={{ display: usuarios ? "flex" : "none", position: "relative" }}
    >
      <button
        style={{ position: "absolute" }}
        onClick={backcontrole}
        className="backcontrole"
      >
        <IoPlayBackSharp />
      </button>

      <div style={{}} className="DeletaEcadastra">
        <div
          style={{ width: "100vw", display: "flex", flexDirection: "column" }}
          className="divForm"
        >
          <h1
            style={{ color: estadoDelete ? "red" : "blueviolet" }}
            className="h1cadastrarusuarios"
          >
            {estadoDelete ? "Deletar usuário" : "Cadastrar usuário"}
          </h1>

          <div
            style={{ display: ligamsg ? "flex" : "none" }}
            className="concluido"
          >
            <p>{msg}</p>
            <button onClick={fecharconcluido} className="okconcluido">
              OK
            </button>
          </div>

          <form
            style={{ display: estadoDelete ? "none" : "flex" }}
            className="formUsuariosC"
          >
            <input
              value={nome}
              onChange={(e) => setnome(e.target.value)}
              type="text"
              placeholder="Digite aqui seu nome"
            />
            <div
              style={{ display: msgnome ? "flex" : "none" }}
              className="erro"
            >
              <p>{msgnome}</p>
            </div>

            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              placeholder="Digite aqui seu email"
            />
            <div
              style={{ display: msgemail ? "flex" : "none" }}
              className="erro"
            >
              <p>{msgemail}</p>
            </div>

            <input
              value={cpf}
              onChange={(e) => setcpf(e.target.value)}
              type="text"
              placeholder="Digite aqui seu cpf"
            />
            <div style={{ display: msgcpf ? "flex" : "none" }} className="erro">
              <p>{msgcpf}</p>
            </div>

            <input
              value={cidade}
              onChange={(e) => setcidade(e.target.value)}
              type="text"
              placeholder="Digite aqui sua cidade"
            />
            <div
              style={{ display: msgcidade ? "flex" : "none" }}
              className="erro"
            >
              <p>{msgcidade}</p>
            </div>
            <input
              value={endereço}
              onChange={(e) => setendereço(e.target.value)}
              type="text"
              placeholder="Digite aqui seu endereço"
            />
            <div
              style={{ display: msgendereço ? "flex" : "none" }}
              className="erro"
            >
              <p>{msgendereço}</p>
            </div>

            <input
              value={numero}
              onChange={(e) => setnumero(e.target.value)}
              type="number"
              placeholder="Digite aqui seu número"
            />
            <div
              style={{ display: msgnumero ? "flex" : "none" }}
              className="erro"
            >
              <p>{msgnumero}</p>
            </div>

            <input
              value={senha}
              onChange={(e) => setsenha(e.target.value)}
              type="password"
              placeholder="Digite aqui sua senha"
            />
            <div
              style={{ display: msgsenha ? "flex" : "none" }}
              className="erro"
            >
              <p>{msgsenha}</p>
            </div>

            <input
              style={{ display: ligaconfirm ? "flex" : "none" }}
              value={confirm}
              onChange={(e) => setconfirm(e.target.value)}
              type="password"
              placeholder="Digite sua senha novamente"
            />
            <div
              style={{ display: msgconfirm ? "flex" : "none" }}
              className="erro"
            >
              <p>{msgconfirm}</p>
            </div>

            <button onClick={cadastrarusuarios} className="cadastrarusuarios">
              Cadastrar
            </button>
          </form>
          <form
            style={{ display: estadoDelete ? "flex" : "none" }}
            className="formdeleteUsuario"
          >
            <input
              value={nomeDELETE}
              onChange={(e) => setnomeDELETE(e.target.value)}
              type="text"
              placeholder="Digite o nome do usuário"
            />
            <div
              style={{ display: msgNomeDELETE ? "flex" : "none" }}
              className="erro"
            >
              <p>{msgNomeDELETE}</p>
            </div>
            <input
              value={senhaDELETE}
              onChange={(e) => setsenhaDELETE(e.target.value)}
              type="password"
              placeholder="Digite a senha do usuário"
            />
            <div
              style={{ display: msgSenhaDELETE ? "flex" : "none" }}
              className="erro"
            >
              <p>{msgSenhaDELETE}</p>
            </div>
            <input
              style={{
                display: msgConfirmDELETE ? "flex" : "none",
              }}
              value={confirmDELETE}
              onChange={(e) => setconfirmDELETE(e.target.value)}
              type="password"
              placeholder="Digite novamente a senha do usuário"
            />
            <div
              style={{
                display: msgConfirmDELETE ? "flex" : "none",
              }}
              className="erro"
            >
              <p>{msgConfirmDELETE}</p>
            </div>

            <button onClick={Vsfun} className="btnVSform">
              Concluir
            </button>
          </form>
        </div>
        <div className="divBtnDeletar">
          <button
            style={{
              backgroundColor: !estadoDelete ? "red" : "blueviolet",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={ativaEstadoDelete}
            className="deletarUsuario"
          >
            {estadoDelete ? "Cadastrar usuario" : "Deletar usuário"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Usuario;
