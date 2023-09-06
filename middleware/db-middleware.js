const { MongoClient} = require('mongodb')

const databaseMiddleware = async (req, res, next) => {
    const mongoClient = await new MongoClient ("").connect()
    db = mongoClient.db('blogs')

    req.db = db

    next()
}

module.exports =  databaseMiddleware
