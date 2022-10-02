/*
5. Crie uma classe chamada Saudacao que:

a. Contenha um atributo chamado texto e outro chamado destinatario, ambos
String;
b. Crie um construtor que inicializa os dois atributos;
c. Crie um método obterSaudacao() que retorne a concatenação dos dois
atributos. Ex: "Bom dia, João";
d. Instancie uma classe Saudacao e teste seu método obterSaudacao().
*/

class Saudacao {
    texto: string;
    destinatario: string;

    constructor(texto: string, destinatario: string){
        this.texto = texto;
        this.destinatario = destinatario;
    }

    obterSaudacao(): string {
        return this.texto + ', ' + this.destinatario;
    }
}

let mensagem: Saudacao = new Saudacao('Bom dia', 'Raimundo');

console.log(mensagem.obterSaudacao());