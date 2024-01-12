import passport from "passport";

 class UserDAO {
  async getProfile(user) {
   return user;
  }

  getLogin = async (user) => {
    return user;
  }

  async getRegister(user) {
    return user;
  }

  async postRegister(req, res, next) {
    try {
     
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  async postLogin(req, res, next) {
    try {
      
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  async getLogout(req, res) {
    try {
      req.session.destroy((error) => {
        res.redirect("/api/sessions/login");
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  async getGitHub(req, res, next) {
    try {
      passport.authenticate("github", { scope: ["user:email"] })(req, res, next);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  async getGitHubCallback(req, res, next) {
    passport.authenticate("github", { failureRedirect: "/login" }, async (err, user) => {
      try {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Error interno del servidor' });
        }
  
        if (!user) {
          return res.redirect('/login'); // Otra redirección en caso de falla
        }
  
        req.session.user = user;
        res.redirect('/');
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error interno del servidor' });
      }
    })(req, res, next);
  }
}


export default new UserDAO();