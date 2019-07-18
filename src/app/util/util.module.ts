import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { CardItemComponent } from './components/card-item/card-item.component';

@NgModule({
  declarations: [PaginationComponent, ListItemComponent, CardItemComponent],
  imports: [
    CommonModule
  ]
})
export class UtilModule { }
