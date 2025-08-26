class Livro{
    private titulo: string;
    private autor: string;
    private paginas: number;


    constructor(
        _titulo: string,
        _autor: string,
        _paginas: number,
    
    ){
        this.titulo = _titulo;
        this.autor = _autor;
        this.paginas = _paginas;
    
    }
    public ler(paginasLidas: number): void{
        console.log(` leitor leu o livro ${paginasLidas} até a página ${this.titulo}` );
    }
    public exibirDetalhes(): void {
        console.log(`Título: ${this.titulo}
            Autor: ${this.autor}
            Quantidade de páginas: ${this.paginas}`);
    }
}

export default Livro;