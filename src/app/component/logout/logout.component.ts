import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public authservice : AuthService,
              public router : Router) { }

  ngOnInit() {
  }

  logout(){
    if ( confirm('Esta seguro que desea salir ?')){
     this.authservice.logout();
     this.router.navigate(['/']);
  }
  }
}
