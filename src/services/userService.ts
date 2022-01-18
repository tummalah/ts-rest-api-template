import IUserDto from "./userDto";

export default interface IUserService {
    getUser(userDto: IUserDto): Promise<IUserDto>;
}