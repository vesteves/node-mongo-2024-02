import mongoose from 'mongoose'
import conn from '../../service/mongo'

const Schema = mongoose.Schema;

const BlogPost = new Schema({
    author: String,
    title: String,
    body: String,
},
    {
        timestamps: true
    });

conn()

export const BlogModel = mongoose.model('blogs', BlogPost);

export default BlogModel