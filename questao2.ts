class Hotel {
    quantReservas : number;
    constructor(qtdReservas: number){
        this.quantReservas = qtdReservas;
    }
    adicionarReserva() : void {
        this.quantReservas++;
    }
}

let hotel: Hotel = new Hotel(2);
hotel.adicionarReserva();
console.log(hotel.quantReservas);