import { Injectable } from '@angular/core';
import { Iuser } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

   userList: Iuser[] = [
      {
         id: 1,
         firstName: 'Ashton',
         lastName: 'Kutcher',
         address: '92 Armstrong Ave',
         city: 'Old Bridge',
         state: 'NJ 08857',
      },
      {
         id: 2,
         firstName: 'Bradley',
         lastName: 'Pitt',
         address: '402 Buckingham Court',
         city: 'Livonia',
         state: 'MI 48150',
      },
      {
         id: 3,
         firstName: 'Jeanne',
         lastName: 'Reese',
         address: '8349 Gates Ave',
         city: 'Essex',
         state: 'MD 21221',
      },
      {
         id: 4,
         firstName: 'Dakota',
         lastName: 'Fanning',
         address: '402 Buckingham Court',
         city: 'Livonia',
         state: 'MI 48150',
      },
      {
         id: 5,
         firstName: 'Bill',
         lastName: 'Gates',
         address: '97 South Hartford St',
         city: 'Parsippany',
         state: 'TX 76039',
      },
      {
         id: 6,
         firstName: 'William',
         lastName: 'Ferrell',
         address: '7495 Thompson St',
         city: 'Woodhaven',
         state: 'NY 11421',
      },
      {
         id: 7,
         firstName: 'Paul',
         lastName: 'McCartney',
         address: '14 Gulf St',
         city: 'Battle Ground',
         state: 'WA 98604',
      },
      {
         id: 8,
         firstName: 'Neil',
         lastName: 'Simon',
         address: '15 Clay Ave',
         city: 'Fresh Meadows',
         state: 'NY 11365',
      },
      {
         id: 9,
         firstName: 'Warren',
         lastName: 'Beatty',
         address: '789 Sugar Court',
         city: 'Burke',
         state: 'VA 22015',
      },
      {
         id: 10,
         firstName: 'Garth',
         lastName: 'Brooks',
         address: '65 Central Street',
         city: 'Hixson',
         state: 'TN 37343',
      },
      {
         id: 11,
         firstName: 'Sean',
         lastName: 'Connery',
         address: '346 Fordham Ave',
         city: 'Bethlehem',
         state: 'PA 18015',
      },
      {
         id: 12,
         firstName: 'Calvin',
         lastName: 'Coolidge',
         address: '7205 Lake Forest St',
         city: 'Antioch',
         state: 'TN 37013',
      }
   ];

   constructor() {
   }

   getUsers(): Iuser[] {
      return this.userList;
   }

   addUsers(user: Iuser) {
      if (user.id) {
         const index = this.userList.findIndex(x => x.id === +user.id);
         this.userList[index] = user;
      } else {
         this.userList.push(user);
      }
   }

   getUserById(id) {
      return this.userList.filter(x => x.id === +id)[0];
   }
}
