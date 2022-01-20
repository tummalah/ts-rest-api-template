import User from "../domain/User";
import { promisify } from "util";
import userDto from "./userDto";
import IUserService from "./userService";
import { injectable } from "inversify";

@injectable()
export default class UserImpl implements IUserService{
    
    async getUser(userDto: userDto): Promise<userDto> {
        let user = new User(userDto.id,'Bill','bill@abc.com','jgjg','user');
        if (!user) {
            throw Error("user not found");
        }

        const foundUserDto = user;

        return foundUserDto;
  
    }

    
} 