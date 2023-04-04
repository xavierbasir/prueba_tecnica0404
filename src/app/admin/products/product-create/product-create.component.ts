import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductRestService } from '../product-rest.service';
import { FormGroup, FormControlName, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  productList: Array<object> = [];
  serverErrors = [];
  registerForm: FormGroup
  constructor(private route: ActivatedRoute, private productRest: ProductRestService, private router: Router) { }

  ngOnInit() {
    this.loadProducts();
    this.registerForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(10),
        Validators.pattern(/^(?:[a-zA-Z0-9\s]+)?$/)]),
      'value': new FormControl(1, [Validators.required, Validators.min(1),
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

  registerProduct(){
     console.log(this.registerForm);
      this.productRest.storeProduct(this.registerForm).subscribe(
        response => {
          console.log(response)
          let baseUrl = window.location.href;
          baseUrl = baseUrl.substring(0, baseUrl.length - 7);
          console.log(baseUrl)
          window.location.href = baseUrl;
          window.location.reload();
          this.router.navigate(['products']);
        },
        error =>{
          this.serverErrors = error.error.errors
        }
      );
  }

}
