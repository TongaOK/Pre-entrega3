
import UserService from "../services/user.services.js"

export default class UserController {
       getProfile = (user) => {
        return  UserService.getProfile(user);
      }
    
      // Función para manejar el endpoint GET /login
       getLogin =  (user) => {
        return  UserService.getLogin(user);
      }
    
      // Función para manejar el endpoint GET /register
       getRegister =  (req, res) => {
        return  UserService.getRegister(req, res);
      }
    
      // Función para manejar el endpoint POST /register
       postRegister =  (req, res, next) => {
        return  UserService.postRegister(req, res, next);
      }
    
      // Función para manejar el endpoint POST /login
       postLogin =  (req, res, next) => {
        return  UserService.postLogin(req, res, next);
      }
    
      // Función para manejar el endpoint GET /logout
       getLogout =  (req, res) => {
        return  UserService.getLogout(req, res);
      }
    
      // Función para manejar el endpoint GET /github
       getGitHub =  (req, res, next) => {
        return  UserService.getGitHub(req, res, next);
      }
    
      // Función para manejar el endpoint GET /github/callback
       getGitHubCallback =  (req, res, next) => {
        return UserService.getGitHubCallback(req, res, next);
      }
}