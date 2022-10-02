class Conta {
    numero: string;
    saldo: number;

    constructor(numero: string, saldo: number){
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number){
        if (this.saldo - valor >= 0) {
            this.saldo = this.saldo - valor;
            return true;
        } else {
            return false;
        }
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number){
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        } else {
            return false;
        }
    }
}

let conta: Conta = new Conta('1', 100);
let conta2: Conta = new Conta('2', 50);
console.log(conta.sacar(10));
console.log(conta.sacar(100));
console.log(conta.consultarSaldo());
console.log(conta.transferir(conta2, 100));
console.log(conta.transferir(conta2, 50));
console.log(conta.consultarSaldo());
console.log(conta2.consultarSaldo());


