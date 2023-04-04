import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductRestService } from './product-rest.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductIndexComponent, ProductCreateComponent, ProductEditComponent, ProductViewComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ProductRestService
  ]
})
export class ProductModule { }
