import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../shared/models/user.model';
import { UsersService } from '../shared/services/users.service';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public user: User = null;
    public redirectUrl:string = null;

    constructor( public userService : UsersService ) { }
  
    login(user: User):Observable<User>{
       localStorage.setItem("eluser", JSON.stringify(user));
       this.user = user;
       return of(user);
      } 
       
    
    logout(){
      this.user = null;
      localStorage.removeItem("eluser");
    }

}