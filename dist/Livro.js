class Livro {
    titulo;
    autor;
    paginas;
    constructor(_titulo, _autor, _paginas) {
        this.titulo = _titulo;
        this.autor = _autor;
        this.paginas = _paginas;
    }
    ler(paginasLidas) {
        console.log(` leitor leu o livro ${paginasLidas} até a página ${this.titulo}`);
    }
    exibirDetalhes() {
        console.log(`Título: ${this.titulo}
            Autor: ${this.autor}
            Quantidade de páginas: ${this.paginas}`);
    }
}
export default Livro;
//# sourceMappingURL=Livro.js.map