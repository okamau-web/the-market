import { Injectable } from '@angular/core';
import { RegUser } from '../models/register-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }
  
  logoutUser(){}


  registerUser(registerUserData: RegUser) {
    throw new Error("Method not implemented.");
  }
}
