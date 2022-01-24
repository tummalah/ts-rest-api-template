import User from "../domain/User";
import userDto from "./userDto";
import IUserService from "./userService";
import { injectable } from "inversify";
import CreateUserDto from "./createUserDto";

@injectable()
export default class UserImpl implements IUserService{
   async createUser(createUserDto: CreateUserDto): Promise<CreateUserDto> {
        
        let newuser= new CreateUserDto();
        newuser= {...createUserDto};
        newuser.userId=999;

        return newuser;

    }
    
    async getUser(userDto: userDto): Promise<userDto> {
        const user = new User(userDto.id,'Bill','bill@abc.com','jgjg','user');
        if (!user) {
            throw Error("user not found");
        }

        const foundUserDto = user;

        return foundUserDto;
  
    }

    
} 