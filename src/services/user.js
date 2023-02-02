const users = [
    {
        id: 2,
        name: 'Preetinder Singh'
    }
];

const userCount = 0;

const getUsers = () => {
    return users;
}

const getUser = (id) => {
    return users.find((user) => user.id === id);
}

module.exports = { getUsers, getUser };