import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';

const routes: Routes = [
 // { path: 'list', component: ProductListComponent, outlet: 'users' },
  {
    path: '',
    component: ProductIndexComponent,
    children: [
      {path: 'create', component: ProductCreateComponent},
      {path: 'edit/:id', component: ProductEditComponent},
      {path: 'view/:id', component: ProductViewComponent},
      {path: 'delete', component: ProductIndexComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
