
import UserDAO from "../dao/sessions.dao.js"

export default class UserController {
       getProfile = (req, res) => {
        return  UserDAO.getProfile(req, res);
      }
    
      // Función para manejar el endpoint GET /login
       getLogin =  (req, res) => {
        return  UserDAO.getLogin(req, res);
      }
    
      // Función para manejar el endpoint GET /register
       getRegister =  (req, res) => {
        return  UserDAO.getRegister(req, res);
      }
    
      // Función para manejar el endpoint POST /register
       postRegister =  (req, res, next) => {
        return  UserDAO.postRegister(req, res, next);
      }
    
      // Función para manejar el endpoint POST /login
       postLogin =  (req, res, next) => {
        return  UserDAO.postLogin(req, res, next);
      }
    
      // Función para manejar el endpoint GET /logout
       getLogout =  (req, res) => {
        return  UserDAO.getLogout(req, res);
      }
    
      // Función para manejar el endpoint GET /github
       getGitHub =  (req, res, next) => {
        return  UserDAO.getGitHub(req, res, next);
      }
    
      // Función para manejar el endpoint GET /github/callback
       getGitHubCallback =  (req, res, next) => {
        return UserDAO.getGitHubCallback(req, res, next);
      }
}