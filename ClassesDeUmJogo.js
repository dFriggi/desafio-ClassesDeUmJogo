class classeDoHeroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let ataque
        switch(this.tipo){
            case "guerreiro":
                ataque = "espada"
                break
            case "mago":
                ataque = "magia"
                break
             case "monge":
                ataque = "artes marciais"
                break
            case "ninja":
                ataque = "shuriken"
                break
        }

            console.log(`O ${this.tipo} de nome ${this.nome} e ${this.idade} anos atacou usando ${ataque}`)

    }
}

const guerreiro = new classeDoHeroi("Espartacus" , 35 , "guerreiro")
guerreiro.atacar()

const mago = new classeDoHeroi("Merlin" , 20 , "mago")
mago.atacar()

const monge = new classeDoHeroi("Dre" , 88 , "monge")
monge.atacar()

const ninja = new classeDoHeroi("Naruto" , 16 , "ninja")
ninja.atacar()