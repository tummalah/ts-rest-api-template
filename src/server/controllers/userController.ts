import { Request, Response } from 'express';
//TODO issue with paths in ts config not using aliases
import { get, controller, middleware, lockThis } from '../helpers/decorators';
import { AppRouter } from '../app.router';
import UserServiceLocator from './userServiceLocator';
import { DI_TYPES } from './di-types';
import IuserDto from '../../services/userDto';
import container from "./di-container";


//const userServiceLocator = container.get<UserServiceLocator>(DI_TYPES.UserServiceLocator); // alternate method to inject Service locator once

@controller('/user',AppRouter.getInstance())
@lockThis
class UserController {
  
    constructor( private serviceLocator: UserServiceLocator ){}
   
  @get('/')
 async getUser(req: Request, res: Response) {
  
    const userDto: IuserDto = {id: '1001'};
    
    let user = await this.serviceLocator.userService.getUser(userDto);

      res.send(`
        <div>
          <div>Welcome to TS Express BoilerPlate!! ${user.name}</div>
          
        </div>
      `);
    } 
  }

  // initialize controller instance to lock 'this' for service locator
 const register= new UserController(container.get<UserServiceLocator>(DI_TYPES.UserServiceLocator));

