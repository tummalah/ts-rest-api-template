
import {  Response,Request, } from 'express';
//TODO issue with paths in ts config not using aliases
import {IoktaRequest} from '../../server/helpers/types/oktaRequest';
import { get, controller, middleware } from '../helpers/decorators';
import { AppRouter } from '../app.router';
import { logging } from '../helpers/logger/logmanager';
const logger = logging.getLogger('controllers');




@controller('',AppRouter.getInstance())
class IndexController {
  @get('/')
  getRoot(req: IoktaRequest, res: Response) {
      logger.warn('inside home page')
      logger.info("Host:"+req.hostname)
      const user = req.userContext ? req.userContext.userinfo : null;
      res.render("index",{ isAuthenticated: req.isAuthenticated(), user });
    } 

 

    @get('/logout')
    getLogout(req: Request, res: Response) {
  
      res.redirect("/");
    }

  }

 

