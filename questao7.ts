class Equipamento {
    ligado: boolean = false;

    liga(): void {
        if (!this.ligado) {
            this.ligado = true;   
        }
    }

    desliga(): void {
        if (this.ligado) {
            this.ligado = false; 
        }
    }

    inverte(): void {
        this.ligado = !this.ligado;
    }

    estaLigado(): boolean {
        return this.ligado;
    }
}

let equipamento: Equipamento = new Equipamento();

equipamento.liga();
console.log(equipamento.estaLigado());
equipamento.desliga();
console.log(equipamento.estaLigado());
equipamento.inverte();
console.log(equipamento.estaLigado());


