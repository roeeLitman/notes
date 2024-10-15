import { IsString,IsEmail, MinLength } from "class-validator"
export class CreateUserDto {
  
    username: string
    password: string
    enail: string
}
