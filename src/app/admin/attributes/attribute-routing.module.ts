import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttributeIndexComponent } from './attribute-index/attribute-index.component';
import { AttributeCreateComponent } from './attribute-create/attribute-create.component';
import { AttributeEditComponent } from './attribute-edit/attribute-edit.component';
import { AttributeViewComponent } from './attribute-view/attribute-view.component';

const routes: Routes = [
 // { path: 'list', component: AttributeListComponent, outlet: 'users' },
  {
    path: '',
    component: AttributeIndexComponent,
    children: [
      {path: 'create', component: AttributeCreateComponent},
      {path: 'edit/:id', component: AttributeEditComponent},
      {path: 'view/:id', component: AttributeViewComponent},
      {path: 'delete', component: AttributeIndexComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttributeRoutingModule { }
