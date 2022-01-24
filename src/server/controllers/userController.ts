import { NextFunction, Request, Response } from 'express';
//TODO issue with paths in ts config not using aliases
import { get, controller, middleware, lockThis, post } from '../helpers/decorators';
import { AppRouter } from '../app.router';
import UserServiceLocator from './userServiceLocator';
import { DI_TYPES } from './di/di-types';
import IuserDto from '../../services/userDto';
import container from "../controllers/di/di-container";
import { isAuthenticated } from './middleware/sessionAuth';
import {IoktaRequest} from '../../server/helpers/types/oktaRequest';
import HttpException from '../helpers/exceptions/httpException';
import CreateUserDto from '../../services/createUserDto';
import bodyValidator from './middleware/bodyValidator';


//const userServiceLocator = container.get<UserServiceLocator>(DI_TYPES.UserServiceLocator); // alternate method to inject Service locator once

@controller('/user',AppRouter.getInstance())
@lockThis
class UserController {
  
    constructor( private serviceLocator: UserServiceLocator ){}
   
  @get('/')
  @middleware((req : IoktaRequest,res,next)=> {isAuthenticated(req,res,next)})
 async getUser(req: Request, res: Response, next: NextFunction) {
  
    const userDto: IuserDto = {id: '1001'};
    
    const user = await this.serviceLocator.userService.getUser(userDto);
      
     res.render('welcome',{userName:user.name,user});
    } 

  @post('/')
  @middleware( bodyValidator(CreateUserDto))
 async createUser(req: Request, res: Response, next: NextFunction) {
  
    const createuserDto: CreateUserDto = {...req.body};
    
    const newuser = await this.serviceLocator.userService.createUser(createuserDto);
      
     res.status(201).json({result:"User Created with Id:"+ newuser.userId });
    }
  }

  // initialize controller instance to lock 'this' for service locator
 const register= new UserController(container.get<UserServiceLocator>(DI_TYPES.UserServiceLocator));

