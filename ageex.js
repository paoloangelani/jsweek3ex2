class Persona {
    constructor(nome, età) {
        this.nome = nome;
        this.età = età;
    }

    mostraEtà() {
        if (first.età > second.età && first.età > third.età) {
            return first.età;
        } else if (second.età > first.età && second.età > third.età) {
            return second.età;
        } else {
            return third.età;
        }
    }
}

let first = new Persona("paolo", 31);
let second = new Persona("francesca", 27);
let third = new Persona("corrado", 30);

console.log(first.mostraEtà());