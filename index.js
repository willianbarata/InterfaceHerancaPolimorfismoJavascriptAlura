import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Cliente } from "./Cliente.js";
const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Diretor("Marcelo", 5000, 12345678901);

SistemaAutenticacao.login(diretor, "123456789");

const estaLogado = SistemaAutenticacao.login(diretor,"123456");

const cliente = new Cliente("pedro", 555555555, "456");
const estaLogado1 = SistemaAutenticacao.login(cliente,"123456");
console.log(cliente);
console.log(estaLogado1);