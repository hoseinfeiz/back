const mongoose = require('mongoose')

const mongodb = {
    connect: async () => {
        await mongoose
            .connect('mongodb://0.0.0.0:27017/yasamin', {})
            .catch((error) => console.error(error))
    },
}

module.exports = mongodb
