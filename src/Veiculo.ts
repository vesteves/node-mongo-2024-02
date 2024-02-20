class Veiculo {
    protected nome: string | undefined

    constructor(nome: string | undefined) {
        this.nome = nome
    }

    acelerar() {
        return `${this.nome} acelerando!!!`
    }

    freiar() {
        return `${this.nome} freiando!!!`
    }

    getNome() {
        return this.nome
    }

    setNome(nome: string) {
        this.nome = nome
    }
}

export default Veiculo