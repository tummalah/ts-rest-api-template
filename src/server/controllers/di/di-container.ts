import "reflect-metadata";

import { Container } from "inversify";

import {DI_TYPES} from './di-types';
import UserServiceLocator from '../../controllers/userServiceLocator';
import IUserService from '../../../services/userService';
import UserImpl from '../../../services/userImplementation';

const container= new Container();

container.bind<IUserService>(DI_TYPES.IUserService).to(UserImpl);
container.bind<UserServiceLocator>(DI_TYPES.UserServiceLocator).to(UserServiceLocator);

export default container;