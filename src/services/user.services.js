import UserDTO from "../dto/users.dto.js";
import UserDAO from "../dao/sessions.dao.js";

export default class UserService {
  static async getProfile(sessionUser) {
    const user = await UserDAO.getProfile(sessionUser);
    return new UserDTO(user);
  }

  static async getLogin(sessionUser) {
    return await UserDAO.getLogin(sessionUser);
  }

  static async getRegister(req, res) {
    try {
      const user = await UserDAO.getRegister(req, res);
      if (user && user._id) {
        return res.redirect("/api/sessions/profile");
      }
      return res.render("register", { title: "Register" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  static async postRegister(req, res, next) {
    try {
      await UserDAO.postRegister(req, res, next);
      res.redirect("/api/sessions/login");
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  static async postLogin(req, res, next) {
    try {
      await UserDAO.postLogin(req, res, next);
      return res.redirect("/api/sessions/profile");
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  static async getLogout(req, res) {
    try {
      await UserDAO.getLogout(req, res);
      return res.redirect("/api/sessions/login");
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  static async getGitHub(req, res, next) {
    try {
      await UserDAO.getGitHub(req, res, next);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  static async getGitHubCallback(req, res, next) {
    try {
      await UserDAO.getGitHubCallback(req, res, next);
      return res.redirect("/");
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  }
}
