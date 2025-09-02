import Livro from "./Livro.js";
import Aluno from "./Aluno.js";
import Carro from "./Carro.js";
let carro1 = new Carro("Bmw 320i ", 2021, "Preto");
let ligado = carro1.ligar();
if (ligado) {
    carro1.acelerar(200);
}
else {
    console.log("O carro não está ligado.");
}
let aluno1 = new Aluno("Lais Zanqueta", 9004, "Economia");
let aluno2 = new Aluno("Larissa dos Santos", 1007, "Educação Física");
aluno1.estudar("Juros compostos");
aluno2.estudar("Anatomia");
aluno1.entregarAtividade();
aluno2.entregarAtividade();
let livro = new Livro("O Senhor dos Anéis: A Sociedade do Anel", "J.R.R. Tolkien", 597);
livro.exibirDetalhes();
//# sourceMappingURL=main.js.map