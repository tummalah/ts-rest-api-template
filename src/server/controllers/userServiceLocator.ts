import { inject, injectable } from "inversify";
import IUserService from "../../services/userService";
import { DI_TYPES } from "./di/di-types";

@injectable()
export default class UserServiceLocator {

    constructor(@inject(DI_TYPES.IUserService) readonly userService: IUserService) { }



}