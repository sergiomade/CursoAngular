import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, filter, find } from 'rxjs/operators';
import { User } from '../models/user.model';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersColletion: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>;
  user : User;

  constructor( public db: AngularFirestore,
               public toastr : ToastrService ) {
    this.getUsers();
  }


  getUsers(){
    this.usersColletion = this.db.collection<User>('Usuarios');
    return this.users = this.usersColletion.snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as User;
            data.id = a.payload.doc.id;
            return data;
          })          
        })
      );  
  }


  getUserById(id: string): Observable < User > {
   this.userDoc = this.db.doc<User>(`Usuarios/${id}`);
   return this.userDoc.snapshotChanges().pipe(
    map(a => {
      const data = a.payload.data() as User;
      return data;
    })
   );
  } 


insertUsuario(user: User){
  if ( user.id.length == 0 ){
    this.usersColletion.add(user);
    this.toastr.success("Registro insertado satisfactoriamente !!!")
  } else{
    this.editUsuario(user);
  }
}


deleteUsuario(user: User){
  debugger;
  this.userDoc = this.db.doc(`Usuarios/${user.id}`);
  this.userDoc.delete();
}

editUsuario(user: User){
  this.userDoc = this.db.doc(`Usuarios/${user.id}`);
  this.userDoc.update(user);
  this.toastr.success("Registro Actualizado satisfactoriamente !!!")
}

}
