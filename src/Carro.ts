class Carro{
    private modelo: string;
    private ano: number;
    private cor: string;
    constructor(
        _modelo: string,
        _ano: number,
        _cor: string
    ){
        this.modelo = _modelo;
        this.ano = _ano;
        this.cor = _cor

    }
    public ligar(): boolean {
        const numeroAleatorio = Math.random();
        if(numeroAleatorio < 0.5){
            return true;
        } else {
            return false;
        }
    }
public acelerar(velocidade: number): void {
    console.log(`${this.modelo} está acelerando ${velocidade} km/h.`);
}
 }

export default Carro;