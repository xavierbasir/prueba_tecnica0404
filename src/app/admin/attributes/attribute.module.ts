import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributeRoutingModule } from './attribute-routing.module';
import { AttributeIndexComponent } from './attribute-index/attribute-index.component';
import { AttributeCreateComponent } from './attribute-create/attribute-create.component';
import { AttributeEditComponent } from './attribute-edit/attribute-edit.component';
import { AttributeViewComponent } from './attribute-view/attribute-view.component';
import { AttributeRestService } from './attribute-rest.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AttributeIndexComponent, AttributeCreateComponent, AttributeEditComponent, AttributeViewComponent],
  imports: [
    CommonModule,
    AttributeRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AttributeRestService
  ]
})
export class AttributeModule { }
