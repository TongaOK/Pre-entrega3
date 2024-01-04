import UserDTO from "../dto/users.dto.js"
import UserDao from "../dao/sessions.dao.js"

export default class userService {
    static async login(email, password) {
        const user = await UserDao.getUserByEmail(email)
        if (!user) {
            throw new Error('Invalid credentials')
        }
        const isValidPassword = await user.comparePassword(password)
        if (!isValidPassword) {
            throw new Error('Invalid credentials')
        }
        const userDTO = new UserDTO(user)
        return userDTO
    }

    static async register(user) {
        const newUser = await UserDao.createUser(user)
        const userDTO = new UserDTO(newUser)
        return userDTO
    }

    static async getUser(id) {
        const user = await UserDao.getUserById(id)
        const userDTO = new UserDTO(user)
        return userDTO
    }

    static async updateUser(id, user) {
        const updatedUser = await UserDao.updateUser(id, user)
        const userDTO = new UserDTO(updatedUser)
        return userDTO
    }

    static async deleteUser(id) {
        const deletedUser = await UserDao.deleteUser(id)
        const userDTO = new UserDTO(deletedUser)
        return userDTO
    }
}