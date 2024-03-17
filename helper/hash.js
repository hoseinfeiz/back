const bcrypt = require('bcrypt')
const saltRounds = 10
const hashPassword = async (myPlaintextPassword) => {
    const hash = await bcrypt.hashSync(myPlaintextPassword, saltRounds)
    return hash
}

const checkPassword = async (myPlaintextPassword, hash) => {
    const res = await bcrypt.compareSync(myPlaintextPassword, hash)
    console.log('compare ressssssssss', res)
    return res
}

module.exports = {
    hashPassword,
    checkPassword,
}
