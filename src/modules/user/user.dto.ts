import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  // Validates for a non-empty string
  @IsString()
  @IsNotEmpty()
  public name: string;

  // Gets only validated if it's part of the request's body
  @IsString()
  @IsNotEmpty()
  public email: string;

   // Validates for a non-empty integer
   @IsNumber()
   @IsNotEmpty()
   public mobilenumber: number;
 

  // Validates for an integer
  @IsNumber()
  public age: number;
  
   // Validates for a non-empty string
   @IsString()
   @IsNotEmpty()
   public password: string;
 
}