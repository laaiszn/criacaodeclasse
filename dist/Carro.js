class Carro {
    modelo;
    ano;
    cor;
    constructor(_modelo, _ano, _cor) {
        this.modelo = _modelo;
        this.ano = _ano;
        this.cor = _cor;
    }
    ligar() {
        const numeroAleatorio = Math.random();
        if (numeroAleatorio < 0.5) {
            return true;
        }
        else {
            return false;
        }
    }
    acelerar(velocidade) {
        console.log(`${this.modelo} está acelerando ${velocidade} km/h.`);
    }
}
export default Carro;
//# sourceMappingURL=Carro.js.map