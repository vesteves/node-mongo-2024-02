import mongoose from 'mongoose'

const conn = () => {
    return mongoose.connect('mongodb://root:example@127.0.0.1:27017/local', {
        authSource: "admin",
        user: "root",
        pass: "example"
    })
}

export default conn