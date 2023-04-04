import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserRestService } from '../user-rest.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  updateUser: FormGroup;  
  @Input() data:any;
  constructor(private route: ActivatedRoute, private userRest: UserRestService, private router: Router) { }

  ngOnInit() {   
     let id = this.route.snapshot.params.id;
     this.userRest.editUser(id).subscribe(
      (response) => {
        this.updateUser.patchValue({
          'email':response.user.email
        })
      },
      (error) => console.log(error) 
    );

      console.log(this.data);

      this.updateUser = new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email])
      });    
  }

  get email() { return this.updateUser.get('email'); }

  updateUserDetails(){
    let id = this.route.snapshot.params.id;
    this.userRest.updateUser(this.updateUser,id).subscribe(
      (response) => {
        console.log(response),
        this.router.navigate(['users'])
      },
      (error) => console.log(error),
      () => console.log('completed') 
    );
  }
}
