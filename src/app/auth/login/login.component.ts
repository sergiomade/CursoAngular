import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';
import { User } from '../../shared/models/user.model';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loading:boolean = false;
  public users : User[];
  subscription : Subscription;

  paso  : boolean;

  public logUser : User = {
      id : '',
      username: '',
      password: '',
      nombre:'',
      email:'',
      Admin:false,
      estatus:true
  }

  constructor( public router : Router,
               public toastr : ToastrService,
               public authService : AuthService,
               public userService : UsersService) {}
               

  ngOnInit() {
    this.cargarUsuarios();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  cargarUsuarios(){
    this.subscription = this.userService.getUsers().subscribe( users => {
      this.users = users;
     });
  }

  login(user : User){

   this.paso = false;
  
   this.users.forEach( x => {
      if ( x.password == this.logUser.password && x.username == this.logUser.username ){
        this.logUser.Admin = x.Admin;
        this.authService.login(x);
        this.router.navigate(['products']);
        this.toastr.success( "Bienvenido " + this.logUser.username );  
        this.paso = true;
        return this.paso;
      } 
    }); 

    if ( !this.paso ){
      this.toastr.error("No esta autorizado !!! ");
    }

  }
  
  cancel(){
    this.router.navigate(['home']);
  }

}





