import { Request, Response } from 'express';
//TODO issue with paths in ts config not using aliases
import { get, controller, middleware, lockThis } from '../helpers/decorators';
import { AppRouter } from '../app.router';
import UserServiceLocator from './userServiceLocator';
import { DI_TYPES } from './di-types';
import IuserDto from '../../services/userDto';
import container from "./di-container";
import { isAuthenticated } from './middleware/sessionAuth';
import {IoktaRequest} from '../../server/helpers/types/oktaRequest';


//const userServiceLocator = container.get<UserServiceLocator>(DI_TYPES.UserServiceLocator); // alternate method to inject Service locator once

@controller('/user',AppRouter.getInstance())
@lockThis
class UserController {
  
    constructor( private serviceLocator: UserServiceLocator ){}
   
  @get('/')
  @middleware((req : IoktaRequest,res,next)=> {isAuthenticated(req,res,next)})
 async getUser(req: Request, res: Response) {
  
    const userDto: IuserDto = {id: '1001'};
    
    const user = await this.serviceLocator.userService.getUser(userDto);

      res.render('welcome',{userName:user.name,user});
    } 
  }

  // initialize controller instance to lock 'this' for service locator
 const register= new UserController(container.get<UserServiceLocator>(DI_TYPES.UserServiceLocator));

