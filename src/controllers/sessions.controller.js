import UserService from "../services/user.services.js";

export default class UserController {
  getProfile = (user) => {
    try {
      return UserService.getProfile(user);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Función para manejar el endpoint GET /login
  getLogin = (user) => {
    try {
      return UserService.getLogin(user);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Función para manejar el endpoint GET /register
  getRegister = (req, res) => {
    try {
      return UserService.getRegister(req, res);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Función para manejar el endpoint POST /register
  postRegister = (req, res, next) => {
    try {
      return UserService.postRegister(req, res, next);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Función para manejar el endpoint POST /login
  postLogin = (req, res, next) => {
    try {
      return UserService.postLogin(req, res, next);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Función para manejar el endpoint GET /logout
  getLogout = (req, res) => {
    try {
      return UserService.getLogout(req, res);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Función para manejar el endpoint GET /github
  getGitHub = (req, res, next) => {
    try {
      return UserService.getGitHub(req, res, next);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Función para manejar el endpoint GET /github/callback
  getGitHubCallback = (req, res, next) => {
    try {
      return UserService.getGitHubCallback(req, res, next);
    } catch (error) {
      throw new Error(error.message);
    }
  };
}
