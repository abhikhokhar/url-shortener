//const sessionIdToUserMap = new Map();
const jwt = require('jsonwebtoken');
const secret = "Abhi$123@4"

function setUser(user){
    //sessionIdToUserMap.set(id, user)
    if (!user || !user._id) {
        throw new Error("Invalid user data: Missing _id");
    }
    const payload = {
        id: user._id,
        email: user.email,
    }
    return jwt.sign(payload, secret, { expiresIn: "1h" });
}

function getUser(token) {
     //return sessionIdToUserMap.get(id)
    if (!token) return null;

    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null; 
    }
}

module.exports = { setUser, getUser};