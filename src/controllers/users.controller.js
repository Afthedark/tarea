

async function getUsers(req, res) {
    res.send('Listando de usuarios')
}


async function createUser(req, res) {
    res.send('Crear usuario')
}

export default{
    getUsers,
    createUser
}

