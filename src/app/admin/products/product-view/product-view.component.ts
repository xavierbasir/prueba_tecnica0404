import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductRestService } from '../product-rest.service';
import { FormGroup, FormControlName, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  productList: Array<object> = [];
  serverErrors = [];
  registerForm: FormGroup
  constructor(private route: ActivatedRoute, private productRest: ProductRestService, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.loadProducts();
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
}
