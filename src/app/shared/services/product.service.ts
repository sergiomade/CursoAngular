import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsColletion : AngularFirestoreCollection<Product> ;
  products : Observable<Product[]>;
  productDoc : AngularFirestoreDocument<Product>;
  product = {}  as Product;

  constructor(public db : AngularFirestore) {
    this.productsColletion = this.db.collection<Product>("Products");
    this.products = this.productsColletion.snapshotChanges().pipe(map(actions => {
         return actions.map( a => {
           const data = a.payload.doc.data() as Product;
           data.id = a.payload.doc.id;
           return data;
         });
       }));
   }

  getProducts(){
    return this.products;
  }

  insertProduct(product: Product){
    this.productsColletion.add(product);
  }

  deleteProduct(product: Product){
    this.productDoc = this.db.doc(`Products/${product.id}`);
    this.productDoc.delete();
  }

  editProduct(product: Product){
    this.productDoc = this.db.doc(`Products/${product.id}`);
    this.productDoc.update(product);
  }
  
}
