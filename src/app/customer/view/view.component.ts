/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faList, faPenSquare, faUser } from '@fortawesome/free-solid-svg-icons';

import { CustomerService } from './../customer.service';
import { Iuser } from './../customer.model';

import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

   faList = faList;
   faPenSquare = faPenSquare;
   faUser = faUser;
   id: number;
   customer: Iuser;
   @ViewChild('gmap') gmapElement: any;
   map: google.maps.Map;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
   this.activatedRoute.paramMap.subscribe(params => {
      this.id = +params.get('id');
      if (!this.id) {
         this.router.navigate(['/customer/list']);
      } else {
         this.customer = this.customerService.getUserById(this.id);
      }
   });

   const mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

   this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

}
