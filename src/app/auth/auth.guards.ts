import { Injectable} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from '../shared/models/user.model';

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate{

    public estaLogueado : boolean;
    public user : User;

    constructor(private authService : AuthService,
                private router: Router){}

    canActivate( next: ActivatedRouteSnapshot,
                 state: RouterStateSnapshot ): boolean {
                 
      this.getUsuarioLogueado();

      if ( this.estaLogueado == false){
          this.router.navigate(['/']);
          return false;
      }   
      else{

         if (this.authService.user.Admin != true && next.data.requiredRol == 'Administrator') {
             this.router.navigate(['/']);
             return false;
         }
         else {
          return this.checkLogin(state.url);
        }
    }
    }

    checkLogin(url:string){       
      if( this.authService.user != null && this.estaLogueado != false){
          return true;
        }
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false; 
     }

     getUsuarioLogueado() {
         if ( localStorage.getItem('eluser') === null){
             this.estaLogueado = false;   
         } else {
            this.user = JSON.parse(
                localStorage.getItem('eluser')
            );
            this.estaLogueado = true;
         }
     }
}