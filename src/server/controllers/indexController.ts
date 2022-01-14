import { Request, Response } from 'express';
//TODO issue with paths in ts config not using aliases
import { get, controller, middleware } from '../helpers/decorators';
import { AppRouter } from '../app.router';




@controller('',AppRouter.getInstance())
class IndexController {
  @get('/')
  @middleware((req,res,next)=> {console.log(req.hostname); next()})
  getRoot(req: Request, res: Response) {
  
      res.send(`
        <div>
          <div>Welcome to TS Express BoilerPlate!! Happy Coding!!</div>
          
        </div>
      `);
    } 
  }

 

