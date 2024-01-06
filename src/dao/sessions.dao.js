import passport from "passport";

 class UserDAO {
  async getProfile(req, res) {
    try {
      if (!req.session.user) {
        return res.redirect("/api/sessions/login");
      }
      console.log(req.session.user);
      res.render("profile", { title: "Profile", user: req.session.user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

   getLogin = async (req, res) => {
    try {
      console.log("REQ:", req)
      console.log("RES:", res)
      if (req.session && req.session.user) {
        return res.redirect("/api/sessions/profile");
      }
      res.render("login", { title: "Login" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  async getRegister(req, res) {
    try {
      if (req.session.user) {
        return res.redirect("/api/sessions/profile");
      }
      res.render("register", { title: "Register" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  async postRegister(req, res, next) {
    try {
      passport.authenticate('register', { failureRedirect: '/register' })(req, res, async () => {
         res.redirect('/api/sessions/login');
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  async postLogin(req, res, next) {
    try {
      passport.authenticate('login', { failureRedirect: '/login' })(req, res, async () => {
        req.session.user = req.user;
        res.redirect('/api/sessions/profile');
      });
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