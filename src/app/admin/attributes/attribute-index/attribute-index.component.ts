import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AttributeRestService } from '../attribute-rest.service';

@Component({
  selector: 'app-attribute-index',
  templateUrl: './attribute-index.component.html',
  styleUrls: ['./attribute-index.component.scss']
})
export class AttributeIndexComponent implements OnInit {
  attributeList: Array<object> = [];

  constructor(private route: ActivatedRoute, private attributeRest: AttributeRestService, private router: Router) { }

  ngOnInit() {
    this.loadAttributes();
  }

  loadAttributes() {
    this.attributeRest.getAttributes().subscribe(
      (response) => { console.log(this.attributeList = response["attribute"]); },
      (error) => { console.log(error) }
     );
  }

  deleteAttribute(id: number) {
    if(confirm("Are you sure to delete ")) {
      this.attributeRest.deleteAttribute(id).subscribe(
        (response) => this.loadAttributes(),
        (error) => console.log(error)
      );
    }
  }

  editAttribute(id: number) {
    this.router.navigate(['attributes/edit',id]);
  }

  viewAttribute(id: number) {
    this.router.navigate(['attributes/view',id]);
  }
}
