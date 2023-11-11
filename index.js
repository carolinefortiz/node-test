const axios = require("axios")

async function getUser () {
    try {
        const usuario = await axios.get('https://api.github.com/users/carolinefortiz')

        return usuario.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}


