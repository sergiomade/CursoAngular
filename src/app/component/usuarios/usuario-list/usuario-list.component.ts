import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { User } from 'src/app/shared/models/user.model';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit, OnDestroy {

  public users : User[];
  public searchText2: string;
  public pageSize : number = 8;
  public pageActual : number = 1;
  
  subscription : Subscription;
  
  constructor(public userService : UsersService,
              public toastr : ToastrService) { }

  ngOnInit() {
    this.subscription = this.userService.getUsers().subscribe( datos => {
       this.users = datos;
     });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  Seleccionar(item : User){
    this.userService.user = item;
  }

  deleteUser(event, user){
    if( confirm("Esta seguro que desea eleminar este Usuario ?") ) {
      this.userService.deleteUsuario(user);
      this.toastr.warning("Producto Eliminado satisfactoriamente");
    }
  }
}
