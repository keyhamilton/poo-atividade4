/*
6. Crie uma classe chamada Triangulo que:
a. Possua 3 atributos inteiros representando os lados;
b. Crie um método que retorna true se os lados formarem um triângulo de
acordo com a regra: |b-c| < a < b+c;
c. Crie 3 métodos: ehIsoceles(), ehEquilatero() e ehEscaleto() que retorne
verdadeiro caso o triângulo seja um dos tipos relacionados ao nome do
método. Eles devem chamar antes de tudo, o método da questão b. e
retornar false se esse método já retornar false também;
d. Instancie classes Triangulo de diferentes lados e seus métodos.
*/

class Triangulo {
    l1: number;
    l2: number;
    l3: number;

    constructor(a: number, b: number, c: number){
        this.l1 = a;
        this.l2 = b;
        this.l3 = c;
    }

    valida(): boolean {
        return Math.abs(this.l2 - this.l3) < this.l1 && this.l1 < this.l2 + this.l3;
    }

    ehIsoceles(): boolean {
        

        if (this.valida()) {
            return this.l1 == this.l2 || this.l1 == this.l3 || this.l2 == this.l3;
        } else {
            return false;
        }
    }

    ehEquilatero(): boolean {
        if (this.valida()) {
            return this.l1 == this.l2 && this.l1 == this.l3;
        } else {
            return false;
        }
    }

    ehEscaleno(): boolean {
        if (this.valida()) {
            return this.l1 != this.l2 && this.l1 != this.l3 && this.l2 != this.l3;
        } else {
            return false;
        }
    }
}


let trianguloIsoceles: Triangulo = new Triangulo(12, 10, 10);
let trianguloEquilatero: Triangulo = new Triangulo(8, 8, 8);
let trianguloEscaleno: Triangulo = new Triangulo(13, 9, 7);


console.log(trianguloIsoceles.ehIsoceles());
console.log(trianguloEquilatero.ehEquilatero());
console.log(trianguloEscaleno.ehEscaleno());


