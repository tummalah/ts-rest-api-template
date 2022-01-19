import { Request, Response } from 'express';
//TODO issue with paths in ts config not using aliases
import { get, controller, middleware } from '../helpers/decorators';
import { AppRouter } from '../app.router';




@controller('',AppRouter.getInstance())
class IndexController {
  @get('/')
  getRoot(req: any, res: Response) {
  //TODO temorarily making req any
      const user = req.userContext ? req.userContext.userinfo : null;
      res.render("index",{ isAuthenticated: req.isAuthenticated(), user });
    } 

 

    @get('/logout')
    getLogout(req: Request, res: Response) {
  
      res.redirect("/");
    }

  }

 

