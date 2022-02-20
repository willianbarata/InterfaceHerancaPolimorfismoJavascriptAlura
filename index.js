import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Diretor("Marcelo", 5000, 12345678901);

SistemaAutenticacao.login(diretor, "123456789");

const estaLogado = SistemaAutenticacao.login(diretor,"123456");

console.log(estaLogado);