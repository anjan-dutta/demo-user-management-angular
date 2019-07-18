import { Component, OnInit } from '@angular/core';
import { faUser, faThLarge, faBars, faPlus, faPenSquare } from '@fortawesome/free-solid-svg-icons';

import { Iuser} from './../customer.model';
import { CustomerService } from './../customer.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  faUser = faUser;
  faThLarge = faThLarge;
  faBars = faBars;
  faPlus = faPlus;
  faPenSquare = faPenSquare;
  users: Iuser[];
  rowTransform = false;
  p: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
     this.users = this.customerService.getUsers();
  }

  listView() {
   this.rowTransform = true;
  }

  cardView() {
   this.rowTransform = false;
  }

}
