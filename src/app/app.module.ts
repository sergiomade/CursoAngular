import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxPaginationModule } from 'ngx-pagination';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    NotfoundComponent,
    FooterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
