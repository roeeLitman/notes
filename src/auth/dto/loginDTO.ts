import {IsString, MinLength} from 'class-validator'

export class LoginDTO {
    @IsString()
    username: string
    
    password:string
}