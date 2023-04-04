import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductRestService } from '../product-rest.service';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.scss']
})
export class ProductIndexComponent implements OnInit {
  productList: Array<object> = [];

  constructor(private route: ActivatedRoute, private productRest: ProductRestService, private router: Router) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productRest.getProducts().subscribe(
      (response) => { console.log(this.productList = response["product"]); },
      (error) => { console.log(error) }
     );
  }

  deleteProduct(id: number) {
    if(confirm("Are you sure to delete ")) {
      this.productRest.deleteProduct(id).subscribe(
        (response) => this.loadProducts(),
        (error) => console.log(error)
      );
    }
  }

  editProduct(id: number) {
    this.router.navigate(['products/edit',id]);
  }

  viewProduct(id: number) {
    this.router.navigate(['products/view',id]);
  }
}
