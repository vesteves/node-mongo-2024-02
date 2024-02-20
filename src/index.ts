import express from 'express'

// import Veiculo from './Veiculo'
// import Carro from './Carro'
// import Moto from './Moto'
import { route as blogRoutes } from './modules/blog'

const app = express()

app.use(express.json())

app.use('/blogs', blogRoutes)

app.get('/', (_, res) => {
    return res.status(200).json({
        msg: "Olá mundo"
    })
})

app.post('/', (req, res) => {
    return res.status(200).json({
        msg: req.body.msg
    })
})

app.listen(8000, () => {
    console.log('Servidor OK')

    // const carro = new Veiculo('Honda')
    // console.log('carro', carro.acelerar())

    // const kawazaki: string = 'Kawazaki'

    // const moto = new Veiculo(kawazaki)
    // console.log('moto', moto.freiar())

    // moto.setNome('Yamaha')
    // console.log('moto', moto.getNome())
    // console.log('moto', moto.freiar())

    // const moto = new Moto('Kawazaki')
    // console.log('moto', moto.temBau())
    // console.log('moto', moto.acelerar())

    // const carro = new Carro('Honda')
    // console.log('carro', carro.getQtdPortas())
    // console.log('carro', carro.freiar())

    // console.log('Connected!')
    // const blogModel = new BlogModel()
    // blogModel.author = 'Fabiano'
    // blogModel.title = 'Titulo teste fabiano'
    // blogModel.body = 'Postagem teste fabiano'

    // blogModel.save()
})
