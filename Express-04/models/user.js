const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "..", "data", "user.json");

const readData = async () => {
    try {
        const fileData = await fs.promises.readFile(filepath, "utf8");
        if (!fileData.trim()) {
            return [];
        }
        return JSON.parse(fileData);
    } catch (error) {
        if (error.code === "ENOENT") {
            await fs.promises.writeFile(filepath, "[]", "utf8");
            return [];
        }
        throw error;
    }
};

const writeData = async (data) => {
    await fs.promises.writeFile(filepath, JSON.stringify(data, null, 2), "utf8");
};

exports.createUser = async (email, password, uid) => {
    try {
        const users = await readData();
        const matched = users.find((user) => user.email === email);

        if (matched) {
            throw new Error("user already exists!");
        }

        const newUser = { uid, email, password };
        await writeData([...users, newUser]);
        return newUser;
    } catch (error) {
        throw error;
    }
};

exports.loginUser = async (email, password) => {
    const users = await readData();
    const user = users.find((item) => item.email === email);

    if (!user) {
        throw new Error("User not found");
    }

    if (user.password !== password) {
        throw new Error("Invalid password");
    }

    return user;
};