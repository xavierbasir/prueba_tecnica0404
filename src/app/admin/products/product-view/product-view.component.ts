import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductRestService } from '../product-rest.service';
import { AttributeRestService } from '../../attributes/attribute-rest.service';
import { FormGroup, FormControlName, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  productList: Array<object> = [];
  attributeList: Array<object> = [];
  serverErrors = [];
  producAttributes = [];
  producAttributesAux = [];
  registerForm: FormGroup
  espAttribute = '';
  productAttribute = '';
  generalColor = [];
  generalSize = [];
  generalFactory = [];
  generalBranch = [];

  constructor(private route: ActivatedRoute, private productRest: ProductRestService, private attributeRest: AttributeRestService, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.loadProducts();
    this.loadAttributes();
      this.productRest.getProduct(id).subscribe(
       (response) => {
         console.log(response)
         this.registerForm.patchValue({
           'name':response.product.name,
           'value':response.product.value,
           'description':response.product.description
         })
       },
       (error) => console.log(error)
     );

     this.registerForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(10),
        Validators.pattern(/^(?:[a-zA-Z0-9\s]+)?$/)]),
      'value': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(10),
        Validators.pattern(/^(?:[a-zA-Z0-9\s]+)?$/)]),
      'description': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(500),
        Validators.pattern(/^(?:[a-zA-Z0-9\s]+)?$/)])
      })
  }

  get name() { return this.registerForm.get('name'); }
  get value() { return this.registerForm.get('value'); }
  get description() { return this.registerForm.get('description'); }


  loadProducts() {
    this.productRest.getProducts().subscribe(
      (response) => { console.log(this.productList = response["product"]); },
      (error) => { console.log(error) }
     );
  }

  loadAttributes() {
    this.attributeRest.getAttributes().subscribe(
      (response) => { console.log(this.attributeList = response["attribute"]); },
      (error) => { console.log(error) }
     );
  }

  addAttribute() {
    console.log(this.espAttribute, this.productAttribute);
    let attType = '';
    Object.keys(this.attributeList).forEach((key: string) => {
      if(this.attributeList[key].name == this.productAttribute){
        console.log(this.attributeList[key]);
        attType = this.attributeList[key].type;
      }
    });
    if(attType == 'color'){
      this.generalColor.push(this.productAttribute + ' ' + this.espAttribute);
    }else if(attType == 'size'){
      this.generalSize.push(this.productAttribute + ' ' + this.espAttribute);
    }else if(attType == 'factory'){
      this.generalFactory.push(this.productAttribute + ' ' + this.espAttribute);
    }else if(attType == 'branch'){
      this.generalBranch.push(this.productAttribute + ' ' + this.espAttribute);
    }

    console.log(this.generalColor)
    console.log(this.generalSize)

    this.producAttributes[this.producAttributes.length] = {
      'color':  this.generalColor[this.generalColor.length - 1],
      'branch': this.generalBranch[this.generalBranch.length - 1],
      'size': this.generalSize[this.generalSize.length - 1],
      'factory': this.generalFactory[this.generalFactory.length - 1]
    }
    console.log(this.producAttributes);
  }
}
