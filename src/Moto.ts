import Veiculo from "./Veiculo"

class Moto extends Veiculo {
    temBau() {
        return `${this.nome} tem baú`
    }
}

export default Moto