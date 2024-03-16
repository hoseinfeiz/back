const bcrypt = require('bcrypt')
const saltRounds = 10
const hashPassword = (myPlaintextPassword) => {
    const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds)
    return hash
}

const checkPassword = (myPlaintextPassword, hash) => {
    return bcrypt.compareSync(myPlaintextPassword, hash)
}

module.exports = {
    hashPassword,
    checkPassword,
}
