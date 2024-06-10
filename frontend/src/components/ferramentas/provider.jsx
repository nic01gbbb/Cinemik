import propTypes from "prop-types";
import Appcontext from "./Appcontext";
import { useState } from "react";

function Provider({ children }) {
  const [usuarios, setusuarios] = useState(false);
  const [Base, setBase] = useState(true);
  const [controle, setcontrole] = useState(false);
  const [sessao, setsessao] = useState(false);
  const [vizualsessao, setvizualsessao] = useState(false);
  const [caixaF, setcaixaF] = useState("");
  const [caixaCo, setcaixaCo] = useState("");
  const [caixaCa, setcaixaCa] = useState("");
  const [Verusuario, setVerusuario] = useState(false);
  const [box, setbox] = useState([]);
  const [VsparaTabela, setVsparaTabela] = useState(false);
  const [estadoDelete, setestadodelete] = useState(false);
  const [dadosusuarioNome, setdadosusuarioNome] = useState("");
  const [dadosUsuarioPosição, setdadosUsuarioPosição] = useState("");
  const [dadosUsuarioPosiçãoCF, setdadosUsuarioPosiçãoCF] = useState("");

  const dados = {
    dadosUsuarioPosiçãoCF,
    setdadosUsuarioPosiçãoCF,
    dadosUsuarioPosição,
    setdadosUsuarioPosição,
    dadosusuarioNome,
    setdadosusuarioNome,
    estadoDelete,
    setestadodelete,
    VsparaTabela,
    setVsparaTabela,
    box,
    setbox,
    Verusuario,
    setVerusuario,
    caixaCo,
    setcaixaCo,
    caixaCa,
    setcaixaCa,
    caixaF,
    setcaixaF,
    vizualsessao,
    setvizualsessao,
    sessao,
    setsessao,
    controle,
    setcontrole,
    Base,
    setBase,
    usuarios,
    setusuarios,
  };

  return <Appcontext.Provider value={dados}>{children}</Appcontext.Provider>;
}

export default Provider;
Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
