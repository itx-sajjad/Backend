const { createUser, loginUser } = require("../models/user");

exports.createUser = async (email, password) => {
    const uid = Date.now();
    return await createUser(email, password, uid);
};

exports.loginUser = async (email, password) => {
    try {
        return await loginUser(email, password);
    } catch (error) {
        throw error;
    }
};