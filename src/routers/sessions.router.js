import { Router } from "express";
import passport from "passport";
import UserController from "../controllers/sessions.controller.js";

const router = Router();

// En tu enrutador
const controller = new UserController();
console.log(UserController);

router.get("/profile", async (req, res) => {
  try {
    const user = req.session.user;
    if (!user) {
      return res.redirect("/api/sessions/login");
    }
    const profile = await controller.getProfile(user);
    res.render("profile", { title: "Profile", user: profile });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}); //REVISAR CONTROLLER

router.get("/login", (req, res) => {
  try {
    const user = req.session.user;
    if (user) {
      return res.redirect("/api/sessions/profile");
    }
    controller.getLogin(user);
    res.render("login", { title: "Login" });
    } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}); //REVISAR CONTROLLER

router.get("/register", (req, res) => {
    try {
        const user = req.session.user;
      if (user) {
        return res.redirect("/api/sessions/profile");
      }
     // controller.getRegister(user)
      res.render("register", { title: "Register" });
    
    } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" });
    }
}); //REVISAR CONTROLLER


router.post("/register", (req, res, next) =>{
    //controller.postRegister(req, res, next)
    passport.authenticate('register', { failureRedirect: '/register' })(req, res, async () => {
        return res.redirect('/api/sessions/login');
     });
}
); //REVISAR CONTROLLER

router.post("/login", (req, res, next) => {
    //controller.postLogin(req, res, next)
    passport.authenticate('login', { failureRedirect: '/login' })(req, res, async () => {
        req.session.user = req.user;
        res.redirect('/api/sessions/profile');
      });
}); //REVISAR CONTROLLER

router.get("/logout", (req, res) => {
  //controller.getLogout(req, res)
  try {
    req.session.destroy((error) => {
      res.redirect("/api/sessions/login");
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}); //REVISAR CONTROLLER

router.get("/github", (req, res, next) => {
    //controller.getGitHub(req, res, next)
    try {
      passport.authenticate("github", { scope: ["user:email"] })(req, res, next);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
}); //REVISAR CONTROLLER

router.get("/github/callback", (req, res, next) =>{
    //controller.getGitHubCallback(req, res, next)
    passport.authenticate("github", { failureRedirect: "/login" }, async (err, user) => {
      try {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Error interno del servidor' });
        }
  
        if (!user) {
          return res.redirect('/login');
        }
  
        req.session.user = user;
        res.redirect('/');
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error interno del servidor' });
      }
    })(req, res, next);
}); //REVISAR CONTROLLER

router.get("/current", async (req, res) => {
  try {
    const user = req.session.user;
    if (!user) {
      return res.redirect("/api/sessions/login");
    }
    const profile = await controller.getProfile(user);
    console.log(profile);
    res.send({ user: profile });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
})

export default router;
