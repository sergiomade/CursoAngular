import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { AuthGuard  } from '../app/auth/auth.guards'; 

import { NotfoundComponent } from './component/notfound/notfound.component';
import { LogoutComponent } from './component/logout/logout.component';
import { LoginComponent } from './auth/login/login.component';
import { Role  } from '../../src/app/shared/models/rol.enum';

const appRoutes : Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: 'products', loadChildren: '../app/component/products/products.module#ProductsModule'},
    {path: 'usuarios', loadChildren: '../app/component/usuarios/usuarios.module#UsuariosModule', data : { requiredRol : Role.Admin }},
    {path: 'login', component: LoginComponent },
    {path: 'Logout', component: LogoutComponent, canActivate: [ AuthGuard ]}, 
    {path : '**', component: NotfoundComponent}
    ];

    @NgModule({
    imports :[
        RouterModule.forRoot(appRoutes)
    ],
    exports : [
        RouterModule
    ]
})
export class AppRoutingModule{

}