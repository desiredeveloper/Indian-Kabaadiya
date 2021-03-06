const db = require('../db')
const config = require('../../config')
exports.all = function (cb) {
    var doc = db.get().db(config.db.name)
    var collection = doc.collection('rates')
    collection.find().toArray(function (err, docs) {
        cb(err, docs)
    })
}

exports.save = function (data) {
    var doc = db.get().db(config.db.name)
    var collection = doc.collection('rates')
    collection.insertOne(data, (err, result) => {
        if (err) return console.log(err)
        return '/create-phrase'
    })
}
