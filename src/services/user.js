const users = [];
let userCount = 0;

const getUsers = () => {
    return users;
}

const getUser = (id) => {
    return users.find((user) => user.id === id);
}

const postUser = (name) => {
    const newUser = {
        id: userCount++,
        name: name
    };

    users.push(newUser);

    return newUser;
}

module.exports = { getUsers, getUser, postUser };