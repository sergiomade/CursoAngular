import { Component, OnInit } from '@angular/core';
import { UsersService  } from '../../../shared/services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(public usuarioService : UsersService,
              public toastr : ToastrService) { }

  ngOnInit() {
    this.resetform();
  }

  resetform(){
    this.usuarioService.user = {
      id : '',
      username : '',
      password : '',
      nombre : '',
      email: '',
      Admin: false,
      estatus : true
    }
  }
  salvarUsuario(){
    this.usuarioService.insertUsuario(this.usuarioService.user);
  }

}
