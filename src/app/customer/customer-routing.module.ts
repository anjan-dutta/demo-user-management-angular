import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import { CrudComponent } from './crud/crud.component';
import { ViewComponent } from './view/view.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
   { path: '', redirectTo: 'list', pathMatch: 'prefix'},
   { path: 'list', component: ListComponent},
   { path: 'add', component: CrudComponent},
   { path: 'edit/:id', component: CrudComponent},
   { path: 'view/:id', component: ViewComponent},
];

@NgModule({
  declarations: [ListComponent, CrudComponent, ViewComponent],
  imports: [RouterModule.forChild(routes), FontAwesomeModule, CommonModule, ReactiveFormsModule, NgxPaginationModule],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
