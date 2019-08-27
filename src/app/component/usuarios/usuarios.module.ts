import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guards';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsuariosComponent } from './usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';

const usuariosRoutes: Routes = [

    {path: '',  component: UsuariosComponent,
        children : [
            {path: 'usuario', component: UsuarioComponent , canActivate : [ AuthGuard ] }      
        ]
    }  
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxPaginationModule,
        RouterModule.forChild(usuariosRoutes)
    ],
    declarations: [
        UsuarioComponent,
        UsuariosComponent,
        UsuarioListComponent
    ]
})
export class UsuariosModule {}