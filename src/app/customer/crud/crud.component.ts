import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faUser, faThLarge, faBars, faPlus, faPenSquare, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { CustomerService } from './../customer.service';
import { Iuser } from '../customer.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

   faUser = faUser;
   faThLarge = faThLarge;
   faBars = faBars;
   faPlus = faPlus;
   faPenSquare = faPenSquare;
   editMode = false;
   title: string;
   customerForm: FormGroup;
   savedTrue =  false;
   faArrowLeft = faArrowLeft;
   searchedUser: Iuser;

  constructor(private customerService: CustomerService, private router: Router, private activatedRoute: ActivatedRoute) {
   }

  ngOnInit() {

   this.customerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      address:  new FormControl('', Validators.required),
      city:  new FormControl('', Validators.required),
      state:  new FormControl('', Validators.required),
    });

   this.activatedRoute.paramMap.subscribe(params => {
      this.title = params.get('id') ? 'Edit Customer Info' : 'Create Customer';
      this.searchedUser = this.customerService.getUserById(params.get('id'));

      if (params.get('id') && !this.searchedUser) {
         this.router.navigate(['/customer/list']);
      } else if (params.get('id') && this.searchedUser) {
         this.editMode = true;
         this.customerForm.patchValue(this.searchedUser);
      } else {
         // create mode
      }
    });
  }

  saveCustomer() {
     if (this.editMode) {
        this.customerForm.value.id = this.searchedUser.id;
     }

     this.customerService.addUsers(this.customerForm.value);
     this.customerForm.reset();

     this.savedTrue =  true;
     setTimeout(function() {
      this.savedTrue =  false;
     }.bind(this), 3000);
  }

}
