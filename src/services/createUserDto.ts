import { IsDefined, IsString } from "class-validator";

class CreateUserDto {
    @IsString()
    @IsDefined()
    public username: string;
   
    @IsString()
    @IsDefined()
    public addressLine1: string;
   
    @IsString()
    @IsDefined()
    public state: string;

    @IsString()
    @IsDefined()
    public country: string;

    public userId: number;
  }
   
  export default CreateUserDto;