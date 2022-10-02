class Jogador {
    forca: number;
    nivel: number;
    pontos: number;

    constructor(forca: number, nivel: number, pontos: number){
        this.forca = forca;
        this.nivel = nivel;
        this.pontos = pontos;
    }

    calcularAtaque(): number {
        return this.forca * this.nivel;
    }

    estaVivo(): boolean {
        return this.pontos > 0;
    }

    atacar(jogador: Jogador): void {
        if (jogador.estaVivo()) {
            jogador.pontos -= this.calcularAtaque();
        }
    }

    toString(): string {
        return `
        ${this.pontos} pontos;
        Nível: ${this.nivel}
        Força: ${this.forca}`
    }
}

let jogador1: Jogador = new Jogador(10, 3, 100);
let jogador2: Jogador = new Jogador(10, 4, 80);

while (jogador1.estaVivo() && jogador2.estaVivo()) {
    
    console.log('Jogador 1');
    console.log(jogador1.toString());
    
    console.log('Jogador 2');
    console.log(jogador2.toString());
    
    jogador1.atacar(jogador2);
    jogador2.atacar(jogador1);
}
