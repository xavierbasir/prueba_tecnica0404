import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AttributeRestService } from '../attribute-rest.service';
import { FormGroup, FormControlName, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-attribute-view',
  templateUrl: './attribute-view.component.html',
  styleUrls: ['./attribute-view.component.scss']
})
export class AttributeViewComponent implements OnInit {
  attributeList: Array<object> = [];
  serverErrors = [];
  registerForm: FormGroup
  constructor(private route: ActivatedRoute, private attributeRest: AttributeRestService, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.loadAttributes();
      this.attributeRest.getAttribute(id).subscribe(
       (response) => {
         console.log(response)
         this.registerForm.patchValue({
           'name':response.attribute.name,
           'type':response.attribute.type
         })
       },
       (error) => console.log(error)
     );

     this.registerForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(10),
        Validators.pattern(/^(?:[a-zA-Z0-9\s]+)?$/)]),
      'type': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
      })
  }

  get name() { return this.registerForm.get('name'); }
  get type() { return this.registerForm.get('type'); }


  loadAttributes() {
    this.attributeRest.getAttributes().subscribe(
      (response) => { console.log(this.attributeList = response["attribute"]); },
      (error) => { console.log(error) }
     );
  }
}
