import CreateUserDto from "./createUserDto";
import IUserDto from "./userDto";

export default interface IUserService {
    getUser(userDto: IUserDto): Promise<IUserDto>;
    createUser(createUserDto: CreateUserDto) : Promise<CreateUserDto>;
}