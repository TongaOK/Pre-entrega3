import UserDTO from "../dto/users.dto.js";
import UserDAO from "../dao/sessions.dao.js";

export default class UserService {
  static async getProfile(sessionUser) {
    const user = await UserDAO.getProfile(sessionUser);
    console.log(user);
    const userDTO = new UserDTO(user);
    console.log(userDTO);
    return new UserDTO(user);
  }

  static async getLogin(sessionUser) {
    return await UserDAO.getLogin(sessionUser);
  }

  static async getRegister(req, res) {
    return await UserDAO.getRegister(req, res);
  }

  static async postRegister(req, res, next) {
    return await UserDAO.postRegister(req, res, next);
  }

  static async postLogin(req, res, next) {
    return await UserDAO.postLogin(req, res, next);
  }

  static async getLogout(req, res) {
     return await UserDAO.getLogout(req, res);
  }

  static async getGitHub(req, res, next) {
     return await UserDAO.getGitHub(req, res, next);
  }

  static async getGitHubCallback(req, res, next) {
    return await UserDAO.getGitHubCallback(req, res, next);
  }
}
