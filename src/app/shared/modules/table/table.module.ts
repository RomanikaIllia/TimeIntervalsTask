import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TableComponent } from './table.component';

@NgModule({
  imports: [CommonModule, PerfectScrollbarModule],
  declarations: [TableComponent],
  exports: [TableComponent]
})
export class TableModule { }
