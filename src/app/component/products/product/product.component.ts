import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public producto : Product;

  constructor(public productService : ProductService,
              public toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(){
    this.productService.product = { 
      id  : '',
      name : '',
      description : '',
      price : null
    }
  }
  
  salvarProducto(){
    if(this.productService.product.id.length != 0){
      this.productService.editProduct(this.productService.product);
      this.toastr.success('Producto Actualizado Satisfactoriamente !!!');
    } else {
      this.productService.insertProduct(this.productService.product);    
      this.toastr.success('Producto Registrado Satisfactoriamente !!!');
    }

    
  }
  
}
