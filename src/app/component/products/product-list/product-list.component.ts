import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements  OnInit, OnDestroy {

  public products : Product[]; 
  public searchText: string;
  public pageSize : number = 8;
  public pageActual : number = 1;

  subscription : Subscription;

  constructor(public productservice : ProductService,
              public toastr : ToastrService ) { }

  ngOnInit() {
   this.subscription = this.productservice.getProducts().subscribe( products => {
      this.products = products;
     });
   }

   ngOnDestroy(){
    this.subscription.unsubscribe();
   }
  
  deleteProduct(event, product){
    if( confirm("Esta seguro que desea eleminar este registro ?") ) {
      this.productservice.deleteProduct(product);
      this.toastr.warning("Producto Eliminador satisfactoriamente");
    }
   }
 
   editProduct(event, product){
     this.productservice.editProduct(product);
    }

    Seleccionar(producto: Product){
      this.productservice.product = producto;
    }
}
