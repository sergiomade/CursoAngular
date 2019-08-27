import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthGuard } from 'src/app/auth/auth.guards';
import { FormsModule } from '@angular/forms';
import { SearchPipe }  from '../../shared/pipes/search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

const productsRoutes: Routes = [

    {path: '',  component: ProductsComponent,
        children : [
            {path: 'product', component: ProductComponent , canActivate : [ AuthGuard ] }      
        ]
    }  
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxPaginationModule,
        RouterModule.forChild(productsRoutes)
    ],
    declarations: [
        ProductsComponent,
        ProductComponent,
        ProductListComponent,
        SearchPipe
    ]
})
export class ProductsModule {}
