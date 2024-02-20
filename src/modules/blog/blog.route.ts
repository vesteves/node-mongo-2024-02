import { Router } from 'express'
import { BlogModel } from './'

export const route = Router()

route.get('/', async (req, res) => {
    const blogs = await BlogModel.find()
    return res.json(blogs);
})

export default route